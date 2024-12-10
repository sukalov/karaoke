import { Github, Twitter, Linkedin, Send, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-4 sm:mt-3 sm:h-8 py-4 sm:border-t max-h-12 p-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-3 mb-2 sm:mb-0 w-full sm:w-auto">
          <div className="text-sm text-gray-500">
            <span className="align-middle">&copy;</span>&nbsp;московский
            музыкальный синдикат
          </div>
          <div className="flex-grow sm:hidden"></div>
          <a
            href="https://t.me/povsemmestam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 align-middle"
          >
            <Send size={18} />
          </a>
          <a
            href="https://instagram.com/via_na_prazdnik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <Instagram size={18} />
          </a>
        </div>
        <div className="flex gap-1 sm:gap-3 w-full sm:w-auto">
          <a
            href="https://github.com/sukalov/karaoke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <Github size={18} />
          </a>
          <div className="flex-grow sm:hidden"></div>
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            by&nbsp;
            <a
              href="https://sukalov.dev"
              className=" underline-offset-2 underline hover:text-gray-700 transition-all"
            >
              sukalov.dev
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            2024
          </div>
        </div>
      </div>
    </footer>
  );
}
