import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Drawer, DrawerContent } from "../ui/drawer";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import SongCard from "../song-card";
import { Dispatch, SetStateAction } from "react";
import { SongbookSelect } from "@/db/schema";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function RandomSongDialog({
  isRandomSongOpen,
  setIsRandomSongOpen,
  randomSong,
}: {
  isRandomSongOpen: boolean;
  setIsRandomSongOpen: Dispatch<SetStateAction<boolean>>;
  randomSong: SongbookSelect | null;
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  if (isMobile) {
    return (
      <Drawer open={isRandomSongOpen} onOpenChange={setIsRandomSongOpen}>
        <VisuallyHidden>
          <DialogTitle>случайная песня</DialogTitle>
        </VisuallyHidden>
        <DrawerContent className="w-full">
          <RandomSongContent randomSong={randomSong} />
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={isRandomSongOpen} onOpenChange={setIsRandomSongOpen}>
      <VisuallyHidden>
        <DialogTitle>случайная песня</DialogTitle>
      </VisuallyHidden>
      <DialogContent className="sm:max-w-[425px] w-full">
        <RandomSongContent randomSong={randomSong} />
      </DialogContent>
    </Dialog>
  );
}

const RandomSongContent = ({
  randomSong,
}: {
  randomSong: SongbookSelect | null;
}) => (
  <div className="flex flex-col items-center p-4 w-full">
    {randomSong && (
      <SongCard
        song={randomSong}
        className="w-[85vw] sm:w-[280px] mb-6 sm:my-6"
      />
    )}
  </div>
);
