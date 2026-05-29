"use client";

import { ClipboardList, FlaskConical, HardHat } from "lucide-react";

export type Tab = "thi_nghiem" | "giam_sat" | "thiet_ke";

export interface TabNavItem {
  id: Tab;
  label: string;
  sub: string;
}

interface TabNavProps {
  active: Tab;
  tabs?: TabNavItem[];
  onChange: (tab: Tab) => void;
}

const DEFAULT_TABS: TabNavItem[] = [
  {
    id: "thi_nghiem",
    label: "1. Thí Nghiệm Kiểm Định",
    sub: "LAS-XD 763 • 108 Chỉ Tiêu",
  },
  {
    id: "giam_sat",
    label: "2. Tư Vấn Giám Sát",
    sub: "Công trình Năng lượng • Hạng I",
  },
  {
    id: "thiet_ke",
    label: "3. Thiết Kế, Thẩm Tra & QLDA",
    sub: "Bản vẽ kết cấu móng • Quản lý thầu",
  },
];

const TAB_ICON = {
  thi_nghiem: FlaskConical,
  giam_sat: HardHat,
  thiet_ke: ClipboardList,
};

export function TabNav({ active, tabs = DEFAULT_TABS, onChange }: TabNavProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2 max-w-4xl mx-auto mb-16 px-2">
      {tabs.map(({ id, label, sub }) => {
        const Icon = TAB_ICON[id];
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex-1 flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-gradient-to-b from-[#1e4e8c] to-[#153b6c] border-[#1e4e8c] text-white shadow-lg -translate-y-1"
                : "bg-slate-50 border-gray-200 text-gray-700 hover:bg-slate-100 hover:border-gray-300"
            }`}
          >
            <Icon className={`w-6 h-6 mb-2 ${isActive ? "text-amber-300 animate-pulse" : "text-[#1e4e8c]"}`} />
            <span className="text-base sm:text-sm font-black uppercase tracking-wider block">{label}</span>
            <span className={`text-xs mt-1 block font-medium ${isActive ? "text-blue-100" : "text-gray-400"}`}>{sub}</span>
          </button>
        );
      })}
    </div>
  );
}
