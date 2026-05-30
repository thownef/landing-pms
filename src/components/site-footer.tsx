import Image from "next/image";
import type { FooterContent } from "@/types/footer.type";

type SiteFooterProps = {
  footer: FooterContent | null;
};

export function SiteFooter({ footer }: SiteFooterProps) {
  if (!footer) return null;

  return (
    <footer className="select-none border-t-2 border-amber-400 bg-[#098a58] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 text-left md:grid-cols-12">
          <div className="flex flex-col space-y-4 md:col-span-5">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded bg-white/95 p-1">
                {footer.logo?.url ? (
                  <Image
                    src={footer.logo.url}
                    alt={footer.logo.alternativeText ?? footer.name}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-black text-amber-500">PMS</span>
                )}
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-black uppercase leading-none tracking-tight text-white">{footer.name}</h4>
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">{footer.linhVuc}</span>
              </div>
            </div>

            <p className="max-w-md text-base font-normal leading-8">{footer.noiDung}</p>

            <div className="w-fit rounded-lg border border-white/25 bg-black/15 p-4 text-sm font-bold text-amber-300 shadow-inner">
              {footer.slogan}
            </div>
          </div>

          <div className="flex flex-col space-y-3.5 md:col-span-4">
            <h4 className="text-base font-bold uppercase tracking-widest">{footer.tieuDe1}</h4>
            <div className="space-y-3 text-base font-normal">
              {footer.infomation.map((item, index) => (
                <p
                  key={`${item.name}-${index}`}
                  className={`flex justify-between gap-4 ${index < footer.infomation.length - 1 ? "border-b border-white/15 pb-2" : ""}`}
                >
                  <span>{item.name}</span>
                  <span className="text-right font-semibold text-white">{item.noiDung}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3.5 md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest">{footer.tieuDe2}</h4>
            <div className="space-y-5 text-base font-normal leading-7">
              {footer.address.map((item, index) => (
                <div key={`${item.name}-${index}`}>
                  <span className="text-sm font-bold uppercase tracking-wider text-amber-300">{item.name}</span>
                  <p className="mt-1">
                    {item.lines.map((line, lineIndex) => (
                      <span key={`${line}-${lineIndex}`}>
                        {line}
                        {lineIndex < item.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
