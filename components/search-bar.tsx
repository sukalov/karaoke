import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Dispatch, SetStateAction } from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (_term: string) => void;
}) => (
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
);

export default SearchBar;
