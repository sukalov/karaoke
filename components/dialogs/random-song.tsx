import { SongbookSelect } from "@/db/schema";
import { useMediaQuery } from "@/hooks/use-media-query";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dispatch, SetStateAction } from "react";

import SongCard from "../song-card";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Drawer, DrawerContent } from "../ui/drawer";

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
          <div className="h-[30svh] flex items-center justify-center">
            <RandomSongContent randomSong={randomSong} />
          </div>
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
