"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const categories = [
  { name: "Pop", color: "border-pink-500" },
  { name: "Rock", color: "border-red-500" },
  { name: "Hip Hop", color: "border-purple-500" },
  { name: "R&B", color: "border-blue-500" },
  { name: "Country", color: "border-yellow-500" },
  { name: "Electronic", color: "border-green-500" },
  { name: "Jazz", color: "border-orange-500" },
];

const songs = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  title: `Song ${i + 1}`,
  category: categories[Math.floor(Math.random() * categories.length)].name,
}));

export default function SongChooser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [randomSong, setRandomSong] = useState<(typeof songs)[0] | null>(null);
  const [isRandomSongOpen, setIsRandomSongOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const filteredSongs = songs.filter(
    (song) =>
      searchTerm !== "" &&
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
    <div className="flex flex-col items-center">
      {randomSong && <SongCard song={randomSong} />}
      <div className="flex gap-4 mt-4">
        <Button onClick={getRandomSong}>другая песня</Button>
        <Button variant="outline" onClick={closeRandomSong}>
          назад
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Song Chooser</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Input
          type="search"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={getRandomSong}>Random Song</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4">
        <div className="sm:block">
          {isMobile && (
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full mb-2"
            >
              <Menu className="mr-2 h-4 w-4" /> Categories
            </Button>
          )}
          {(!isMobile || menuOpen) && (
            <ScrollArea className="h-[300px] sm:h-[calc(100vh-200px)]">
              <div className="space-y-2 p-2">
                <CategoryButton
                  isActive={currentCategory === "All"}
                  color={""}
                  onClick={() => {
                    setCurrentCategory("All");
                    setMenuOpen(false);
                  }}
                >
                  All Songs
                </CategoryButton>
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    isActive={currentCategory === category.name}
                    onClick={() => {
                      setCurrentCategory(category.name);
                      setMenuOpen(false);
                    }}
                    color={category.color}
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </ScrollArea>
      </div>
      {isMobile ? (
        <Drawer
          open={isRandomSongOpen}
          onOpenChange={setIsRandomSongOpen}
          shouldScaleBackground
        >
          <VisuallyHidden.VisuallyHidden>
            <DrawerHeader>случайная песня</DrawerHeader>
          </VisuallyHidden.VisuallyHidden>
          <DrawerContent>
            <div className="p-4">
              <RandomSongContent />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isRandomSongOpen} onOpenChange={setIsRandomSongOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Random Song</DialogTitle>
            </DialogHeader>
            <RandomSongContent />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function CategoryButton({ isActive, onClick, color, children }) {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`w-full justify-start ${color} ${
        isActive ? "border-l-2" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function SongCard({ song }: { song: Song }) {
  const category = categories.find((c) => c.name === song.category);
  return (
    <a href={`#song-${song.id}`} className="block">
      <Card
        className={`w-full overflow-hidden hover:shadow-md transition-shadow ${category?.color} border-l-2`}
      >
        <div className="p-4">
          <h3 className="font-medium">{song.title}</h3>
          <p className="text-sm text-muted-foreground">{song.category}</p>
        </div>
      </Card>
    </a>
  );
}

interface Song {
  id: number;
  title: string;
  category: string;
}
