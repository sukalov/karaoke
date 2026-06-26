import { SongbookSelect } from "@/db/schema";
import { Section } from "@/types/types";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";

// Comprehensive Cyrillic normalization
const normalizeCyrillic = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ё/g, "е") // Replace 'ё' with 'е'
    .normalize("NFD") // Decompose combined characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
};

const RECENT_DAYS = 120;

const getRecentlyAddedCutoff = () =>
  new Date(Date.now() - RECENT_DAYS * 24 * 60 * 60 * 1000);

const sortByCreatedAtDesc = <T extends SongbookSelect>(songs: T[]) =>
  [...songs].sort(
    (a, b) => (b.created_at?.getTime() || 0) - (a.created_at?.getTime() || 0)
  );

const isInSection = (
  song: SongbookSelect,
  currentCategory: Section,
  cutoff: Date
) => {
  if (currentCategory === "все песни") return true;
  if (currentCategory === "недавно добавили") {
    return !!song.created_at && song.created_at >= cutoff;
  }
  return song.category === currentCategory;
};

const filterBySection = <T extends SongbookSelect>(
  songs: T[],
  currentCategory: Section
) => {
  const cutoff = getRecentlyAddedCutoff();
  const filteredSongs = songs.filter((song) =>
    isInSection(song, currentCategory, cutoff)
  );

  return currentCategory === "недавно добавили"
    ? sortByCreatedAtDesc(filteredSongs)
    : filteredSongs;
};

export const useAdvancedSearch = (
  songs: SongbookSelect[],
  currentCategory: Section
) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [processedSearchTerm, setProcessedSearchTerm] = useState("");

  // Enhanced Fuse.js options for more flexible searching
  const fuseOptions = {
    keys: [
      {
        name: "title",
        weight: 0.6,
        getFn: (song: SongbookSelect) => normalizeCyrillic(song.title),
      },
      {
        name: "artist",
        weight: 0.4,
        getFn: (song: SongbookSelect) => normalizeCyrillic(song.artist || ""),
      },
    ],
    includeScore: true,
    threshold: 0.4, // Lowered threshold for more fuzzy matching
    distance: 100, // Adjusted distance for flexible matching
    minMatchCharLength: 1,
    shouldSort: true,
    useExtendedSearch: true,
  };

  // Memoized search results with enhanced filtering
  const filteredSongs = useMemo(() => {
    // Normalize processed search term for filtering
    const normalizedSearchTerm = normalizeCyrillic(processedSearchTerm.trim());

    // If no search term, filter only by category
    if (!normalizedSearchTerm) {
      return filterBySection(songs, currentCategory);
    }

    // Create Fuse instance
    const fuse = new Fuse(songs, fuseOptions);

    // Perform search with multiple strategies
    const directResults = fuse.search(normalizedSearchTerm);

    // Fallback search with more relaxed matching if direct search yields few results
    const fallbackResults =
      directResults.length < 3
        ? fuse.search(`'${normalizedSearchTerm}`) // Prefix matching
        : [];

    // Combine and deduplicate results
    const combinedResults = [
      ...directResults,
      ...fallbackResults.filter(
        (fallback) =>
          !directResults.some((direct) => direct.item.id === fallback.item.id)
      ),
    ];

    const cutoff = getRecentlyAddedCutoff();

    // Filter results by category and sort by relevance
    return combinedResults
      .map((result) => ({
        ...result.item,
        searchScore: result.score || 1,
      }))
      .filter((song) => isInSection(song, currentCategory, cutoff))
      .sort((a, b) => (a.searchScore || 1) - (b.searchScore || 1));
  }, [songs, processedSearchTerm, currentCategory]);

  // Enhanced search term setter
  const handleSearchTermChange = (term: string) => {
    // Keep original term for input field
    setSearchTerm(term);

    // Create processed term for searching
    const processedTerm = term
      .replace(/\s+/g, " ") // Normalize consecutive spaces
      .trim();

    setProcessedSearchTerm(processedTerm);
  };

  return {
    filteredSongs,
    searchTerm, // Original input for controlled input
    setSearchTerm: handleSearchTermChange,
  };
};
