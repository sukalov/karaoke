import { db } from "@/db";
import { songbook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

import SongChooser from "./song-catalogue";

export default async function HomePage() {
  const query = db
    .select()
    .from(songbook)
    .where(eq(songbook.excluded, false))
    .orderBy(sql`random()`);
  // .orderBy(sql`${songbook.artist} nulls last`);
  const songs = await query;
  return <SongChooser songs={songs} />;
}
