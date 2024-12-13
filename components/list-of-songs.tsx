import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ScrollArea } from "./ui/scroll-area";
import SongCard from "./song-card";
import { SongbookSelect } from "@/db/schema";

const SongList = ({ filteredSongs }: { filteredSongs: SongbookSelect[] }) => (
  <ScrollArea className="h-[calc(100svh-11.5rem)] sm:h-[calc(100svh-11.5rem)]">
    <VisuallyHidden>
      <h2>список песен для караоке</h2>
    </VisuallyHidden>
    {filteredSongs.length <= 0 ? (
      <div className="text-center sm:text-left">
        <p className="">кажется этого у нас нет...</p>
        <p className="text-balance pt-2">
          проверьте, что поиск идёт по категории "все песни"
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    )}
  </ScrollArea>
);

export default SongList;
