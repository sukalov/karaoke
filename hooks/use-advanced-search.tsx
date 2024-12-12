import { SongbookSelect } from "@/db/schema";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";

// Comprehensive Cyrillic normalization
const normalizeCyrillic = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ё/g, "е")    // Replace 'ё' with 'е'
    .replace(/[ий]/g, "и") // Normalize similar Cyrillic characters
    .normalize("NFD")      // Decompose combined characters
    .replace(/[\u0300-\u036f]/g, "")  // Remove diacritical marks
    .replace(/[ъь]/g, ""); // Remove soft and hard signs
};

export const useAdvancedSearch = (
  songs: SongbookSelect[], 
  currentCategory: string
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [processedSearchTerm, setProcessedSearchTerm] = useState("");

  // Enhanced Fuse.js options for more flexible searching
  const fuseOptions = {
    keys: [
      { 
        name: "title", 
        weight: 0.6,  
        getFn: (song: SongbookSelect) => normalizeCyrillic(song.title)
      },
      { 
        name: "artist", 
        weight: 0.4,  
        getFn: (song: SongbookSelect) => normalizeCyrillic(song.artist || "")
      }
    ],
    includeScore: true,
    threshold: 0.4,     // Lowered threshold for more fuzzy matching
    distance: 100,      // Adjusted distance for flexible matching
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
      return songs.filter(
        (song) => currentCategory === "все песни" || song.category === currentCategory
      );
    }

    // Create Fuse instance
    const fuse = new Fuse(songs, fuseOptions);

    // Perform search with multiple strategies
    const directResults = fuse.search(normalizedSearchTerm);
    
    // Fallback search with more relaxed matching if direct search yields few results
    const fallbackResults = directResults.length < 3 
      ? fuse.search(`'${normalizedSearchTerm}`) // Prefix matching
      : [];

    // Combine and deduplicate results
    const combinedResults = [
      ...directResults,
      ...fallbackResults.filter(
        fallback => !directResults.some(direct => direct.item.id === fallback.item.id)
      )
    ];

    // Filter results by category and sort by relevance
    return combinedResults
      .map(result => ({
        ...result.item,
        searchScore: result.score || 1
      }))
      .filter(
        (song) => 
          (currentCategory === "все песни" || song.category === currentCategory)
      )
      .sort((a, b) => (a.searchScore || 1) - (b.searchScore || 1));
  }, [songs, processedSearchTerm, currentCategory]);

  // Enhanced search term setter 
  const handleSearchTermChange = (term: string) => {
    // Keep original term for input field
    setSearchTerm(term);

    // Create processed term for searching
    const processedTerm = term
      .replace(/\s+/g, ' ') // Normalize consecutive spaces
      .trim();
    
    setProcessedSearchTerm(processedTerm);
  };

  return { 
    filteredSongs, 
    searchTerm,  // Original input for controlled input
    setSearchTerm: handleSearchTermChange 
  };
};