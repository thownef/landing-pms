"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const aboutItems = [
  { label: "Tổng quan", href: "/about-us/overview" },
  { label: "Thông điệp ban lãnh đạo", href: "/about-us/leadership-message" },
  { label: "Tầm nhìn, giá trị cốt lõi", href: "/about-us/vision-core-values" },
  { label: "Ban lãnh đạo", href: "/about-us/leadership" },
  { label: "Khách hàng và đối tác", href: "/about-us/clients-partners" },
  { label: "Hồ sơ năng lực", href: "/about-us/company-profile" },
];

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Về chúng tôi", href: "/about-us", children: aboutItems },
  { label: "Lĩnh vực hoạt động", href: "/services" },
  { label: "Dự án", href: "/projects" },
  { label: "Tin tức", href: "/news" },
  { label: "Tuyển dụng", href: "/careers" },
  { label: "Liên hệ", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset menu states when navigating (Optimized pattern to avoid cascading renders)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50 flex w-full flex-col transition-all duration-300">
      <div className="hidden border-b border-white/10 bg-[#098a58] px-4 py-2 text- text-white shadow-inner md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between tracking-wide">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-amber-300" />
              <a href="tel:02835114395" className="transition-colors hover:text-amber-300">
                SĐT: 028.3511.4395
              </a>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-amber-300" />
              <a href="tel:0354408547" className="transition-colors hover:text-amber-300">
                Hotline: 035.440.8547 (GĐ Thảo)
              </a>
            </span>
            <span className="flex items-center space-x-1 ">
              <Mail className="h-4 w-4 text-amber-300" />
              <a href="mailto:lasxdhcm017.pms@gmail.com" className="transition-colors hover:text-amber-300">
                lasxdhcm017.pms@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center text-base text-white/85">
              <ShieldCheck className="mr-1 h-4 w-4 text-amber-300" />
              ISO 9001:2015 Accredited
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-amber-300" />
              <span className="text-base">Trụ sở: Thủ Đức, TP.HCM</span>
            </span>
          </div>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "border-b border-[#098a58]/15 bg-white/95 py-3 shadow-lg backdrop-blur-md" : "border-b border-gray-100 bg-white py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="group flex select-none items-center space-x-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="absolute h-9 w-9 animate-[spin_50s_linear_infinite] rounded-full border-2 border-dashed border-amber-400" />
              <div className="flex flex-col items-center text-[14px] font-extrabold leading-none tracking-tighter text-emerald-800">
                <span className="-mb-0.5 text-[10px] text-amber-500">☀</span>
                <span className="font-black tracking-tight">PMS</span>
                <span className="text-[7px] font-medium text-[#098a58]">TCC</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-extrabold uppercase leading-none tracking-tight text-emerald-950 transition-colors group-hover:text-[#098a58] md:text-base">
                Phúc Mỹ Sơn
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#098a58]">
                Tư vấn xây dựng &amp; năng lượng
              </span>
              <span className="hidden text-[8px] font-mono text-amber-600 sm:block">LAS-XD HCM.017</span>
            </div>
          </Link>

          <div className="hidden items-center space-x-1 xl:space-x-2 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href) || item.children?.some((child) => isActivePath(pathname, child.href));

              if (item.children) {
                return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold transition-all duration-200 ${
                          isActive
                            ? "border-b-2 border-[#098a58] bg-[#098a58]/8 text-emerald-950"
                            : "text-gray-600 hover:bg-gray-50 hover:text-emerald-950"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} strokeWidth={2} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-3 z-50">
                          <div className="overflow-hidden rounded-md border border-[#098a58]/10 bg-white shadow-xl shadow-slate-950/10 animate-in fade-in zoom-in-95 duration-200">
                            {item.children.map((child) => {
                              const childActive = isActivePath(pathname, child.href);

                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block border-b border-slate-100 px-4 py-3 text-sm font-semibold last:border-b-0 ${
                                    childActive ? "bg-[#098a58]/8 text-[#098a58]" : "text-gray-700 hover:bg-gray-50 hover:text-[#098a58]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-b-2 border-[#098a58] bg-[#098a58]/8 text-emerald-950"
                      : "text-gray-600 hover:bg-gray-50 hover:text-emerald-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center space-x-3 sm:flex">
            <Link
              href="/contact"
              className="rounded bg-[#098a58] px-4 py-2 text-xs font-bold text-white shadow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08794d] hover:shadow-md active:translate-y-0 md:text-sm"
            >
              Yêu cầu tư vấn &amp; báo giá
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-md p-2 text-emerald-950 transition-colors hover:bg-[#098a58]/8"
              aria-expanded={mobileMenuOpen}
              aria-label="Mở menu"
              type="button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 w-full border-b border-[#098a58]/15 bg-white p-4 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href) || item.children?.some((child) => isActivePath(pathname, child.href));

              return (
                <div key={item.href}>
                  {item.children ? (
                    <button
                      type="button"
                      onClick={() => setMobileAboutOpen((open) => !open)}
                      className={`flex w-full items-center justify-between rounded px-4 py-3 text-left text-[14px] font-semibold transition-colors ${
                        isActive
                          ? "border-l-4 border-[#098a58] bg-[#098a58]/8 font-bold text-emerald-950"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#098a58]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileAboutOpen || isActive ? "rotate-180" : ""}`}
                        strokeWidth={2}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full rounded px-4 py-3 text-left text-[14px] font-semibold transition-colors ${
                        isActive
                          ? "border-l-4 border-[#098a58] bg-[#098a58]/8 font-bold text-emerald-950"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#098a58]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && (mobileAboutOpen || isActive) && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-slate-100 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileAboutOpen(false);
                          }}
                          className={`block rounded px-3 py-2 text-sm ${
                            isActivePath(pathname, child.href)
                              ? "bg-[#098a58]/8 font-semibold text-[#098a58]"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-col space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-center space-x-2 px-4 text-xs text-gray-600">
                <Phone className="h-4 w-4 text-[#098a58]" />
                <a href="tel:0354408547" className="font-bold">
                  Hotline: 035.440.8547
                </a>
              </div>
              <div className="flex items-center space-x-2 px-4 text-base text-gray-600">
                <Mail className="h-4 w-4 text-[#098a58]" />
                <a href="mailto:lasxdhcm017.pms@gmail.com">lasxdhcm017.pms@gmail.com</a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded bg-[#098a58] py-3 text-center text-base font-bold text-white hover:bg-[#08794d]"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
