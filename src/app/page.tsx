"use client";

import Image from "next/image";

const stats = [
  { label: "Kinh nghiệm", value: "20+", unit: "Năm" },
  { label: "Chứng chỉ năng lực", value: "Hạng I", unit: "" },
  { label: "Chỉ tiêu thí nghiệm", value: "108+", unit: "Chỉ tiêu" },
  { label: "Khách hàng & Đối tác", value: "50+", unit: "Đơn vị" },
];

const services = [
  {
    title: "Tổng thầu thiết kế & thi công",
    image: "/hucons/service-design-build.jpg",
  },
  {
    title: "Tổng thầu thi công dự án dân dụng & công nghiệp",
    image: "/hucons/service-civil-industrial.jpg",
  },
  {
    title: "Thi công cơ điện",
    image: "/hucons/service-mep.jpg",
  },
];

const projects = [
  {
    title: "Nhà máy BHT Nam Hà",
    image: "/hucons/project-bht.jpg",
  },
  {
    title: "Nhà máy sản xuất Công ty Cổ phần Việt Nam Fabric",
    image: "/hucons/project-fabric.jpg",
  },
  {
    title: "Nhà máy sản xuất kính Công ty Sunpim",
    image: "/hucons/project-sunpim.png",
  },
];

const news = [
  {
    title: "Hucons Year End Party 2025: Đột phá & phát triển",
    date: "11/02/2026",
    image: "/hucons/news-year-end.jpg",
    excerpt: "Đêm tiệc Year End Party khép lại năm 2025 với không khí gắn kết, tri ân và nhiều dấu ấn phát triển.",
  },
  {
    title: "Cập nhật tiến độ thi công tháng 12/2025 - Dự án Nhà máy BHT Nam Hà",
    date: "11/12/2025",
    image: "/hucons/news-progress.jpg",
    excerpt: "Các đội thi công tiếp tục triển khai theo kế hoạch, bám sát từng hạng mục và duy trì tiến độ.",
  },
  {
    title: "Lễ động thổ Nhà máy sản xuất Công ty Cổ phần Việt Nam Fabric",
    date: "27/10/2025",
    image: "/hucons/news-groundbreaking.jpg",
    excerpt: "Sự kiện đánh dấu bước khởi đầu quan trọng trong hành trình mở rộng quy mô sản xuất.",
  },
];

const clients = [
  "/hucons/client-01.png",
  "/hucons/client-02.png",
  "/hucons/client-03.png",
  "/hucons/client-04.png",
  "/hucons/client-05.png",
  "/hucons/client-06.png",
  "/hucons/client-07.png",
  "/hucons/client-08.png",
  "/hucons/partner-01.jpg",
  "/hucons/partner-02.jpg",
];

