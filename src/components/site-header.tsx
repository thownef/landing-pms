"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Menu, Phone, Search } from "lucide-react";

const aboutItems = [
  { label: "Tổng quan", href: "/ve-hucons/tong-quan" },
  { label: "Thông điệp ban lãnh đạo", href: "/ve-hucons/thong-diep-ban-lanh-dao" },
  { label: "Tầm nhìn, giá trị cốt lõi", href: "/ve-hucons/tam-nhin-gia-tri-cot-loi" },
  { label: "Ban lãnh đạo", href: "/ve-hucons/ban-lanh-dao" },
  { label: "Khách hàng và đối tác", href: "/ve-hucons/khach-hang-va-doi-tac" },
  { label: "Hồ sơ năng lực", href: "/ve-hucons/ho-so-nang-luc" },
];

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Về Hucons", href: "/ve-hucons", children: aboutItems },
  { label: "Lĩnh vực hoạt động", href: "/linh-vuc-hoat-dong" },
  { label: "Dự án", href: "/du-an" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative z-30 bg-white shadow-sm">
      <div className="bg-[#1d5599] px-4 py-3 text-sm font-semibold text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden items-center gap-2 lg:flex">
            <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>28 đường số 16, Khu phố 5, P. Hiệp Bình, TP.HCM</span>
          </div>
          <div className="flex w-full items-center justify-between gap-6 lg:w-auto lg:justify-end">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              02835114395
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Email: lasxdhcm017.pms@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex h-22 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:h-[86px]">
        <Link className="relative z-10 block h-14 w-52" href="/">
          <Image src="/hucons/logo.png" alt="Hucons" fill className="object-contain" priority />
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-6 text-sm font-bold uppercase tracking-normal text-black xl:gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              isActivePath(pathname, item.href) ||
              item.children?.some((child) => isActivePath(pathname, child.href));

            if (item.children) {
              return (
                <div key={item.href} className="group relative shrink-0 py-8">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap transition group-hover:text-[#f3981c] group-focus-within:text-[#f3981c] ${
                      isActive ? "text-[#f3981c]" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[302px] -translate-x-1/2 rounded-md border border-slate-200 bg-white py-1 text-slate-950 opacity-0 shadow-xl shadow-slate-950/10 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => {
                      const childActive = isActivePath(pathname, child.href);

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block border-b border-slate-200 px-4 py-4 text-sm font-medium uppercase leading-5 last:border-b-0 hover:bg-slate-50 hover:text-[#f3981c] ${
                            childActive ? "text-[#f3981c]" : "text-[#001b3a]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap transition hover:text-[#f3981c] ${
                  isActive ? "text-[#f3981c]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="relative z-10 hidden items-center justify-end gap-8 lg:flex">
          <button
            className="flex h-10 w-10 items-center justify-center text-slate-950 transition hover:text-[#f3981c]"
            aria-label="Tìm kiếm"
          >
            <Search className="h-5 w-5" strokeWidth={2.2} />
          </button>
          <div className="flex items-center gap-1 text-sm font-medium normal-case text-slate-800">
            <span>VN</span>
            <span className="text-slate-400">|</span>
            <span>EN</span>
          </div>
        </div>
        <button className="relative z-10 flex h-10 w-10 items-center justify-center border border-slate-300 text-xl text-slate-900 lg:hidden">
          <span className="sr-only">Mở menu</span>
          <Menu className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}
