import type { HomeMetric } from "@/types/home.type";

export function MetricCard({ item }: { item: HomeMetric }) {
  return (
    <div className="bg-white p-8 text-center transition-all duration-300 hover:bg-emerald-50/50">
      <p className="text-sm font-bold uppercase text-slate-500">{item.ten}</p>
      <p className="mt-4 text-4xl lg:text-5xl font-black tracking-tight text-[#098a58]">{item.moTa}</p>
      {item.donVi && <p className="mt-3 text-xs font-bold text-emerald-800/70 uppercase tracking-wider">{item.donVi}</p>}
    </div>
  );
}
