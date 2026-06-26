import { db } from "@/db";
import { SongbookSelect, songbook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { readFile } from "fs/promises";

import SongChooser from "./song-catalogue";

type SongbookJson = Omit<SongbookSelect, "created_at" | "excluded"> & {
  created_at: number | null;
  excluded: number | boolean | null;
};

const fromJson = (song: SongbookJson): SongbookSelect => ({
  ...song,
  created_at: song.created_at ? new Date(song.created_at * 1000) : null,
  excluded: song.excluded === null ? null : Boolean(song.excluded),
});

async function getSongsFromFile(path: string) {
  const file = await readFile(path, "utf8");
  return (JSON.parse(file) as SongbookJson[])
    .map(fromJson)
    .sort(() => Math.random() - 0.5);
}

async function getSongs() {
  if (process.env.SONGBOOK_DATA_PATH) {
    return getSongsFromFile(process.env.SONGBOOK_DATA_PATH);
  }

  return db
    .select()
    .from(songbook)
    .where(eq(songbook.excluded, false))
    .orderBy(sql`random()`);
}

export default async function HomePage() {
  const songs = await getSongs();
  return <SongChooser songs={songs} />;
}
