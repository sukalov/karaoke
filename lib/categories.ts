import { Category } from "@/types/types";

const CATEGORIES: Array<{ name: Category | "все песни"; color: string }> = [
    { name: "все песни", color: "border-grey-300" },
    { name: "советское", color: "border-red-500" },
    { name: "русский рок", color: "border-purple-500" },
    { name: "детские песни", color: "border-blue-500" },
    { name: "зарубежное", color: "border-green-500" },
    { name: "русская поп-музыка", color: "border-orange-500" },
    { name: "разное", color: "border-yellow-500" },
  ];

export default CATEGORIES