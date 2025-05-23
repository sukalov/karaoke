import SberSvg from "@/app/assets/sber.svg";
import TinkoffSvg from "@/app/assets/tinkoff.svg";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Check, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { DrawerTitle } from "../ui/drawer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TopDrawer, TopDrawerContent } from "../ui/top-drawer";

export default function DonateDrawer({
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
            <DrawerTitle>пожертвования музыкантам</DrawerTitle>
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
