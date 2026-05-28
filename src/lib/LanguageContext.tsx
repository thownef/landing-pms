"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { getTranslation, type Language, type TranslationPath } from "@/lib/translations";

const STORAGE_KEY = "pms_lang";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: TranslationPath) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "vi",
  setLanguage: () => {},
  t: () => "",
});

function getInitialLang(): Language {
  if (typeof window === "undefined") return "vi";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "vi";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLang);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const t = (path: TranslationPath) => getTranslation(path, language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
