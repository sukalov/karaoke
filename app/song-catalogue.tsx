"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Category } from "@/types/types";
import { SongbookSelect } from "@/db/schema";
import { Footer } from "./footer";
import { alumni } from "./fonts/fonts";
import { useAdvancedSearch } from "@/hooks/use-advanced-search";
import {
  ChooseCategoryDrawer,
  ChooseCategorySidebar,
} from "@/components/dialogs/choose-category";
import DonateDrawer from "@/components/dialogs/donate";
import RandomSongDialog from "@/components/dialogs/random-song";
import SongList from "@/components/list-of-songs";
import SearchBar from "@/components/search-bar";
import SelectCategoryButton from "@/components/select-category-button";
import DonateButton from "@/components/donate-button";

export default function SongChooser({ songs }: { songs: SongbookSelect[] }) {
  const [currentCategory, setCurrentCategory] = useState<
    Category | "все песни"
  >("все песни");
  const [menuOpen, setMenuOpen] = useState(false);
  const [randomSong, setRandomSong] = useState<SongbookSelect | null>(null);
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

  return (
    <div className="container relative mx-auto p-4">
      <h1 className={`text-4xl mb-3 ${alumni.className}`}>
        <span className="align-middle">$</span>онгбук
      </h1>
      <DonateButton setIsDonateOpen={setIsDonateOpen} />
      <header className="flex flex-col sm:flex-row gap-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="flex gap-2 sm:hidden">
          <SelectCategoryButton
            setMenuOpen={setMenuOpen}
            currentCategory={currentCategory}
          />
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
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-4 pt-4">
        <div className="sm:block hidden">
          <ChooseCategorySidebar
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
        </div>
        <SongList filteredSongs={filteredSongs} />
      </div>
      <RandomSongDialog
        isRandomSongOpen={isRandomSongOpen}
        setIsRandomSongOpen={setIsRandomSongOpen}
        randomSong={randomSong}
      />
      {isMobile && (
        <ChooseCategoryDrawer
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
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
