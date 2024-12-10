"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, Copy, Search } from "lucide-react";
import SberSvg from "./assets/sber.svg";
import TinkoffSvg from "./assets/tinkoff.svg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Category } from "@/types/types";
import { cn } from "@/lib/utils";
import { SongbookSelect } from "@/db/schema";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ClassNameValue } from "tailwind-merge";
import { Footer } from "./footer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { alumni } from "./fonts/fonts";
import { useAdvancedSearch } from "@/hooks/use-advanced-search";
import { TopDrawer, TopDrawerContent, TopDrawerHeader } from "./top-drawer";
import Image from "next/image";
import Link from "next/link";
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";

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
  const [currentCategory, setCurrentCategory] = useState("все песни");
  const [menuOpen, setMenuOpen] = useState(false);
  const [randomSong, setRandomSong] = useState<(typeof songs)[0] | null>(null);
  const [isRandomSongOpen, setIsRandomSongOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const { filteredSongs, searchTerm, setSearchTerm } = useAdvancedSearch(
    songs,
    currentCategory
  );

  const getRandomSong = () => {
    const newRandomSong = songs[Math.floor(Math.random() * songs.length)];
    setRandomSong(newRandomSong);
    setIsRandomSongOpen(true);
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
    <div className="container relative mx-auto p-4">
      <h1 className={`text-4xl mb-3 ${alumni.className}`}>
        <span className="align-middle">$</span>онгбук
      </h1>
      <DonateButton setIsDonateOpen={setIsDonateOpen} />
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
            aria-label="поиск по песням"
          />
        </div>
        <div className="flex gap-2 sm:hidden">
          <Button
            variant="outline"
            onClick={() => setMenuOpen(true)}
            className="flex-1 relative"
          >
            {currentCategory !== "все песни" ? (
              <div
                className={`absolute rounded-tl-md rounded-bl-md h-full w-2 left-0 bg-${getColor(
                  currentCategory
                )}`}
              />
            ) : (
              <div
                className={`absolute rounded-tl-md rounded-bl-md h-full w-2 left-0 overflow-hidden bg-${getColor(
                  currentCategory
                )}`}
              >
                <div className="w-full h-1.5 bg-red-500"></div>
                <div className="w-full h-1.5 bg-purple-500"></div>
                <div className="w-full h-1.5 bg-blue-800"></div>
                <div className="w-full h-1.5 bg-green-500"></div>
                <div className="w-full h-1.5 bg-sky-500"></div>
                <div className="w-full h-1.5 bg-yellow-500"></div>
              </div>
            )}
            жанры
          </Button>
          <Button variant="outline" className="flex-1" onClick={getRandomSong}>
            случайная песня
          </Button>
        </div>
        <Button
          className="hidden sm:block"
          variant="outline"
          onClick={getRandomSong}
        >
          случайная песня
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-4 pt-4">
        <div className="sm:block hidden">
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-2">
              {categories.map((category) => (
                <CategoryButton
                  key={category.name}
                  isActive={currentCategory === category.name}
                  onClick={() => setCurrentCategory(category.name)}
                  color={category.color}
                  isAll={category.name === "все песни"}
                  categoryName={category.name}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
        <ScrollArea className="h-[calc(100svh-11.5rem)] sm:h-[calc(100svh-11.5rem)]">
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
          <VisuallyHidden>
            <DialogTitle>случайная песня</DialogTitle>
          </VisuallyHidden>
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
          <DrawerContent>
            <ScrollArea className="h-full pb-6 pl-6 border-red-400">
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
                    categoryName={category.name}
                  ></CategoryButton>
                ))}
              </div>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      )}
      <DonateDrawer
        isMobile={isMobile}
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
      <Footer />
    </div>
  );
}

const getColor = (category: string) =>
  categories.find((c) => c.name === category)?.color;

