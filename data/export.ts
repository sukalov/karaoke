import { db } from "@/db";
import { songbook, SongbookInsert } from "@/db/schema";
import Papa from "papaparse";

const main = async () => {
  const file = Bun.file("./data/songs.csv");
  const text = await file.text();
  const parseRes = Papa.parse(text, { header: true });
  const data = parseRes.data as SongbookInsert[];
  for (let line of data) {
    for (let key of Object.keys(line) as (keyof SongbookInsert)[]) {
      if (line[key] === "") {
        switch (key) {
          case "id":
          case "link":
          case "category":
          case "title":
            line[key] = null as any;
            break;
          default:
            line[key] = null;
            break;
        }
      }
    }
  }
  await db.delete(songbook);
  await db.insert(songbook).values(data);
};

main();
