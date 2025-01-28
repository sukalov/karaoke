import { SongbookSelect } from "@/db/schema";
import { CATEGORIES } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

export default function SongCard({
  song,
  className,
}: {
  song: SongbookSelect;
  className?: ClassNameValue;
}) {
  const category = CATEGORIES.find((c) => c.name === song.category);
  const artist_name = song.artist_name ? song.artist_name + " " : "";
  const artistFull = artist_name + song.artist;
  const artist = song.artist ? artistFull : "неизвествен";
  return (
    <a
      href={`https://t.me/karaoke_sindikat_bot?start=${song.id}`}
      // href={song.link}
      target="_blank"
      className="block"
      aria-label={`перейти в телеграм бот и записаться петь песню ${song.title}`}
    >
      <Card
        className={cn(
          `overflow-hidden hover:shadow-md transition-all relative`,
          className
        )}
      >
        <ScrollArea>
          <div className={`absolute h-full w-3 bg-${category?.color}`}></div>
          <div className="p-4 m-auto pl-5 h-24 flex flex-col">
            <h3 className="font-medium text-balance lowercase">{song.title}</h3>
            <p className="text-sm text-muted-foreground text-balance lowercase">
              {artist}
            </p>
          </div>
        </ScrollArea>
      </Card>
    </a>
  );
}
