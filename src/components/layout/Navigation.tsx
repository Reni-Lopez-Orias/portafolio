import { Languages, Sun, Moon, Menu, X } from "lucide-react";
import type { Theme, Language } from "../../types";
import { useEffect, useRef } from "react";

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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer click fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        onMenuToggle();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        onMenuToggle();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, onMenuToggle]);

  const handleMobileNavigate = (section: string) => {
    onNavigate(section);
    onMenuToggle();
  };

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
          {theme === "dark" ? (
            <Sun aria-label="Change theme" className="w-4 h-4" />
          ) : (
            <Moon aria-label="Change theme" className="w-4 h-4" />
          )}
        </button>

        <div className="relative md:hidden" ref={mobileMenuRef}>
          <button
            onClick={onMenuToggle}
            className="p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X aria-label="Close menu" className="w-4 h-4" />
            ) : (
              <Menu aria-label="Open menu" className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-12 right-0 w-48 bg-background border border-border/50 rounded-xl shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="p-2 space-y-1">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleMobileNavigate(key)}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all cursor-pointer bg-transparent border-none text-sm font-medium"
                  >
                    {value as string}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
