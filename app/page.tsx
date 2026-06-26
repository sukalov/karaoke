import { db } from "@/db";
import { songbook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

import SongChooser from "./song-catalogue";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getSongs = () =>
  db
    .select()
    .from(songbook)
    .where(eq(songbook.excluded, false))
    .orderBy(sql`random()`);
// .orderBy(sql`${songbook.artist} nulls last`);

async function getSongsWithRetry() {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await getSongs();
    } catch (error) {
      lastError = error;
      await sleep(attempt * 1000);
    }
  }

  throw lastError;
}

export default async function HomePage() {
  const songs = await getSongsWithRetry();
  return <SongChooser songs={songs} />;
}
