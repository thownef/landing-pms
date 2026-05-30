import { Check } from "lucide-react";
import type { HomeCard } from "@/types/home.type";

export function CommitmentCard({ item }: { item: HomeCard }) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
      <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
        <Check className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
      </div>
      <div>
        <h3 className="text-sm font-black text-emerald-950 uppercase tracking-tight">{item.name}</h3>
        <p className="text-sm text-black mt-2 leading-relaxed">{item.noiDung}</p>
      </div>
    </div>
  );
}
