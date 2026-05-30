import type { HomeProcedure } from "@/types/home.type";

export function ProcedureCard({ item }: { item: HomeProcedure }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm z-10 hover:border-emerald-300 transition-all">
      <span className="text-2xl font-black text-amber-500">{item.stt}</span>
      <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest mt-2">{item.name}</h4>
      <p className="text-sm text-black mt-2 leading-relaxed">{item.noiDung}</p>
    </div>
  );
}
