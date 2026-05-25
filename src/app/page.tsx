import Image from "next/image";

const stats = [
  { label: "Tổng dự án", value: ">20", unit: "Dự án" },
  { label: "Doanh thu", value: "520 tỷ", unit: "đồng" },
  { label: "Tổng số nhân viên", value: "60", unit: "Nhân viên" },
  { label: "Lực lượng thi công", value: "120", unit: "Nhân công" },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-[720px] overflow-hidden bg-[#16315e] text-white">
        <Image src="/hucons/hero-fabric.jpg" alt="Nhà máy sản xuất" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06172e]/90 via-[#06172e]/45 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-4 pb-28 pt-40 sm:px-6 lg:pb-36">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f7c948]">Dự án tiêu biểu</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] sm:text-5xl sm:leading-[1.16] lg:text-[64px] lg:leading-[1.12]">
              Nhà máy sản xuất Công ty Cổ phần Việt Nam Fabric
            </h1>
            <div className="mt-6 max-w-xl space-y-2 text-base leading-7 text-white/90 sm:text-lg">
              <p>Quy mô: 11.000 m2</p>
              <p>Vị trí: KCN Nhơn Trạch 6, xã Phước An, tỉnh Đồng Nai</p>
            </div>
            <a
              href="#projects"
              className="mt-8 inline-flex h-12 items-center bg-[#f7c948] px-6 text-sm font-bold uppercase text-[#16315e] transition hover:bg-white"
            >
              Xem dự án
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-950/10 lg:grid-cols-[260px_1fr_64px]">
          <div className="bg-[#00572d] px-6 py-5 text-sm font-bold uppercase text-white">Tin tức mới nhất</div>
          <a href="#news" className="px-6 py-5 text-sm font-semibold text-slate-800 transition hover:text-[#174f99]">
            Hucons Year End Party 2025: Đột phá & phát triển
          </a>
          <a href="#news" className="flex items-center justify-center bg-[#174f99] text-2xl text-white">
            →
          </a>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00572d]">Công ty TNHH Xây dựng Hucons</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase text-[#174f99] sm:text-4xl">
              Đơn vị tổng thầu thiết kế và thi công uy tín
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Chất lượng và sự hài lòng của khách hàng là tôn chỉ hành động. Hucons cam kết mang đến sản phẩm, dịch vụ có giá trị lâu dài,
              đảm bảo an toàn và tiến độ trên mỗi dự án.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-white p-8 text-center">
                <p className="text-sm font-bold uppercase text-slate-500">{item.label}</p>
                <p className="mt-4 text-4xl font-extrabold text-[#174f99]">{item.value}</p>
                <p className="mt-2 text-sm text-slate-500">{item.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6">
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

      <footer className="bg-[#06172e] px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold uppercase">Hucons</p>
            <p className="mt-2 text-sm text-white/70">Tổng thầu thiết kế và thi công dân dụng, công nghiệp.</p>
          </div>
          <div className="text-sm text-white/70">info@hucons.vn · 0919 882 886</div>
        </div>
      </footer>
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
