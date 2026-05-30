import Image from "next/image";
import type { AboutContent } from "@/types/about.type";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface CompanyProfileCardProps {
  anh2: AboutContent["anh2"];
  profile: AboutContent["profile"];
}

export function CompanyProfileCard({ anh2, profile }: CompanyProfileCardProps) {
  const anh2Url = getStrapiMediaUrl(anh2);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md flex flex-col lg:flex-row items-stretch mb-16 transition-all duration-300 hover:shadow-lg">
      <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[460px] bg-slate-100 flex-shrink-0">
        {anh2Url ? (
          <Image
            src={anh2Url}
            alt={anh2?.alternativeText ?? ""}
            fill
            className="object-cover select-none"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-slate-100" />
        )}
        <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />
      </div>

      <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white text-left">
        <div className="space-y-4 text-black">
          {profile.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 items-baseline ${
                index < profile.length - 1 ? "pb-3.5 border-b border-gray-200" : ""
              }`}
            >
              <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">{item.name}:</span>
              <span className="sm:col-span-9 leading-relaxed">{item.moTa}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
