import { Activity, Award, Check, HardHat, Shield, Zap, type LucideIcon } from "lucide-react";
import type { HomeCard } from "@/types/home.type";
import type { IconKey } from "./HeroStatCard";

const ICONS: Record<IconKey, LucideIcon> = {
  activity: Activity,
  award: Award,
  check: Check,
  hardhat: HardHat,
  shield: Shield,
  zap: Zap,
};

function getIcon(icon: string | null | undefined, fallback: IconKey = "check") {
  return ICONS[(icon ?? "") as IconKey] ?? ICONS[fallback];
}

export interface PhilosophyCardProps {
  item: HomeCard;
  fallbackIcon: IconKey;
}

export function PhilosophyCard({ item, fallbackIcon }: PhilosophyCardProps) {
  const Icon = getIcon(item.icon, fallbackIcon);

  return (
    <div className="p-8 bg-white rounded-2xl border border-emerald-300 shadow-xl text-left flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-800 text-amber-300 border border-emerald-800 flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight leading-snug">{item.name}</h3>
        </div>
        <p className="text-sm leading-relaxed">{item.noiDung}</p>
      </div>
      <div className="text-xs text-emerald-800 font-bold tracking-wider uppercase mt-8 pt-4 border-t border-slate-100">
        * {item.note}
      </div>
    </div>
  );
}
