import { Activity, Award, HardHat, Shield, Check, Zap, type LucideIcon } from "lucide-react";
import type { HomeStat } from "@/types/home.type";

type IconKey = "activity" | "award" | "check" | "hardhat" | "shield" | "zap";

const ICONS: Record<IconKey, LucideIcon> = {
  activity: Activity,
  award: Award,
  check: Check,
  hardhat: HardHat,
  shield: Shield,
  zap: Zap,
};

const HERO_STAT_STYLE = {
  zap: {
    border: "border-amber-400/20",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    hoverBg: "group-hover:bg-amber-500/20",
    titleHover: "group-hover:text-amber-300",
    sub: "text-amber-200",
  },
  hardhat: {
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
    hoverBg: "group-hover:bg-emerald-400/20",
    titleHover: "group-hover:text-emerald-300",
    sub: "text-emerald-300",
  },
  award: {
    border: "border-blue-400/20",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
    hoverBg: "group-hover:bg-blue-400/20",
    titleHover: "group-hover:text-blue-300",
    sub: "text-blue-300",
  },
} as const;

function getIcon(icon: string | null | undefined, fallback: IconKey = "check") {
  return ICONS[(icon ?? "") as IconKey] ?? ICONS[fallback];
}

function getStyle(icon: string | null) {
  return HERO_STAT_STYLE[(icon ?? "") as keyof typeof HERO_STAT_STYLE] ?? HERO_STAT_STYLE.zap;
}

export interface HeroStatCardProps {
  item: HomeStat;
  fallbackIcon: IconKey;
}

export type { IconKey };

export function HeroStatCard({ item, fallbackIcon }: HeroStatCardProps) {
  const Icon = getIcon(item.icon, fallbackIcon);
  const style = getStyle(item.icon);

  return (
    <div className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white/10">
      <div className={`shrink-0 rounded-lg border p-3 transition-all ${style.border} ${style.bg} ${style.text} ${style.hoverBg}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-left">
        <h3 className={`font-sans text-2xl font-black tracking-tight text-white transition-colors ${style.titleHover}`}>
          {item.title}
        </h3>
        <p className={`mt-0.5 text-xs font-bold uppercase tracking-wider ${style.sub}`}>{item.subTitle}</p>
        <p className="mt-1 font-sans text-xs font-light text-emerald-200/80">{item.moTa}</p>
      </div>
    </div>
  );
}
