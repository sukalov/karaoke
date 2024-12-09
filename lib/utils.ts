import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Papa from "papaparse";

export interface Song {
  category: string;
  artist: string;
  song_name: string;
  artist_name: string;
  link: string;
  additional_chords: string;
  id: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}