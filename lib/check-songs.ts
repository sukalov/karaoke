import { db } from "@/db";
import { songbook } from "@/db/schema";
import { eq } from "drizzle-orm";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const checkSongs = async () => {
  const query = db.select().from(songbook);
  const songs = await query;

  const BATCH_SIZE = 10; // Process 10 URLs at a time
  const DELAY_MS = 1000; // Wait 1 second between batches

  let totalRejected = 0;
  let totalFulfilled = 0;
  let totalUpdated = 0;

  // Process songs in batches
  for (
    let batchStart = 0;
    batchStart < songs.length;
    batchStart += BATCH_SIZE
  ) {
    const batch = songs.slice(batchStart, batchStart + BATCH_SIZE);
    console.log(
      `Processing batch ${Math.floor(batchStart / BATCH_SIZE) + 1}/${Math.ceil(
        songs.length / BATCH_SIZE
      )} (${batch.length} songs)`
    );

    // Create fetch promises for this batch
    const fetches = batch.map((song) => fetch(song.link));

    // Wait for all fetches in this batch to complete
    const results = await Promise.allSettled(fetches);

    let batchRejected = 0;
    let batchFulfilled = 0;
    let batchUpdated = 0;

    // Process results
    for (let i = 0; i < results.length; i++) {
      const song = batch[i];
      const result = results[i];

      if (result.status === "rejected") {
        console.error(
          `REJECTED: ${song.id} ${song.title} ${song.artist} - ${result.reason}`
        );
        batchRejected++;
      } else {
        batchFulfilled++;
        try {
          const text = await result.value.text();
          if (text.startsWith("http://")) {
            const https = text.replace("http://", "https://").trim();
            const httpsNoDot = https.endsWith(".") ? https.slice(0, -1) : https;

            await db
              .update(songbook)
              .set({ link: httpsNoDot })
              .where(eq(songbook.id, song.id));

            console.log(
              `UPDATED: ${song.id} ${song.title} ${song.artist} -> ${httpsNoDot}`
            );
            batchUpdated++;
          }
        } catch (error) {
          console.error(
            `ERROR processing response for ${song.id}: ${
              error instanceof Error ? error.message : String(error)
            }`
          );
        }
      }
    }

    totalRejected += batchRejected;
    totalFulfilled += batchFulfilled;
    totalUpdated += batchUpdated;

    console.log(
      `Batch complete - Updated: ${batchUpdated}, Fulfilled: ${batchFulfilled}, Rejected: ${batchRejected}`
    );

    // Wait before next batch (except for the last batch)
    if (batchStart + BATCH_SIZE < songs.length) {
      console.log(`Waiting ${DELAY_MS}ms before next batch...\n`);
      await sleep(DELAY_MS);
    }
  }

  console.log("\n=== FINAL RESULTS ===");
  console.log(`Total songs processed: ${songs.length}`);
  console.log(`Total fulfilled: ${totalFulfilled}`);
  console.log(`Total rejected: ${totalRejected}`);
  console.log(`Total updated: ${totalUpdated}`);
};

checkSongs();