import { Award, HardHat, Search, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const onLearnMoreClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-b from-amber-400 to-transparent filter blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-300 filter blur-[100px]" />
        </div>

        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col space-y-6 text-left lg:col-span-7">
              <div className="inline-flex w-fit items-center space-x-2 rounded-full border border-emerald-700/80 bg-emerald-800/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="mr-1 h-4 w-4 text-amber-400" />
                <span>Hồ sơ năng lực Doanh nghiệp - Cập nhật 2026</span>
              </div>

              <h1 className="select-none font-sans text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Xây Vững Niềm Tin <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Dựng Uy Tín Vàng
                </span>
              </h1>

              <p className="max-w-2xl font-sans text-base font-medium leading-relaxed text-emerald-100/90 sm:text-lg">
                Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn. Trải qua hơn 20 năm trưởng thành bền vững, chúng tôi tự hào là đối tác cấp cao được Bộ Xây dựng cấp{" "}
                <strong className="text-amber-300">Chứng chỉ Năng lực Hạng I </strong> về Tư vấn Giám sát &amp; Thiết kế Truyền tải Điện,
                Thủy điện, Điện Gió và Hệ thống Phòng Thí Nghiệm LAS-XD toàn diện.
              </p>


              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onLearnMoreClick("services")}
                  className="cursor-pointer rounded bg-white px-6 py-3 font-sans text-sm font-bold text-emerald-950 shadow-md transition-all duration-200 hover:bg-emerald-50 hover:shadow-lg"
                >
                  Khám Phá Dịch Vụ
                </button>
              </div>
            </div>

            {/* Quick interactive parameters widgets cards Column */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {/* Project highlights count */}
              <div className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white/10">
                <div className="shrink-0 rounded-lg border border-amber-400/20 bg-amber-500/10 p-3 text-amber-400 transition-all group-hover:bg-amber-500/20">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans text-2xl font-black tracking-tight text-white transition-colors group-hover:text-amber-300">
                    Hạng I
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-amber-200">Tư Vấn Giám Sát Công Nghiệp</p>
                  <p className="mt-1 font-sans text-xs font-light text-emerald-200/80">
                    Đảm bảo tiến độ, chất lượng các TBA siêu cao áp và đường dây truyền tải điện gió, điện mặt trời.
                  </p>
                </div>
              </div>

              {/* Test capabilities count */}
              <div className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white/10">
                <div className="shrink-0 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-400 transition-all group-hover:bg-emerald-400/20">
                  <HardHat className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans text-2xl font-black tracking-tight text-white transition-colors group-hover:text-emerald-300">
                    108+ Chỉ Tiêu
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-emerald-300">LAS-XD763 &amp; LAS-XD HCM.017</p>
                  <p className="mt-1 font-sans text-xs font-light text-emerald-200/80">
                    Đầy đủ hệ thống máy nén 2000kN, máy kéo thép 1000kN, nén tĩnh cọc móng, thử bền, cơ lý đất.
                  </p>
                </div>
              </div>

              {/* Exp highlights */}
              <div className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white/10">
                <div className="shrink-0 rounded-lg border border-blue-400/20 bg-blue-400/10 p-3 text-blue-400 transition-all group-hover:bg-blue-400/20">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans text-2xl font-black tracking-tight text-white transition-colors group-hover:text-blue-300">
                    20+ Năm
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-blue-300">Lịch Sử Phát Triển</p>
                  <p className="mt-1 font-sans text-xs font-light text-emerald-200/80">
                    Sáng lập năm 2004, vượt qua vô vàn phê chuẩn chặt chẽ của SP-MB, Bộ Công Thương, Tập đoàn lớn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#098a58]">Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase text-emerald-950 sm:text-4xl">
              Đối Tác Chiến Lược Của Các Dự Án Năng Lượng &amp; Thí Nghiệm Trọng Điểm
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Với phương châm &quot;Xây vững niềm tin - Dựng uy tín vàng&quot;, PMS TCC cam kết cung cấp dịch vụ tư vấn giám sát, thiết kế và thí nghiệm chuyên sâu, mang lại độ chính xác tuyệt đối và giá trị bền vững cho từng công trình.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden bg-emerald-900/10 rounded-2xl md:grid-cols-2 lg:grid-cols-4 shadow-sm border border-emerald-900/10">
            {stats.map((item) => (
              <div key={item.label} className="bg-white p-8 text-center transition-all duration-300 hover:bg-emerald-50/50">
                <p className="text-sm font-bold uppercase text-slate-500">{item.label}</p>
                <p className="mt-4 text-4xl lg:text-5xl font-black tracking-tight text-[#098a58]">{item.value}</p>
                {item.unit && <p className="mt-3 text-xs font-bold text-emerald-800/70 uppercase tracking-wider">{item.unit}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <a key={service.title} href="#" className="group relative block aspect-square overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172e]/85 via-[#06172e]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-2xl font-extrabold uppercase leading-tight text-white">{service.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Tiêu biểu" title="Dự án" />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold uppercase leading-snug text-[#16315e]">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-slate-50 px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Nổi bật" title="Tin tức" />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <time className="text-sm font-semibold text-[#00572d]">{item.date}</time>
                  <h3 className="mt-3 text-lg font-extrabold uppercase leading-snug text-[#16315e]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  <a className="mt-5 inline-flex text-sm font-bold uppercase text-[#174f99]" href="#">
                    Xem thêm →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16315e] px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Khách hàng" title="Và đối tác" inverted />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden bg-white/15 md:grid-cols-5">
            {clients.map((client, index) => (
              <div key={client} className="flex h-28 items-center justify-center bg-white p-5">
                <Image src={client} alt={`Đối tác ${index + 1}`} width={180} height={90} className="max-h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

function SectionTitle({ eyebrow, title, inverted = false }: { eyebrow: string; title: string; inverted?: boolean }) {
  return (
    <div className="text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${inverted ? "text-[#f7c948]" : "text-[#00572d]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-extrabold uppercase ${inverted ? "text-white" : "text-[#174f99]"}`}>{title}</h2>
    </div>
  );
}
