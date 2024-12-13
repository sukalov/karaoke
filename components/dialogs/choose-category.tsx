import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Drawer, DrawerContent } from "../ui/drawer";
import { DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { Category } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import { CATEGORIES } from "@/lib/categories";

const ChooseCategoryDrawer = ({
  menuOpen,
  setMenuOpen,
  setCurrentCategory,
  currentCategory,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentCategory: Dispatch<SetStateAction<Category | "все песни">>;
  currentCategory: Category | "все песни";
}) => {
  return (
    <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
      <VisuallyHidden>
        <DialogTitle>жанры</DialogTitle>
      </VisuallyHidden>
      <DrawerContent>
        <ScrollArea className="h-full pb-6 px-6 border-red-400">
          <div className="space-y-2 p-2">
            {CATEGORIES.map((category) => (
              <CategoryButton
                key={category.name}
                isActive={currentCategory === category.name}
                onClick={() => {
                  setCurrentCategory(category.name);
                  setMenuOpen(false);
                }}
                color={category.color}
                isAll={category.name === "все песни"}
                className="text-lg"
                categoryName={category.name}
              ></CategoryButton>
            ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

function CategoryButton({
  isActive,
  onClick,
  color,
  isAll,
  className,
  categoryName,
}: {
  isActive: boolean;
  onClick: () => void;
  color: string;
  isAll: boolean;
  className?: ClassNameValue;
  categoryName: string;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        `w-full rounded-sm relative justify-start ${isAll && "font-bold"}
      `,
        className
      )}
      onClick={onClick}
    >
      {categoryName !== "все песни" && isActive ? (
        <div
          className={`absolute rounded-tl-md rounded-bl-md h-full w-1.5 left-0 bg-${color}`}
        />
      ) : (
        isActive && (
          <div
            className={`absolute rounded-tl-md rounded-bl-md h-full w-1.5 left-0 overflow-hidden bg-${color}`}
          >
            <div className="w-full h-1.5 bg-red-500"></div>
            <div className="w-full h-1.5 bg-purple-500"></div>
            <div className="w-full h-1.5 bg-blue-800"></div>
            <div className="w-full h-1.5 bg-green-500"></div>
            <div className="w-full h-1.5 bg-sky-500"></div>
            <div className="w-full h-1.5 bg-yellow-500"></div>
          </div>
        )
      )}
      {categoryName}
    </Button>
  );
}

const ChooseCategorySidebar = ({
  setCurrentCategory,
  currentCategory,
}: {
  setCurrentCategory: Dispatch<SetStateAction<Category | "все песни">>;
  currentCategory: Category | "все песни";
}) => (
  <ScrollArea className="h-[calc(100vh-200px)]">
    <div className="space-y-2">
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category.name}
          isActive={currentCategory === category.name}
          onClick={() => setCurrentCategory(category.name)}
          color={category.color}
          isAll={category.name === "все песни"}
          categoryName={category.name}
        />
      ))}
    </div>
  </ScrollArea>
);

export { ChooseCategoryDrawer, ChooseCategorySidebar };
