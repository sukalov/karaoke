import { Category } from "@/types/types";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const songbook = sqliteTable("songbook", {
  id: text("id").primaryKey(),
  category: text("category").notNull().$type<Category>(),
  title: text("title").notNull(),
  artist: text("artist"),
  artist_name: text("artist_name"),
  link: text("link").notNull(),
  additional_chords: int("additional_chords"),
});
// id,category,artist,artist_nime,title,link,additional_chords

export type SongbookSelect = InferSelectModel<typeof songbook>;
export type SongbookInsert = InferInsertModel<typeof songbook>;
