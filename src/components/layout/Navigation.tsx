import { Languages, Sun, Moon, Menu, X } from "lucide-react";
import type { Theme, Language } from "../../types";

interface NavigationProps {
  theme: Theme;
  language: Language;
  isMenuOpen: boolean;
  onThemeToggle: () => void;
  onLanguageToggle: () => void;
  onMenuToggle: () => void;
  onNavigate: (section: string) => void;
  t: any;
}

export const Navigation = ({
  theme,
  language,
  isMenuOpen,
  onThemeToggle,
  onLanguageToggle,
  onMenuToggle,
  onNavigate,
  t,
}: NavigationProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {Object.entries(t.nav).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
          >
            {value as string}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onLanguageToggle}
          className="px-3 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 flex items-center gap-2"
        >
          <Languages className="w-4 h-4" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </button>

        <button
          onClick={onThemeToggle}
          className="p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
        >
          {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 py-4 space-y-2 bg-background/95 backdrop-blur-md">
          {Object.entries(t.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                onNavigate(key);
                onMenuToggle();
              }}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer bg-transparent border-none"
            >
              {value as string}
            </button>
          ))}
        </div>
      )}
    </>
  );
};