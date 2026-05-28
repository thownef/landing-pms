"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1.5 text-sm font-bold tracking-widest select-none">
      <button
        onClick={() => setLanguage("vi")}
        className={`transition-colors cursor-pointer ${language === "vi" ? "text-emerald-950" : "text-gray-400 hover:text-gray-600"}`}
      >
        VN
      </button>
      <span className="text-[#098a58] font-light">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`transition-colors cursor-pointer ${language === "en" ? "text-emerald-950" : "text-gray-400 hover:text-gray-600"}`}
      >
        EN
      </button>
    </div>
  );
}
