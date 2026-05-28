"use client";

import { useState } from "react";
import { ServiceTabNav, type ServiceTab } from "@/components/services/ServiceTabNav";
import { ServiceTabTesting } from "@/components/services/ServiceTabTesting";
import { ServiceTabSupervision } from "@/components/services/ServiceTabSupervision";
import { ServiceTabDesign } from "@/components/services/ServiceTabDesign";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("thi_nghiem");

  const triggerDownload = (fileName: string) => {
    alert(
      `[Hệ thống PMS TCC] Đang chuẩn bị tệp tin kỹ thuật số: "${fileName}" (Định dạng: PDF). Quá trình tải xuống tự động sẽ bắt đầu trong giây lát!`,
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-block relative">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#098a58]">Lĩnh Vực Hoạt Động</h2>
            <div className="mx-auto mt-1 h-0.5 w-full rounded-full bg-amber-400" />
          </div>
        </div>

        <ServiceTabNav active={activeTab} onChange={setActiveTab} />

        <div className="bg-slate-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 md:p-10 text-left">
          {activeTab === "thi_nghiem" && <ServiceTabTesting onDownload={triggerDownload} />}
          {activeTab === "giam_sat" && <ServiceTabSupervision onDownload={triggerDownload} />}
          {activeTab === "thiet_ke" && <ServiceTabDesign />}
        </div>
      </div>
    </section>
  );
}
