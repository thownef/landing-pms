"use client";

import { ClipboardList, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { TranslationPath } from "@/lib/translations";

const TAG_KEYS = [
  "servicesDesign.tagPileDrawings",
  "servicesDesign.tagMethodStatement",
  "servicesDesign.tagEpcDossier",
] as const satisfies readonly TranslationPath[];

export function TabDesign() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 text-center py-6">
      <ClipboardList className="w-16 h-16 text-amber-500 mx-auto" />
      <div className="max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-black text-emerald-950 uppercase">{t("servicesDesign.title")}</h3>
        <p className="text-xs text-gray-600 leading-relaxed font-light">{t("servicesDesign.description")}</p>
        <div className="p-8 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-300 max-w-lg mx-auto text-left space-y-3 shadow-inner">
          <div className="flex items-center space-x-2 text-amber-800">
            <Sparkles className="w-5 h-5 flex-shrink-0 animate-spin" />
            <span className="text-[11px] font-bold uppercase tracking-wider">{t("servicesDesign.noticeTitle")}</span>
          </div>
          <p className="text-xs italic text-gray-700 leading-relaxed">&quot;{t("servicesDesign.noticeQuote")}&quot;</p>
          <p className="text-[11px] text-gray-500 leading-relaxed">{t("servicesDesign.noticeDescription")}</p>
        </div>
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {TAG_KEYS.map((key) => (
            <span key={key} className="px-3 py-1 bg-slate-200 text-slate-800 text-[10px] rounded font-bold uppercase">
              {t(key)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
