export function serviceRoleStyle(color: string | null) {
  if (color === "blue") return "bg-blue-50 text-[#1e4e8c] border-blue-200";
  if (color === "green") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (color === "emerald") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (color === "orange") return "bg-amber-50 text-amber-700 border-amber-200";
  if (color === "amber") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-slate-50 text-slate-700 border-slate-200";
}
