import type { Metadata } from "next";
import { Award } from "lucide-react";
import CapacityProfile from "@/components/CapacityProfile";

export const metadata: Metadata = {
  title: "Tổng quan - Phúc Mỹ Sơn",
  description: "Thông tin tổng quan về Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn.",
};

export default function OverviewPage() {
  return (
    <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="inline-block relative">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#098a58]">Về chúng tôi</h2>
              <div className="mx-auto mt-1 h-0.5 w-full rounded-full bg-amber-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="flex flex-col space-y-6 text-left lg:col-span-7">
              <h1 className="border-l-4 border-[#098a58] pl-4 text-xl font-bold uppercase text-gray-900 sm:text-2xl">
                Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn
              </h1>

              <div className="space-y-4 text-justify text-base leading-relaxed text-gray-700">
                <p>
                  Được thành lập từ năm <strong className="text-emerald-950">2004</strong>, với nhiều năm kinh nghiệm trong lĩnh vực tư vấn
                  xây dựng và thí nghiệm kiểm tra chất lượng công trình, <strong className="text-emerald-950">PMS TCC</strong> không ngừng
                  hoàn thiện năng lực chuyên môn để cung cấp dịch vụ chính xác, chuyên nghiệp và hiệu quả.
                </p>
                <p>
                  Công ty quy tụ đội ngũ cán bộ quản lý, kỹ sư, cán bộ kỹ thuật và thí nghiệm viên được đào tạo bài bản. Hệ thống phòng thí
                  nghiệm, thiết bị và quy trình quản lý chất lượng được đầu tư đồng bộ, áp dụng tiêu chuẩn{" "}
                  <strong className="text-emerald-950">ISO 9001:2015</strong> cho các hoạt động tư vấn, giám sát và thí nghiệm chuyên ngành
                  xây dựng.
                </p>
                <p>
                  Với phương châm không thỏa hiệp về chất lượng, PMS TCC đồng hành cùng chủ đầu tư và đối tác trong các công tác thiết kế,
                  thẩm tra, tư vấn giám sát, quản lý dự án và thí nghiệm kiểm tra chất lượng cho nhiều công trình dân dụng, công nghiệp và
                  năng lượng.
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
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
                  alt="PMS Construction Site"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-emerald-950/70 to-transparent p-4"></div>
              </div>
            </div>
          </div>

          <hr className="my-10 text-gray-400" />

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
  );
}
