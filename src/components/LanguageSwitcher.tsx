"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center space-x-1.5 text-sm font-bold tracking-widest select-none">
      <button
        onClick={() => setLang("vi")}
        className={`transition-colors cursor-pointer ${lang === "vi" ? "text-emerald-950" : "text-gray-400 hover:text-gray-600"}`}
      >
        VN
      </button>
      <span className="text-[#098a58] font-light">|</span>
      <button
        onClick={() => setLang("en")}
        className={`transition-colors cursor-pointer ${lang === "en" ? "text-emerald-950" : "text-gray-400 hover:text-gray-600"}`}
      >
        EN
      </button>
    </div>
  );
}
