import Image from "next/image";
import { Building2 } from "lucide-react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { AboutContent } from "@/types/about.type";
import { AboutRichText } from "@/components/about/overview/AboutRichText";
import { CommitmentBlock } from "@/components/about/overview/CommitmentBlock";
import { SloganBanner } from "@/components/about/overview/SloganBanner";
import { CompanyProfileCard } from "@/components/about/overview/CompanyProfileCard";
import CapacityProfile from "@/components/about/overview/CapacityProfile";

export type OverviewProps = {
  content: AboutContent | null;
};

export function Overview({ content }: OverviewProps) {
  if (!content) return null;

  const anh1Url = getStrapiMediaUrl(content.anh1);
  const commitmentLists = [...content.noiDungCamKet1, ...content.noiDungCamKet2].filter((b) => b.type === "list");
  const commitmentParagraphs = [...content.noiDungCamKet1, ...content.noiDungCamKet2].filter((b) => b.type === "paragraph");

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
              <Building2 className="w-8 h-8 text-amber-400" />
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
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left: mô tả + cam kết + slogan */}
            <div className="flex flex-col space-y-6 text-left lg:col-span-7">
              <AboutRichText blocks={content.moTaCongTy} />
              <CommitmentBlock
                title={content.tieuDeCamKet}
                listBlocks={commitmentLists}
                paragraphBlocks={commitmentParagraphs}
              />
              <SloganBanner label={content.tieuDeSlogan} slogan={content.slogan} />
            </div>

            {/* Right: ảnh chính */}
            <div className="flex flex-col space-y-6 lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg" style={{ minHeight: "420px" }}>
                {anh1Url ? (
                  <Image
                    src={anh1Url}
                    alt={content.anh1?.alternativeText ?? content.tieuDeBanner2}
                    fill
                    priority
                    loading="eager"
                    className="object-cover select-none"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-100" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Section header: hồ sơ doanh nghiệp */}
          <div className="mt-16 mb-10 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#098a58] uppercase mb-2">{content.tieuDe1}</p>
            <h2 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase leading-tight">{content.moTa1}</h2>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-amber-400 mx-auto" />
          </div>

          <CompanyProfileCard anh2={content.anh2} profile={content.profile} />

          <CapacityProfile content={content} />
        </div>
      </section>
    </div>
  );
}
