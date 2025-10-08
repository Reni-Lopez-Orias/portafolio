import { useState } from "react";
import type { Language } from "../types";

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return { language, toggleLanguage, setLanguage };
};