import Image from "next/image";
import { Award, CheckCircle2, Mail, Phone } from "lucide-react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { LeadershipContent } from "@/types/leadership.type";

type LeaderCardProps = Pick<
  LeadershipContent,
  "anh" | "camKet" | "tieuDeCamKet" | "tieuDeHotline" | "moTaHotline" | "hotline" | "email"
>;

export function LeaderCard({ anh, camKet, tieuDeCamKet, tieuDeHotline, moTaHotline, hotline, email }: LeaderCardProps) {
  const anhUrl = getStrapiMediaUrl(anh);
  const hotlineHref = `tel:${hotline.replace(/[\s.]/g, "")}`;
  const emailHref = `mailto:${email}`;

  return (
    <div className="space-y-6">
      {/* Portrait */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative group h-72">
        {anhUrl ? (
          <Image
            src={anhUrl}
            alt={anh?.alternativeText ?? "Ban Giám Đốc PMS TCC"}
            fill
            className="object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-500"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-slate-100" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-80" />
      </div>

      {/* Commitments */}
      <div className="bg-gradient-to-br from-[#0d1f38] to-[#081324] text-white p-6 rounded-2xl shadow-xl space-y-4 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full pointer-events-none" />
        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
          <Award className="w-4 h-4" />
          {tieuDeCamKet}
        </h4>
        <div className="space-y-4 pt-1">
          {camKet.map((item) => (
            <div key={item.name} className="flex items-start space-x-3 text-xs leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm block">{item.name}:</strong>
                <span className="text-xs">{item.noiDung}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotline */}
      <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-left space-y-3">
        <span className="text-base font-bold text-emerald-800 uppercase tracking-widest block">
          {tieuDeHotline}
        </span>
        <p className="text-sm text-black leading-snug">{moTaHotline}</p>
        <div className="space-y-1.5">
          <a
            href={hotlineHref}
            className="text-sm font-bold text-emerald-950 flex items-center gap-2 hover:text-amber-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
            {hotline}
          </a>
          <a
            href={emailHref}
            className="text-sm text-emerald-950 flex items-center gap-2 hover:text-amber-600 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
