"use client";

import { BookOpen } from "lucide-react";
import { DocList, type DocItem } from "./DocList";

const DOCS: DocItem[] = [
  {
    name: "Giấy đăng ký địa điểm kinh doanh của phòng LAS",
    size: "1.4 MB",
    type: "PDF",
    url: "/assets/files/testing/GI%E1%BA%A4Y%20CH%E1%BB%A8NG%20NH%E1%BA%ACN%20%C4%90KY%20%C4%90%E1%BB%8AA%20%C4%90I%E1%BB%82M%20KINH%20DOANH%20PMS.pdf",
  },
  { name: "Giấy chứng nhận phòng LAS-XD 763", size: "2.1 MB", type: "PDF", url: "/assets/files/testing/LASXD763%20-%20PMS.pdf" },
  { name: "Giấy chứng nhận phòng LAS-XD HCM.017", size: "1.1 MB", type: "PDF", url: "/assets/files/testing/LAS-XD%20HCM.017.pdf" },
  { name: "Danh sách nhân sự", size: "2.1 MB", type: "PDF", url: "/assets/files/testing/DanhSachNhanSu_PTN_PMS.pdf" },
  {
    name: "Danh sách dụng cụ thiết bị thí nghiệm",
    size: "2.8 MB",
    type: "XLSX",
    url: "/assets/files/testing/DANH%20SACH%20D%E1%BB%A4NG%20C%E1%BB%A4%20THI%E1%BA%BET%20B%E1%BB%8A%20THI%20NGHIEM%20-%20HOA%20DON%20-HOP%20DONG%20MUA%20BAN-c%C3%A1c%20trang%20%C4%91%C3%A3%20x%C3%B3a_1.xlsx",
  },
  {
    name: "Chứng chỉ kiểm định - hiệu chuẩn các thiết bị thí nghiệm",
    size: "3.2 MB",
    type: "PDF",
    url: "/assets/files/testing/CH%E1%BB%A8NG%20CH%E1%BB%88%20KI%E1%BB%82M%20%C4%90%E1%BB%8ANH-%20HI%E1%BB%86U%20CHU%E1%BA%A8N%20C%C3%81C%20THI%E1%BA%BET%20B%E1%BB%8A%20TH%C3%8D%20NGHI%E1%BB%86M%20(C%C3%92N%20HI%E1%BB%86U%20L%E1%BB%B0C)pms.pdf",
  },
  {
    name: "Quyết định tự công bố năng lực hoạt động",
    size: "1.8 MB",
    type: "PDF",
    url: "/assets/files/testing/20260302-PMS-Q%C4%90015-V%E1%BB%81%20vi%E1%BB%87c%20c%C3%B4ng%20b%E1%BB%91%20c%C3%B4ng%20khai%20th%C3%B4ng%20tin%20v%E1%BB%81%20n%C4%83ng%20l%E1%BB%B1c%20%C4%90%C4%90KH%C4%90TNC%C3%94XD.pdf",
  },
  { name: "Hồ sơ năng lực", size: "8.4 MB", type: "PDF", url: "/assets/files/testing/HSNL%20LAS.XD%20PMS%202026.pdf" },
];

const PROJECTS = [
  {
    name: "ĐZ 220kV Nhơn Trạch 3 – TBA 500kV Long Thành (Gói 11, 12, 13 – 86 vị trí móng)",
    location: "Đồng Nai",
    work: "Thí nghiệm xây dựng",
    role: "Thầu chính",
  },
  {
    name: "ĐZ 220kV mạch 2 Bảo Lộc – Sông Mây (Gói 15, 16 – 160 vị trí móng)",
    location: "Lâm Đồng",
    work: "Thí nghiệm xây dựng",
    role: "Thầu chính",
  },
  {
    name: "TBA 220kV Lấp Vò & ĐZ đấu nối Thốt Nốt – Lấp Vò (Gói 14, 15)",
    location: "Đồng Tháp, Cần Thơ",
    work: "Thí nghiệm xây dựng",
    role: "Thầu chính",
  },
  {
    name: "Quan trắc TBA 220kV Lấp Vò & ĐZ đấu nối – Hạng mục san nền TBA",
    location: "Đồng Tháp",
    work: "Quan trắc công trình",
    role: "Thầu chính",
  },
  { name: "TBA 500kV Củ Chi và đường dây đấu nối", location: "TP. Hồ Chí Minh", work: "Thí nghiệm xây dựng", role: "Thầu chính" },
  { name: "TBA 500kV Đồng Nai 2 và đường dây đấu nối", location: "Đồng Nai", work: "Thí nghiệm xây dựng", role: "Thầu chính" },
];

