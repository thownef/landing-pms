"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getTranslation, type Language, type TranslationPath } from "@/lib/translations";

const STORAGE_KEY = "pms_lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

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

export function LanguageProvider({ children, initialLanguage = "vi" }: { children: ReactNode; initialLanguage?: Language }) {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (next: Language) => {
    if (next === language) return;

    setLanguageState(next);
    document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    router.refresh();
  };

  const t = (path: TranslationPath) => getTranslation(path, language);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
