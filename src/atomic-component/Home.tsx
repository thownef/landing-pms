"use client";

import { ShieldCheck } from "lucide-react";
import type { HomeContent } from "@/types/home.type";
import { HeroSlogan } from "@/components/home/HeroSlogan";
import { HeroRichText } from "@/components/home/HeroRichText";
import { HeroStatCard, type IconKey } from "@/components/home/HeroStatCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import { MetricCard } from "@/components/home/MetricCard";
import { PhilosophyCard } from "@/components/home/PhilosophyCard";
import { ProcedureCard } from "@/components/home/ProcedureCard";
import { CommitmentCard } from "@/components/home/CommitmentCard";

export type HomeProps = {
  content: HomeContent | null;
};

const STAT_FALLBACK_ICONS: IconKey[] = ["zap", "hardhat", "award"];
const PHILOSOPHY_FALLBACK_ICONS: IconKey[] = ["check", "shield", "activity"];

export function Home({ content }: HomeProps) {
  const onLearnMoreClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!content) return null;

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-b from-amber-400 to-transparent filter blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-300 filter blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col space-y-6 text-left lg:col-span-7">
              <div className="inline-flex w-fit items-center space-x-2 rounded-full border border-emerald-700/80 bg-emerald-800/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="mr-1 h-4 w-4 text-amber-400" />
                <span>{content.gioiThieu}</span>
              </div>

              <h1 className="select-none font-sans text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <HeroSlogan blocks={content.slogan} />
              </h1>

              <HeroRichText
                blocks={content.noiDung}
                className="max-w-2xl font-sans text-base font-medium leading-relaxed text-emerald-100/90 sm:text-lg"
                boldClassName="text-amber-300"
              />

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onLearnMoreClick("services")}
                  className="cursor-pointer rounded bg-white px-6 py-3 font-sans text-sm font-bold text-emerald-950 shadow-md transition-all duration-200 hover:bg-emerald-50 hover:shadow-lg"
                >
                  {content.button}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {content.stat.map((item, index) => (
                <HeroStatCard
                  key={`${item.title}-${index}`}
                  item={item}
                  fallbackIcon={STAT_FALLBACK_ICONS[index] ?? "zap"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="services" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#098a58]">{content.tenCongTy}</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase text-emerald-950 sm:text-4xl">{content.moTaCongTy}</h2>
            <p className="mt-6 text-base leading-8 text-black">{content.phuongCham}</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden bg-emerald-900/10 rounded-2xl md:grid-cols-2 lg:grid-cols-4 shadow-sm border border-emerald-900/10">
            {content.hangMuc.map((item, index) => (
              <MetricCard key={`${item.ten}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy (Triết lý) */}
      <section className="pb-20 lg:pb-28 bg-white border-b border-emerald-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-50 opacity-50 blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <SectionHeader badge={content.tieuDe1} title={content.tieuDePhu1} description={content.noiDung1} badgeBorder />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.trietLy.map((item, index) => (
              <PhilosophyCard
                key={`${item.name}-${index}`}
                item={item}
                fallbackIcon={PHILOSOPHY_FALLBACK_ICONS[index] ?? "check"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Procedure (Quy trình) */}
      <section className="py-16 bg-[#fafbfc] border-b border-gray-200 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader badge={content.tieuDe2} title={content.tieuDePhu2} description={content.noiDung2} divider />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-emerald-200 hidden md:block z-0" />
            {content.procedure.map((item, index) => (
              <ProcedureCard key={`${item.stt}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitments (Cam kết) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader badge={content.tieuDe3} title={content.tieuDePhu3} divider />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.camKet.map((item, index) => (
              <CommitmentCard key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
