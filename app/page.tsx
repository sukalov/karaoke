import { db } from "@/db";
import { SongbookSelect, songbook } from "@/db/schema";
import { eq } from "drizzle-orm";
import { readFile } from "fs/promises";

import SongChooser from "./song-catalogue";

const PAGE_SIZE = 100;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const logBuildInfo = () => {
  const databaseUrl = process.env.DATABASE_URL;
  const databaseHost = databaseUrl ? new URL(databaseUrl).host : "missing";
  console.log("[songbook] build fetch", {
    databaseHost,
    hasAuthToken: Boolean(process.env.DATABASE_AUTH_TOKEN),
    pageSize: PAGE_SIZE,
  });
};

const logError = (offset: number, attempt: number, error: unknown) => {
  console.error("[songbook] page fetch failed", {
    offset,
    attempt,
    error,
  });
};

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
  console.log("[songbook] reading songs from file", { path });
  const file = await readFile(path, "utf8");
  const songs = (JSON.parse(file) as SongbookJson[]).map(fromJson);
  console.log("[songbook] read songs from file", { count: songs.length });
  return songs.sort(() => Math.random() - 0.5);
}

const getSongsPage = (offset: number) =>
  db
    .select()
    .from(songbook)
    .where(eq(songbook.excluded, false))
    .orderBy(songbook.id)
    .limit(PAGE_SIZE)
    .offset(offset);

async function getSongsPageWithRetry(offset: number) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log("[songbook] fetching page", { offset, attempt });
      const page = await getSongsPage(offset);
      console.log("[songbook] fetched page", {
        offset,
        attempt,
        count: page.length,
      });
      return page;
    } catch (error) {
      lastError = error;
      logError(offset, attempt, error);
      await sleep(attempt * 1000);
    }
  }

  throw lastError;
}

async function getSongs() {
  if (process.env.SONGBOOK_DATA_PATH) {
    return getSongsFromFile(process.env.SONGBOOK_DATA_PATH);
  }

  logBuildInfo();
  const songs: SongbookSelect[] = [];

  for (let offset = 0; ; offset += PAGE_SIZE) {
    const page = await getSongsPageWithRetry(offset);
    songs.push(...page);

    if (page.length < PAGE_SIZE) break;
  }

  console.log("[songbook] fetched all songs", { count: songs.length });
  return songs.sort(() => Math.random() - 0.5);
}

export default async function HomePage() {
  const songs = await getSongs();
  return <SongChooser songs={songs} />;
}
