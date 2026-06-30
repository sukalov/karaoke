"use client";

import { Github, Instagram, Moon, Send, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "включить светлую тему" : "включить тёмную тему"}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function Footer() {
  return (
    <footer className="sm:mt-2 sm:h-8 py-4 sm:border-t border-border p-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-3 mb-2 sm:mb-0 w-full sm:w-auto">
          <div className="text-sm text-muted-foreground">
            <span className="align-middle">&copy;</span>&nbsp;гастроли по москве
          </div>
          <div className="flex-grow sm:hidden"></div>
          <a
            href="https://t.me/povsemmestam"
            target="_blank"
            aria-label="телеграм канал про наши мероприятия"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground align-middle transition-colors"
          >
            <Send size={18} />
          </a>
          <a
            href="https://instagram.com/via_na_prazdnik"
            target="_blank"
            aria-label="инстаграм гастролей по москве"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>
        <div className="flex gap-1 sm:gap-3 w-full sm:w-auto items-center">
          <ThemeToggle />
          <a
            href="https://github.com/sukalov/karaoke"
            aria-label="исходный код этого сайта"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <div className="flex-grow sm:hidden"></div>
          <div className="text-sm text-muted-foreground mb-2 sm:mb-0">
            by&nbsp;
            <a
              href="https://sukalov.dev"
              aria-label="автор сайта"
              className="underline-offset-2 underline hover:text-foreground transition-colors"
            >
              sukalov.dev
            </a>
          </div>
          <div className="text-sm text-muted-foreground mb-2 sm:mb-0">2024</div>
        </div>
      </div>
    </footer>
  );
}
