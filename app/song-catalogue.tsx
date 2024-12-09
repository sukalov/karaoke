"use client";

import { ReactNode, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Category } from "@/types/types";
import { cn, Song } from "@/lib/utils";
import { SongbookSelect } from "@/db/schema";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Drawer as Dr } from "vaul";
import { ClassNameValue } from "tailwind-merge";
import { Footer } from "./footer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ScrollAreaCompact } from "@/components/ui/scroll-area-compact";

const categories: Array<{ name: Category | "все песни"; color: string }> = [
  { name: "все песни", color: "gray-600" },
  { name: "советское", color: "red-500" },
  { name: "русский рок", color: "purple-500" },
  { name: "детские песни", color: "blue-800" },
  { name: "зарубежное", color: "green-500" },
  { name: "русская поп-музыка", color: "sky-500" },
  { name: "разное", color: "yellow-500" },
];

export default function SongChooser({ songs }: { songs: SongbookSelect[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("все песни");
  const [menuOpen, setMenuOpen] = useState(false);
  const [randomSong, setRandomSong] = useState<(typeof songs)[0] | null>(null);
  const [isRandomSongOpen, setIsRandomSongOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const filteredSongs = songs.filter(
    (song) =>
      (currentCategory === "все песни" || song.category === currentCategory) &&
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRandomSong = () => {
    const newRandomSong = songs[Math.floor(Math.random() * songs.length)];
    setRandomSong(newRandomSong);
    setIsRandomSongOpen(true);
  };

  const closeRandomSong = () => {
    setIsRandomSongOpen(false);
  };

  const RandomSongContent = () => (
    <div className="flex flex-col items-center p-4 w-full border-red-500">
      {randomSong && (
        <SongCard
          song={randomSong}
          className="w-[85vw] sm:w-[280px] mb-6 sm:my-6"
        />
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <VisuallyHidden>
        <div className="border-yellow-500"></div>
        <div className="border-gray-600"></div>
        <div className="border-red-500"></div>
        <div className="border-green-500"></div>
        <div className="border-purple-500"></div>
        <div className="border-blue-800"></div>
        <div className="border-sky-500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-gray-600"></div>
        <div className="bg-red-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-purple-500"></div>
        <div className="bg-blue-800"></div>
        <div className="bg-sky-500"></div>
      </VisuallyHidden>
      <h1 className="text-2xl font-extrabold mb-4 font-mono">
        <span className="font-extrabold">$</span>онгбук
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={17}
          />
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        {isMobile ? (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setMenuOpen(true)}
            >
              жанры
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={getRandomSong}
            >
              случайная песня
            </Button>
          </div>
        ) : (
          <Button variant="outline" onClick={getRandomSong}>
            случайная песня
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-4 pt-4">
        {!isMobile && (
          <div className="sm:block">
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-2">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    isActive={currentCategory === category.name}
                    onClick={() => setCurrentCategory(category.name)}
                    color={category.color}
                    isAll={category.name === "все песни"}
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
        <ScrollArea className="h-[calc(100svh-200px)] sm:h-[calc(100svh-180px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </ScrollArea>
      </div>
      {isMobile ? (
        <Drawer open={isRandomSongOpen} onOpenChange={setIsRandomSongOpen}>
          <VisuallyHidden>
            <DialogTitle>случайная песня</DialogTitle>
          </VisuallyHidden>
          <DrawerContent className="w-full">
            <RandomSongContent />
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isRandomSongOpen} onOpenChange={setIsRandomSongOpen}>
          <DialogContent className="sm:max-w-[425px] w-full">
            <RandomSongContent />
          </DialogContent>
        </Dialog>
      )}
      {isMobile && (
        <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
           <VisuallyHidden>
            <DialogTitle>жанры</DialogTitle>
          </VisuallyHidden>
          <DrawerContent className="my-16">
            <ScrollArea className="h-full pb-4 pl-6 border-red-400">
              <div className="space-y-2 p-2">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    isActive={currentCategory === category.name}
                    onClick={() => {
                      setCurrentCategory(category.name);
                      setMenuOpen(false);
                    }}
                    color={category.color}
                    isAll={category.name === "все песни"}
                    className="text-lg"
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </div>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      )}
      <Footer />
      <GiveMoneyButton />
    </div>
  );
}

function CategoryButton({
  isActive,
  onClick,
  color,
  children,
  isAll,
  className,
}: {
  isActive: boolean;
  onClick: () => void;
  color: string;
  children: ReactNode;
  isAll: boolean;
  className?: ClassNameValue;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        `w-full border-l-4 rounded-sm justify-start border-${color} 
      ${isAll && "font-bold"}
      ${isActive ? "border-opacity-100" : "border-opacity-0"} 
      `,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function SongCard({
  song,
  className,
}: {
  song: SongbookSelect;
  className?: ClassNameValue;
}) {
  const category = categories.find((c) => c.name === song.category);
  const artist_name = song.artist_name ? song.artist_name + " " : "";
  const artistFull = artist_name + song.artist;
  const artist = song.artist ? artistFull : "неизвествен";
  return (
    <a
      href={`https://t.me/karaoke_sindikat_bot?start=${song.id}`}
      className="block"
    >
      <Card
        className={cn(
          `overflow-hidden hover:shadow-md transition-all relative`,
          className
        )}
      >
        <ScrollAreaCompact>
          <div className={`absolute h-full w-4 bg-${category?.color}`}></div>
          <div className="p-4 pl-6 h-24">
            <h3 className="font-medium">{song.title}</h3>
            <p className="text-sm text-muted-foreground">{artist}</p>
          </div>
        </ScrollAreaCompact>
      </Card>
    </a>
  );
}

function GiveMoneyButton() {
  return (<Button className="absolute top-4 right-4">
    прость дать денег музыкантам
  </Button>)
}