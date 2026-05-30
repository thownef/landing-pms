"use client";

import { useState } from "react";
import { FlaskConical, HardHat, PenTool } from "lucide-react";
import { TabNav, type Tab, type TabNavItem } from "@/components/services/TabNav";
import { TabTesting } from "@/components/services/TabTesting";
import { TabSupervision } from "@/components/services/TabSupervision";
import { TabDesign } from "@/components/services/TabDesign";
import type { ServiceDetailContent } from "@/types/service-detail.type";

const TAB_ICON: Record<Tab, React.ReactNode> = {
  thi_nghiem: <FlaskConical className="w-8 h-8 text-amber-400" />,
  giam_sat: <HardHat className="w-8 h-8 text-amber-400" />,
  thiet_ke: <PenTool className="w-8 h-8 text-amber-400" />,
};

export interface ServiceProps {
  pageTitle: string;
  tabs: TabNavItem[];
  metas: TabNavItem[];
  testing?: ServiceDetailContent | null;
  monitor?: ServiceDetailContent | null;
  initialTab?: Tab;
}

export function Service({ pageTitle, tabs, metas, testing, monitor, initialTab = "thi_nghiem" }: ServiceProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const metaSource = metas.length > 0 ? metas : tabs;
  const meta = metaSource.find((m) => m.id === activeTab) ?? metaSource[0];

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-b from-amber-400 to-transparent filter blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-300 filter blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300">
              {TAB_ICON[activeTab]}
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">{pageTitle}</p>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight transition-all duration-300">
                {meta?.label}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed max-w-2xl">{meta?.sub}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <TabNav active={activeTab} tabs={tabs} onChange={setActiveTab} />
          <div className="bg-slate-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 md:p-10 text-left">
            {activeTab === "thi_nghiem" && <TabTesting content={testing ?? null} />}
            {activeTab === "giam_sat" && <TabSupervision content={monitor ?? null} />}
            {activeTab === "thiet_ke" && <TabDesign />}
          </div>
        </div>
      </section>
    </div>
  );
}
