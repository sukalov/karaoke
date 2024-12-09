import { Category } from "@/types/types";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { title } from "process";

export const songbook = sqliteTable("songbook", {
  id: text("id").primaryKey(),
  category: text("category").notNull().$type<Category>(),
  artist: text("artist"),
  title: text("title").notNull(),
  artist_name: text("artist_name"),
  link: text("link").notNull(),
  additional_chords: int("additional_chords"),
});

export type SongbookSelect = InferSelectModel<typeof songbook>;
export type SongbookInsert = InferInsertModel<typeof songbook>;
