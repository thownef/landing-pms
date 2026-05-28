"use client";

import { useState } from "react";
import { FlaskConical, HardHat, PenTool } from "lucide-react";
import { ServiceTabNav, type ServiceTab } from "@/components/services/ServiceTabNav";
import { ServiceTabTesting } from "@/components/services/ServiceTabTesting";
import { ServiceTabSupervision } from "@/components/services/ServiceTabSupervision";
import { ServiceTabDesign } from "@/components/services/ServiceTabDesign";

const TAB_META: Record<ServiceTab, { icon: React.ReactNode; label: string; desc: string }> = {
  thi_nghiem: {
    icon: <FlaskConical className="w-8 h-8 text-amber-400" />,
    label: "Thí nghiệm kiểm tra chất lượng",
    desc: "Hệ thống phòng thí nghiệm LAS-XD 763 & LAS-XD HCM.017 — kiểm định vật liệu, nền móng, kết cấu cho công trình năng lượng và dân dụng.",
  },
  giam_sat: {
    icon: <HardHat className="w-8 h-8 text-amber-400" />,
    label: "Tư vấn giám sát thi công",
    desc: "Đội ngũ kỹ sư giám sát Hạng I được Bộ Xây dựng phê chuẩn — bám sát hiện trường, kiểm soát chất lượng và tiến độ dự án.",
  },
  thiet_ke: {
    icon: <PenTool className="w-8 h-8 text-amber-400" />,
    label: "Tư vấn thiết kế & thẩm tra",
    desc: "Thiết kế kỹ thuật, lập dự án cơ sở pháp lý và thẩm tra biện pháp tổ chức thi công cho công trình công nghiệp và năng lượng.",
  },
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("thi_nghiem");
  const meta = TAB_META[activeTab];

  const triggerDownload = (fileName: string) => {
    alert(
      `[Hệ thống PMS TCC] Đang chuẩn bị tệp tin kỹ thuật số: "${fileName}" (Định dạng: PDF). Quá trình tải xuống tự động sẽ bắt đầu trong giây lát!`,
    );
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-b from-amber-400 to-transparent filter blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-300 filter blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300">
              {meta.icon}
            </div>

            {/* Text */}
            <div className="flex-1 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">
                Lĩnh vực hoạt động — PMS TCC
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight transition-all duration-300">
                {meta.label}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
                {meta.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ServiceTabNav active={activeTab} onChange={setActiveTab} />
          <div className="bg-slate-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 md:p-10 text-left">
            {activeTab === "thi_nghiem" && <ServiceTabTesting onDownload={triggerDownload} />}
            {activeTab === "giam_sat" && <ServiceTabSupervision onDownload={triggerDownload} />}
            {activeTab === "thiet_ke" && <ServiceTabDesign />}
          </div>
        </div>
      </section>
    </div>
  );
}
