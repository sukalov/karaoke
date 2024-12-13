import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

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

export default DonateButton;
