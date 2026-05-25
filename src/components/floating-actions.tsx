"use client";

import { ArrowUp, MapPin, Phone } from "lucide-react";

const phoneNumber = "02835114395";
const facebookUrl = "https://www.facebook.com/";
const mapUrl = "https://maps.google.com/?q=28%20duong%20so%2016%20Khu%20pho%205%20Hiep%20Binh%20TPHCM";

export function FloatingActions() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed right-[10px] bottom-[calc(10%)] z-[999] flex flex-col items-center gap-[15px]">
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Gọi điện"
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#e91f4f] text-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] transition hover:opacity-90 hover:shadow-[0_5px_10px_rgba(0,0,0,0.15),0_4px_15px_rgba(0,0,0,0.13)]"
      >
        <Phone className="relative z-10 h-5 w-5" strokeWidth={2.6} />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1877f2] text-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] transition hover:opacity-90 hover:shadow-[0_5px_10px_rgba(0,0,0,0.15),0_4px_15px_rgba(0,0,0,0.13)]"
      >
        <span className="font-sans text-[28px] font-bold leading-none">f</span>
      </a>
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Xem bản đồ"
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#f5aa13] text-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] transition hover:opacity-90 hover:shadow-[0_5px_10px_rgba(0,0,0,0.15),0_4px_15px_rgba(0,0,0,0.13)]"
      >
        <MapPin className="h-5 w-5" strokeWidth={2.6} />
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        className="mt-1 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-slate-950/80 text-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] transition hover:bg-[#1d5599]"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
      </button>
    </div>
  );
}
