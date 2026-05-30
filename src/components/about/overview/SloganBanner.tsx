import { Award } from "lucide-react";

interface SloganBannerProps {
  label: string;
  slogan: string;
}

export function SloganBanner({ label, slogan }: SloganBannerProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border-l-4 border-amber-400 bg-[#098a58] p-4 text-white shadow-sm">
      <div className="select-none text-left">
        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">{label}</p>
        <p className="mt-0.5 text-base font-black tracking-tight">{slogan}</p>
      </div>
      <Award className="hidden h-9 w-9 shrink-0 text-amber-300 sm:block" />
    </div>
  );
}
