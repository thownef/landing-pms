"use client";

import { Download } from "lucide-react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { AboutContent } from "@/types/about.type";

interface CapacityProfileProps {
  content: Pick<AboutContent, "tenFile" | "url" | "tenCongTy" | "slogan" | "fileUrl" | "fileName" | "logo" | "anh3" | "button1" | "button2">;
}

const CapacityProfile = ({ content }: CapacityProfileProps) => {
  const logoUrl = getStrapiMediaUrl(content.logo) || "/assets/img/pms_logo.png";
  const coverUrl = getStrapiMediaUrl(content.anh3);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = content.fileUrl;
    a.download = content.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm text-center">
        <a
          href={content.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group max-w-sm w-full mb-8 block cursor-pointer"
        >
          <div className="absolute -inset-1.5 bg-linear-to-r from-emerald-900 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-300" />
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col justify-between aspect-[3/4] p-8 text-center select-none transform transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-amber-400" />

            <div className="flex flex-col items-center mt-6 space-y-1">
              <img src={logoUrl} alt={`Logo ${content.tenCongTy}`} className="w-14 h-14 object-contain" />
              <span className="text-emerald-950 font-black text-lg tracking-widest uppercase">{content.tenCongTy}</span>
              <p className="text-[8px] text-gray-500 tracking-wider font-bold">{content.slogan}</p>
            </div>

            <div className="my-4 relative h-48 overflow-hidden rounded-xl border border-gray-100">
              {coverUrl ? (
                <img src={coverUrl} alt={content.anh3?.alternativeText ?? ""} className="w-full h-full object-cover brightness-95" />
              ) : (
                <div className="w-full h-full bg-slate-100" />
              )}
            </div>

            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-black tracking-widest text-[#0c2e1a] uppercase">{content.tenFile}</h4>
              <p className="text-[10px] text-gray-500">{content.url}</p>
            </div>
          </div>
        </a>

        <div className="w-full max-w-sm space-y-3">
          <a
            href={content.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#1e4e8c] text-white tracking-widest font-black text-sm rounded-lg hover:bg-[#153b6c] transition-all duration-300 hover:shadow-lg cursor-pointer uppercase"
          >
            {content.button1}
          </a>

          <button
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-transparent text-gray-500 hover:text-emerald-900 tracking-wider font-bold text-xs hover:underline cursor-pointer transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{content.button2}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapacityProfile;