export function TabTesting() {
  return (
    <div className="space-y-10">
      {/* Hero row */}
      <div className="flex flex-col lg:flex-row items-start gap-8 border-b border-gray-200 pb-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-base tracking-widest text-[#1e4e8c] font-black uppercase">LĨNH VỰC THÍ NGHIỆM CHUYÊN NGÀNH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase leading-tight">
            Thí nghiệm kiểm tra chất lượng công trình (LAS-XD 763)
          </h3>
          <div className="border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-xl italic text-base text-black leading-relaxed shadow-sm">
            "Về lĩnh vực thí nghiệm kiểm tra chất lượng công trình, <strong>PMS TCC</strong> đầu tư đồng bộ hệ thống trang thiết bị hiện
            đại, đầy đủ và được hiệu chuẩn, kiểm định định kỳ theo quy định nhằm đáp ứng hiệu quả các công tác thí nghiệm tại hiện trường và
            trong phòng thí nghiệm. Hệ thống phòng thí nghiệm <strong>LAS-XD 763 (LAS-XD HCM.017)</strong> của chúng tôi đáp ứng đầy đủ các
            tiêu chuẩn, quy chuẩn kỹ thuật hiện hành, phục vụ công tác kiểm soát chất lượng cho nhiều loại hình công trình dân dụng, công
            nghiệp và năng lượng."
          </div>
          <p className="text-base text-black leading-relaxed">
            Chúng tôi có nhiều kinh nghiệm trong công tác thí nghiệm phục vụ các dự án điện gió, điện mặt trời, trạm biến áp và đường dây
            truyền tải điện trên cả nước. PMS TCC đã tham gia thực hiện các hạng mục thí nghiệm vật liệu, kiểm tra chất lượng nền móng, kết
            cấu, bê tông, hàn, tiếp địa, điện và các công tác kiểm định chuyên ngành khác trong quá trình thi công và nghiệm thu công trình.
          </p>
          <p className="text-base text-black leading-relaxed">
            Với đội ngũ kỹ sư, kỹ thuật viên được đào tạo chuyên môn bài bản cùng quy trình quản lý chất lượng chặt chẽ, PMS TCC cam kết
            cung cấp kết quả thí nghiệm chính xác, khách quan và kịp thời, góp phần hỗ trợ Chủ đầu tư và các bên liên quan kiểm soát chất
            lượng, tiến độ và hiệu quả đầu tư của dự án.
          </p>
        </div>
        <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden border border-gray-200 shadow-md relative group">
          <div className="absolute inset-0 bg-[#0c2e1a]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <img
            src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=600&h=800&auto=format&fit=crop"
            className="w-full h-auto transform duration-500 group-hover:scale-105"
            height={800}
            width={600}
            alt="Phòng thí nghiệm LAS-XD"
          />
        </div>
      </div>

      {/* Documents + Experience grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <DocList title="Hồ Sơ Tài Liệu Số Hóa Gốc" docs={DOCS} />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#1e4e8c]" />
            <h4 className="text-base font-bold uppercase tracking-widest text-emerald-950">
              Bảng Kê Kinh Nghiệm Thực Tế &amp; Công Trình Tiêu Biểu
            </h4>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-[#153b6c] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold uppercase tracking-wider">Tên dự án</th>
                  <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Địa điểm</th>
                  <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Phạm vi</th>
                  <th className="px-3 py-3 text-center font-bold uppercase tracking-wider">Vai trò</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {PROJECTS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-semibold text-emerald-950 leading-snug text-left max-w-[220px]">{row.name}</td>
                    <td className="px-3 py-3 text-black leading-snug text-left whitespace-nowrap">{row.location}</td>
                    <td className="px-3 py-3 text-black leading-snug text-left">{row.work}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">
                      <span className="inline-flex px-2 py-0.5 bg-blue-50 text-[#1e4e8c] border border-blue-200 rounded font-bold text-[10px]">
                        {row.role}
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=405"
                alt="Hiện trường bê tông móng"
                className="w-full h-48 object-cover brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=405"
                alt="Kiểm định cơ học máy WA-1000B"
                className="w-full h-48 object-cover brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
