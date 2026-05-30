"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import { DocList } from "./DocList";
import { RichText } from "./RichText";
import { serviceRoleStyle } from "@/lib/service-style";
import type { ServiceDetailContent } from "@/types/service-detail.type";

interface TabTestingProps {
  content: ServiceDetailContent | null;
}

export function TabTesting({ content }: TabTestingProps) {
  if (!content) return null;

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row items-start gap-8 border-b border-gray-200 pb-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-base tracking-widest text-[#1e4e8c] font-black uppercase">{content.linhVuc}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase leading-tight">{content.tieuDe}</h3>
          <div className="border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-xl text-base text-black leading-relaxed shadow-sm">
            <RichText blocks={content.moTa1} className="italic" />
          </div>
          <RichText blocks={content.moTa2} className="text-base text-black leading-relaxed" />
        </div>

        {content.anh1?.url && (
          <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden border border-gray-200 shadow-md relative group">
            <div className="absolute inset-0 bg-[#0c2e1a]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
            <Image
              src={content.anh1.url}
              className="w-full h-auto transform duration-500 group-hover:scale-105"
              height={content.anh1.height ?? 800}
              width={content.anh1.width ?? 600}
              alt={content.anh1.alternativeText ?? content.tieuDe}
              sizes="(min-width: 1024px) 40vw, 100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <DocList title={content.tieuDe2} docs={content.document} />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#1e4e8c]" />
            <h4 className="text-base font-bold uppercase tracking-widest text-emerald-950">{content.tieuDe3}</h4>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-[#153b6c] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold uppercase tracking-wider">Tên dự án</th>
                  <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Địa điểm</th>
                  <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Phạm vi</th>
                  <th className="px-3 py-3 text-center font-bold uppercase tracking-wider">Vai trò</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {content.projects.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-semibold text-emerald-950 leading-snug text-left max-w-[220px]">{row.name}</td>
                    <td className="px-3 py-3 text-black leading-snug text-left whitespace-nowrap">{row.location}</td>
                    <td className="px-3 py-3 text-black leading-snug text-left">{row.work}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">
                      <span className={`inline-flex px-2 py-0.5 border rounded font-bold text-[10px] ${serviceRoleStyle(row.color)}`}>
                        {row.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[content.anh2, content.anh3].map((image, index) =>
              image?.url ? (
                <div key={index} className="relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
                  <Image
                    src={image.url}
                    alt={image.alternativeText ?? ""}
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 350px, 50vw"
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