function CategoryButton({
  isActive,
  onClick,
  color,
  isAll,
  className,
  categoryName,
}: {
  isActive: boolean;
  onClick: () => void;
  color: string;
  isAll: boolean;
  className?: ClassNameValue;
  categoryName: string;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        `w-full rounded-sm relative justify-start ${isAll && "font-bold"}
      `,
        className
      )}
      onClick={onClick}
    >
      {categoryName !== "все песни" && isActive ? (
        <div
          className={`absolute rounded-tl-md rounded-bl-md h-full w-1.5 left-0 bg-${color}`}
        />
      ) : (
        isActive && (
          <div
            className={`absolute rounded-tl-md rounded-bl-md h-full w-1.5 left-0 overflow-hidden bg-${color}`}
          >
            <div className="w-full h-1.5 bg-red-500"></div>
            <div className="w-full h-1.5 bg-purple-500"></div>
            <div className="w-full h-1.5 bg-blue-800"></div>
            <div className="w-full h-1.5 bg-green-500"></div>
            <div className="w-full h-1.5 bg-sky-500"></div>
            <div className="w-full h-1.5 bg-yellow-500"></div>
          </div>
        )
      )}
      {categoryName}
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
      // href={`https://t.me/karaoke_sindikat_bot?start=${song.id}`}
      href={song.link}
      target="_blank"
      className="block"
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
            <h3 className="font-medium text-balance">{song.title}</h3>
            <p className="text-sm text-muted-foreground text-balance">
              {artist}
            </p>
          </div>
        </ScrollArea>
      </Card>
    </a>
  );
}

const DonateButton = ({
  setIsDonateOpen,
}: {
  setIsDonateOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <Button
    className="absolute top-5 right-4"
    onClick={() => setIsDonateOpen(true)}
  >
    просто дать денег музыкантам
  </Button>
);

const DonateDialogContent = ({
  copied,
  setCopied,
}: {
  copied: boolean;
  setCopied: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="p-4 px-8 pt-8 sm:pt-4 sm:pb-2 sm:px-4">
      <div className="flex flex-col gap-3 text-center">
        <Link href="https://www.tinkoff.ru/cf/9eX5F6qEily" className="w-full">
          <Button className="p-2 h-20 w-full" variant="outline">
            <Image
              alt="тинькофф банк"
              src={TinkoffSvg}
              width={170}
              height={24}
            />
          </Button>
        </Link>
        <Link href="https://pay.mysbertips.ru/17458725" className="w-full">
          <Button className="p-2 h-14 w-full" variant="outline">
            <Image
              alt="сбербанк чаевые"
              src={SberSvg}
              width={170}
              height={24}
            />
          </Button>
        </Link>
        <TooltipProvider>
          <div className="text-lg w-full font-mono font-semibold flex flex-row justify-center items-center gap-3">
            +7-916-06-506-11
            <Tooltip>
              <CopyToClipboard text="+79160650611">
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="aspect-square p-2 w-10 h-10 transition-all"
                    onClick={() => setCopied(true)}
                  >
                    {!copied ? <Copy /> : <Check />}
                  </Button>
                </TooltipTrigger>
              </CopyToClipboard>
              <TooltipContent>
                {!copied ? <p>скопировать номер</p> : <p>номер у вас!</p>}
              </TooltipContent>
            </Tooltip>
            <div className="flex-grow" />
            матвей
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

function DonateDrawer({
  isMobile,
  isDonateOpen,
  setIsDonateOpen,
}: {
  isMobile: boolean;
  isDonateOpen: boolean;
  setIsDonateOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <>
      {isMobile ? (
        <TopDrawer
          open={isDonateOpen}
          onOpenChange={setIsDonateOpen}
          onClose={() => setCopied(false)}
        >
          <VisuallyHidden>
            <DialogTitle>пожертвования музыкантам</DialogTitle>
          </VisuallyHidden>
          <TopDrawerContent>
            <DonateDialogContent copied={copied} setCopied={setCopied} />
          </TopDrawerContent>
        </TopDrawer>
      ) : (
        <Dialog open={isDonateOpen} onOpenChange={setIsDonateOpen}>
          <VisuallyHidden>
            <DialogTitle>пожертвования музыкантам</DialogTitle>
          </VisuallyHidden>
          <DialogContent className="sm:max-w-[425px] w-full">
            <DonateDialogContent copied={copied} setCopied={setCopied} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
