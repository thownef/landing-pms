import { Users } from "lucide-react";
import { MessageLetter } from "@/components/about/leadership-message/MessageLetter";
import { LeaderCard } from "@/components/about/leadership-message/LeaderCard";
import type { LeadershipContent } from "@/types/leadership.type";

export type LeadershipMessageProps = {
  content: LeadershipContent | null;
};

export function LeadershipMessage({ content }: LeadershipMessageProps) {
  if (!content) return null;

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-b from-amber-400 to-transparent filter blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-300 filter blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">{content.tieuDeBanner1}</p>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight">
                {content.tieuDeBanner2}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed max-w-2xl">{content.moTaBanner}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <MessageLetter
                ghiChu={content.ghiChu}
                tieuDe={content.tieuDe}
                noiDung1={content.noiDung1}
                noiDung2={content.noiDung2}
                noiDung3={content.noiDung3}
              />
            </div>
            <div className="lg:col-span-4">
              <LeaderCard
                anh={content.anh}
                camKet={content.camKet}
                tieuDeCamKet={content.tieuDeCamKet}
                tieuDeHotline={content.tieuDeHotline}
                moTaHotline={content.moTaHotline}
                hotline={content.hotline}
                email={content.email}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
