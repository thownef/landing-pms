"use client";

import { BookOpen } from "lucide-react";
import { ServiceDocList, type DocItem } from "./ServiceDocList";

const DOCS: DocItem[] = [
  { name: "Giấy đăng ký kinh doanh", size: "1.2 MB", type: "PDF", url: "/assets/files/QAQC/GPKD%20PMS%20L13%20(2023).pdf" },
  { name: "Giấy chứng nhận ISO", size: "2.8 MB", type: "PDF", url: "/assets/files/QAQC/GiayChungNhanISO.pdf" },
  { name: "Chứng chỉ hành nghề hoạt động xây dựng Hạng I", size: "1.8 MB", type: "PDF", url: "/assets/files/QAQC/1.%20H%C4%90XD%20PMS%20H%E1%BA%A0NG%20I.pdf" },
  { name: "Chứng chỉ hành nghề hoạt động xây dựng Hạng II", size: "1.8 MB", type: "PDF", url: "/assets/files/QAQC/2.%20H%C4%90XD%20PMS%20H%E1%BA%A0NG%20II.pdf" },
  { name: "Chứng chỉ hành nghề hoạt động xây dựng Hạng III", size: "1.8 MB", type: "PDF", url: "/assets/files/QAQC/2.%20H%C4%90XD%20PMS%20H%E1%BA%A0NG%20III.pdf" },
  { name: "Danh sách nhân sự", size: "3.7 MB", type: "PDF", url: "/assets/files/QAQC/DanhSachNhanSu_TVGS_PMS.pdf" },
  { name: "Hồ sơ năng lực", size: "8.4 MB", type: "PDF", url: "/assets/files/QAQC/HSNL%20TVGS%20TK%20PMS%202026%20-%20VI.pdf" },
];

const PROJECTS = [
  { name: "Cánh Đồng Điện Gió Kosy - Bạc Liêu", work: "Giám sát quy trình lắp dựng trục tháp, định tâm ổ đỡ tuabin và gia tải lực né cáp dầm", status: "Đã đóng điện" },
  { name: "Nhà Máy Điện Mặt Trời Xuân Thiện", work: "Giám sát cơ cấu thốc giập khung sắt mạ vàng giá nâng pin, chống võng cáp biến áp", status: "Vận hành an toàn" },
  { name: "Dự Án TBA 220kV Lộc Ninh & Đường dây", work: "Tư vấn giám sát thi công bê tông khối móng trạm biến áp, đấu nối đóng nạp trạm biến áp", status: "Nghiệm thu dứt điểm" },
];

interface ServiceTabSupervisionProps {
  onDownload: (name: string) => void;
}

export function ServiceTabSupervision({ onDownload }: ServiceTabSupervisionProps) {
  return (
    <div className="space-y-10">
      {/* Hero row */}
      <div className="flex flex-col lg:flex-row items-start gap-8 border-b border-gray-200 pb-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-base tracking-widest text-[#1e4e8c] font-black uppercase">LĨNH VỰC SÁT HÀNH KIỂM SOÁT THI CÔNG</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase leading-tight">
            Tư vấn giám sát thi công (Bộ Xây dựng phê chuẩn Hạng I)
          </h3>
          <div className="border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-xl italic text-base text-black leading-relaxed shadow-sm">
            "PMS TCC quy tụ đội ngũ kỹ sư và chuyên gia giàu kinh nghiệm trong lĩnh vực công nghiệp và năng lượng, đặc biệt tại các dự án
            điện gió, điện mặt trời, trạm biến áp và đường dây truyền tải điện. Chúng tôi tin rằng yếu tố con người luôn là nền tảng tạo
            nên chất lượng và sự thành công của mỗi dự án."
          </div>
          <p className="text-base text-black leading-relaxed">
            Đội ngũ của PMS TCC không chỉ thực hiện công tác giám sát thi công mà còn đồng hành tư vấn cho Chủ đầu tư trong suốt quá trình
            triển khai dự án. Chúng tôi cam kết bám sát hiện trường, kiểm soát chất lượng, tiến độ và an toàn thi công; đồng thời hỗ trợ về
            pháp lý, kỹ thuật, hồ sơ và công tác nghiệm thu nhằm đảm bảo dự án được triển khai hiệu quả và đúng quy định.
          </p>
          <p className="text-base text-black leading-relaxed">
            Các kỹ sư của PMS TCC là những nhân sự đã trực tiếp tham gia các dự án năng lượng tái tạo từ giai đoạn phát triển mạnh mẽ
            2017 – 2021, với kinh nghiệm thực tế trải dài từ Bắc vào Nam, qua nhiều điều kiện địa hình và môi trường thi công khác nhau.
          </p>
          <p className="text-base text-black leading-relaxed">
            Chúng tôi tin rằng, với bề dày kinh nghiệm, tinh thần trách nhiệm và sự tận tâm trong việc bảo vệ uy tín thương hiệu, PMS TCC
            sẽ luôn đóng góp những giá trị cốt lõi, hoàn thành đúng chuẩn an toàn cấp quốc gia tốt nhất.
          </p>
        </div>
        <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden border border-gray-200 shadow-md relative group">
          <div className="absolute inset-0 bg-[#0c2e1a]/10 group-hover:bg-transparent transition-colors duration-300" />
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
            alt="Công sỹ thực địa thi công"
            className="w-full h-72 object-cover transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Documents + Experience grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <ServiceDocList
            title="Văn Bản Pháp Lý & Chứng Chỉ Sát Hạch"
            docs={DOCS}
            onDownload={onDownload}
          />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#1e4e8c]" />
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-950">Công Trình Giám Sát Tiêu Biểu</h4>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-xs">
              <thead className="bg-[#153b6c] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold uppercase tracking-wider">Tên dự án Năng lượng</th>
                  <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Phạm vi giám sát cốt lõi</th>
                  <th className="px-3 py-3 text-center font-bold uppercase tracking-wider">Tiến độ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {PROJECTS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="text-sm px-4 py-3 font-extrabold text-emerald-950 max-w-[200px] leading-tight text-left">{row.name}</td>
                    <td className="text-sm px-3 py-3 text-gray-600 font-light leading-relaxed text-left">{row.work}</td>
                    <td className="text-sm px-3 py-3 text-center whitespace-nowrap">
                      <span className="inline-flex px-2 py-0.5 bg-blue-50 text-[#1e4e8c] border border-blue-200 rounded font-bold">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=605"
                alt="Điện gió tại Việt Nam"
                className="w-full h-48 object-cover brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=605"
                alt="Đường dây cao áp TBA"
                className="w-full h-48 object-cover brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
