import type { Metadata } from "next";
import { Award, Building2 } from "lucide-react";
import CapacityProfile from "@/components/CapacityProfile";

export const metadata: Metadata = {
  title: "Tổng quan - Phúc Mỹ Sơn",
  description: "Thông tin tổng quan về Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn.",
};

export default function OverviewPage() {
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
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">
                Giới thiệu — PMS TCC
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight">
                Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn
              </h1>
              <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
                Thành lập năm 2004 — hơn 20 năm kinh nghiệm trong lĩnh vực tư vấn xây dựng, thí nghiệm kiểm tra chất lượng và giám sát công trình năng lượng trên toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="flex flex-col space-y-6 text-left lg:col-span-7">

              <div className="space-y-4 text-justify text-base leading-relaxed text-gray-700">
                <p>
                  <strong>CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG THƯƠNG MẠI PHÚC MỸ SƠN (PMS TCC)</strong> được
                  thành lập từ năm <strong>2004</strong>, hoạt động trong lĩnh vực tư vấn xây dựng và thí
                  nghiệm kiểm tra chất lượng công trình. Với nhiều năm kinh nghiệm thực tiễn, PMS TCC không ngừng nâng cao năng lực chuyên
                  môn, đầu tư đồng bộ về nhân sự, trang thiết bị và hệ thống quản lý chất lượng theo tiêu chuẩn{" "}
                  <strong>ISO 9001:2015</strong> nhằm cung cấp các dịch vụ chuyên nghiệp, chính xác và hiệu quả.
                </p>
                <p>
                  PMS TCC hoạt động trong các lĩnh vực: thiết kế và thẩm tra thiết kế; tư vấn giám sát; quản lý dự án; đặc biệt là thí
                  nghiệm kiểm tra chất lượng công trình với phòng thí nghiệm{" "}
                  <strong>LAS-XD 763 (LAS-XD HCM.017)</strong> hiện đại, đáp ứng đầy đủ các tiêu chuẩn, quy
                  chuẩn hiện hành cho các công trình dân dụng, công nghiệp và năng lượng.
                </p>
                <p>
                  Bên cạnh đó, PMS TCC có nhiều kinh nghiệm trong công tác tư vấn quản lý dự án và tư vấn giám sát thi công các công trình
                  năng lượng như điện gió, điện mặt trời, trạm biến áp và đường dây truyền tải điện. Công ty đã tham gia triển khai và hoàn
                  thành hiệu quả nhiều dự án năng lượng trên phạm vi cả nước, từng bước khẳng định uy tín và năng lực trong lĩnh vực năng
                  lượng tái tạo.
                </p>
                <p>
                  Với đội ngũ kỹ sư, chuyên gia giàu kinh nghiệm, tinh thần trách nhiệm cao cùng hệ thống thiết bị đồng bộ, PMS TCC luôn
                  mang đến các giải pháp tư vấn hiệu quả, khả thi và phù hợp với điều kiện thực tế của từng dự án. Chúng tôi luôn đề cao
                  các yếu tố chất lượng, tiến độ, an toàn và hiệu quả đầu tư trong suốt quá trình thực hiện.
                </p>
              </div>

              {/* Cam kết */}
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#098a58]">PMS TCC cam kết</p>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    Cung cấp dịch vụ tư vấn chuyên nghiệp, minh bạch, tuân thủ quy định pháp luật và các tiêu chuẩn kỹ thuật hiện hành.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    Huy động đội ngũ chuyên gia, kỹ sư có năng lực và chứng chỉ hành nghề phù hợp với yêu cầu dự án.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    Đảm bảo tiến độ, chất lượng và hiệu quả đầu tư cho các công trình được giao thực hiện.
                  </li>
                </ul>
                <p className="text-sm text-gray-600 leading-relaxed pt-1 border-t border-emerald-100">
                  Với phương châm đồng hành cùng sự phát triển bền vững, PMS TCC mong muốn tiếp tục hợp tác cùng Quý Chủ đầu tư và Quý Đối
                  tác trong các dự án sắp tới, góp phần vào sự phát triển của ngành xây dựng và năng lượng tái tạo tại Việt Nam.
                </p>
              </div>

              <div className="flex items-center justify-between rounded-lg border-l-4 border-amber-400 bg-[#098a58] p-4 text-white shadow-sm">
                <div className="select-none text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Tiêu chí hoạt động</p>
                  <p className="mt-0.5 text-base font-black tracking-tight">XÂY VỮNG NIỀM TIN - DỰNG UY TÍN VÀNG</p>
                </div>
                <Award className="hidden h-9 w-9 shrink-0 text-amber-300 sm:block" />
              </div>
            </div>

            <div className="flex flex-col space-y-6 lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg" style={{ minHeight: "420px" }}>
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
                  alt="Công trình đường dây truyền tải điện PMS TCC"
                  className="w-full h-full object-cover select-none absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-16 mb-10 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#098a58] uppercase mb-2">Hồ sơ doanh nghiệp</p>
            <h2 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase leading-tight">
              Thông tin đăng ký pháp nhân &amp; quy mô hoạt động
            </h2>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-amber-400 mx-auto" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md flex flex-col lg:flex-row items-stretch mb-16 transition-all duration-300 hover:shadow-lg">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[460px] bg-slate-100 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
                alt="PMS TCC Corporate Headquarters"
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />
            </div>

            <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white text-left">
              <div className="space-y-4 text-black">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Tên đầy đủ:</span>
                  <span className="sm:col-span-9 leading-relaxed uppercase">CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG THƯƠNG MẠI PHÚC MỸ SƠN</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Tên viết tắt:</span>
                  <span className="sm:col-span-9">PMS TCC</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Mã số thuế:</span>
                  <span className="sm:col-span-9">0303282829</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Địa chỉ:</span>
                  <span className="sm:col-span-9">
                    28 đường số 16, Khu phố 5, Phường Hiệp Bình Chánh, Thành Phố Thủ Đức, TP. Hồ Chí Minh, Việt Nam
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Điện thoại:</span>
                  <span className="sm:col-span-9">
                    028.3511.4395 <span className="mx-2">|</span> 035.440.8547
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 pb-3.5 border-b border-gray-200 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Website:</span>
                  <span className="sm:col-span-9 hover:underline cursor-pointer">phucmyson.vn</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 sm:gap-x-4 items-baseline">
                  <span className="sm:col-span-3 font-bold tracking-tight text-sm sm:text-base">Email:</span>
                  <span className="sm:col-span-9">lasxdhcm017.pms@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <CapacityProfile />
        </div>
      </section>
    </div>
  );
}
