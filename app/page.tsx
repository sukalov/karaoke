import { db } from "@/db";
import SongChooser from "./song-catalogue";
import { songbook } from "@/db/schema";
import { sql } from "drizzle-orm";

export default async function HomePage() {
  const query = db.select().from(songbook).orderBy(sql`${songbook.artist} nulls last`)
  const songs = await query
  return <SongChooser songs={songs} />;
}
