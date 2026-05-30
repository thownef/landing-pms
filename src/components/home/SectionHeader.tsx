export interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  /** Hiển thị đường kẻ amber bên dưới */
  divider?: boolean;
  /** Border xung quanh badge */
  badgeBorder?: boolean;
}

export function SectionHeader({ badge, title, description, divider = false, badgeBorder = false }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span
        className={`text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded ${
          badgeBorder ? "border border-emerald-100" : ""
        }`}
      >
        {badge}
      </span>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 uppercase mt-4">{title}</h2>
      {description && <p className="text-sm text-slate-500 font-medium mt-3">{description}</p>}
      {divider && <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4 rounded-full" />}
    </div>
  );
}
