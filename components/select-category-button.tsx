import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Category } from "@/types/types";
import { getColor } from "@/lib/utils";

const SelectCategoryButton = ({
  setMenuOpen,
  currentCategory,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  currentCategory: Category | "все песни";
}) => (
  <Button
    variant="outline"
    onClick={() => setMenuOpen(true)}
    className="flex-1 relative"
  >
    <div
      className={`absolute rounded-tl-md rounded-bl-md h-full w-2 left-0 ${
        currentCategory === "все песни" && "overflow-hidden"
      } bg-${getColor(currentCategory)}`}
    >
      {currentCategory == "все песни" && (
        <div>
          <div className="w-full h-1.5 bg-red-500"></div>
          <div className="w-full h-1.5 bg-purple-500"></div>
          <div className="w-full h-1.5 bg-blue-800"></div>
          <div className="w-full h-1.5 bg-green-500"></div>
          <div className="w-full h-1.5 bg-sky-500"></div>
          <div className="w-full h-1.5 bg-yellow-500"></div>
        </div>
      )}
    </div>
    жанры
  </Button>
);

export default SelectCategoryButton;
