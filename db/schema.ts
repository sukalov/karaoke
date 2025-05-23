import { Category } from "@/types/types";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

// id,category,artist,artist_nime,title,link,additional_chords
export const songbook = sqliteTable("songbook", {
  id: text("id").primaryKey(),
  category: text("category").notNull().$type<Category>(),
  title: text("title").notNull(),
  artist: text("artist"),
  artist_name: text("artist_name"),
  link: text("link").notNull(),
  additional_chords: text("additional_chords"),
  excluded: int("excluded", { mode: "boolean" }).$default(() => false),
  counter: int("counter").$default(() => 0), // times this song was selected
  created_at: int("created_at", { mode: "timestamp" }),
});

// id, chat_id, username, tg_name, saved_name, added_at
export const users = sqliteTable("users", {
  chat_id: int("chat_id").primaryKey(),
  username: text("username"),
  tg_name: text("tg_name"),
  saved_name: text("saved_name"),
  added_at: int("added_at", { mode: "timestamp" }),
  times_performed: int("times_performed").$default(() => 0),
});

export type SongbookSelect = InferSelectModel<typeof songbook>;
export type SongbookInsert = InferInsertModel<typeof songbook>;
export type UsersSelect = InferSelectModel<typeof users>;
export type UsersInsert = InferInsertModel<typeof users>;
