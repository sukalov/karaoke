import { Category } from "@/types/types";

export const CATEGORIES: Array<{ name: Category | "все песни"; color: string }> = [
    { name: "все песни", color: "gray-600" },
    { name: "советское", color: "red-500" },
    { name: "русский рок", color: "purple-500" },
    { name: "детские песни", color: "blue-800" },
    { name: "зарубежное", color: "green-500" },
    { name: "русская поп-музыка", color: "sky-500" },
    { name: "разное", color: "yellow-500" },
  ];