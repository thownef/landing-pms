"use client";

const stats = [
  { label: "Kinh nghiệm", value: "20+", unit: "Năm" },
  { label: "Chứng chỉ năng lực", value: "Hạng I", unit: "" },
  { label: "Chỉ tiêu thí nghiệm", value: "108+", unit: "Chỉ tiêu" },
  { label: "Khách hàng & Đối tác", value: "50+", unit: "Đơn vị" },
];

import { Activity, Award, Check, HardHat, Shield, ShieldCheck, Zap } from "lucide-react";

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
                Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn. Trải qua hơn 20 năm trưởng thành bền vững, chúng tôi tự hào là đối
                tác cấp cao được Bộ Xây dựng cấp <strong className="text-amber-300">Chứng chỉ Năng lực Hạng I </strong> về Tư vấn Giám sát
                &amp; Thiết kế Truyền tải Điện, Thủy điện, Điện Gió và Hệ thống Phòng Thí Nghiệm LAS-XD toàn diện.
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#098a58]">
              Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn
            </p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase text-emerald-950 sm:text-4xl">
              Đối Tác Chiến Lược Của Các Dự Án Năng Lượng &amp; Thí Nghiệm Trọng Điểm
            </h2>
            <p className="mt-6 text-base leading-8 text-black">
              Với phương châm &quot;Xây vững niềm tin - Dựng uy tín vàng&quot;, PMS TCC cam kết cung cấp dịch vụ tư vấn giám sát, thiết kế
              và thí nghiệm chuyên sâu, mang lại độ chính xác tuyệt đối và giá trị bền vững cho từng công trình.
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

      <section className="pb-20 lg:pb-28 bg-white border-b border-emerald-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-50 opacity-50 blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 border border-emerald-100 px-3 py-1 rounded">
              Triết Lý Vận Hành
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 uppercase mt-4">
              3 Trụ Cột Cam Kết Vàng tại PMS-TCC
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-3">
              Dấu ấn tạo lập vị thế vững chắc hơn 20 năm hoạt động tư vấn thí nghiệm xây dựng độc lập.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-emerald-300 shadow-xl text-left flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-800 text-amber-300 border border-emerald-800 flex items-center justify-center shadow-md">
                    <Check className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight leading-snug">Tính Độc Lập Khách Quan</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Chúng tôi hiểu rõ giá trị cốt lõi của kết quả thí nghiệm đo lường. Phòng LAB mã số LAS-XD 763 cam kết 100% dữ liệu thử phá hủy bê
                  tông cốt móng hay siêu âm kéo thép đều được tiến hành chuẩn chỉnh, không thỏa hiệp.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-bold tracking-wider uppercase mt-8 pt-4 border-t border-slate-100">
                ★ Tiêu chuẩn ISO/IEC 17025
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-emerald-300 shadow-xl text-left flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-800 text-amber-300 border border-emerald-800 flex items-center justify-center shadow-md">
                    <Shield className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight leading-snug">Kỹ Thuật Thực Chiến</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Quy tụ những Chuyên gia đầu ngành thiết kế móng mác cao, tư vấn giám sát kết cấu móng tuabin sâu dưới biển hay trạm biến
                  áp cực kỳ phức tạp. PMS-TCC không bán lý thuyết suông; chúng tôi giải quyết bài toán thực địa.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-bold tracking-wider uppercase mt-8 pt-4 border-t border-slate-100">
                ★ Đội ngũ 30+ Thạc Sĩ/KS
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-emerald-300 shadow-xl text-left flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-800 text-amber-300 border border-emerald-800 flex items-center justify-center shadow-md">
                    <Activity className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight leading-snug">Minh Bạch Pháp Lý</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Mọi kết quả đều đi kèm chữ ký pháp lý cùng dấu mộc đỏ được cơ quan chức năng công nhận chính thức trên toàn quốc. Chúng
                  tôi số hóa và báo cáo tiến trình thực trạng nén cọc móng nhanh qua nền tảng giúp chủ đầu tư an tâm.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-bold tracking-wider uppercase mt-8 pt-4 border-t border-slate-100">
                ★ Năng lực Hạng I - BXD
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafbfc] border-b border-gray-200 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded">Quy Trình Chuyên Nghiệp</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 uppercase mt-3">Phương Thức Phối Hợp Kỹ Thuật</h2>
            <p className="text-xs text-black mt-2">Sự nhịp nhàng từ hiện trường đến báo cáo lý tính số hóa, bảo mật tối đa cho chủ dự án.</p>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-emerald-200 hidden md:block z-0" />
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm z-10 hover:border-emerald-300 transition-all">
              <span className="text-2xl font-black text-amber-500">01</span>
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest mt-2">Kháo Sát Mẫu Thử</h4>
              <p className="text-sm text-black mt-2 leading-relaxed">Lấy mẫu tại chỗ ở hiện trường móng cột tuabin gió, hoặc đăng ký nhận mẫu bê tông cốt đúc từ công trường chuyển về phòng LAB chuyên sâu.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm z-10 hover:border-emerald-300 transition-all">
              <span className="text-2xl font-black text-amber-500">02</span>
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest mt-2">Thực Thí Vật Lý</h4>
              <p className="text-sm text-black mt-2 leading-relaxed">Tiến hành gia tải đỉnh nén phá hủy bê tông cốt nguội bằng WA-1000B, siêu âm xung sóng cọc khoan, đo điện tích điện trở của hệ thu lôi.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm z-10 hover:border-emerald-300 transition-all">
              <span className="text-2xl font-black text-amber-500">03</span>
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest mt-2">Lập Kết Luận Pháp Lý</h4>
              <p className="text-sm text-black mt-2 leading-relaxed">Đội ngũ Thạc sĩ kiểm soát và biên soạn bộ chỉ số cơ lý theo đúng tiêu chuẩn hành pháp của Sở Xây Dựng và Bộ Công Thương quốc gia.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm z-10 hover:border-emerald-300 transition-all">
              <span className="text-2xl font-black text-amber-500">04</span>
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest mt-2">Cấp Phê Duyệt</h4>
              <p className="text-sm text-black mt-2 leading-relaxed">Bàn giao tận tay hồ sơ kết luận gốc có mộc đỏ hợp thức hóa toàn bộ quá trình thanh toán giải ngân đầu tư của dự án với ngân hàng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cam kết chất lượng */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded">Cam Kết Dịch Vụ</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 uppercase mt-3">Giá Trị Cốt Lõi Chúng Tôi Mang Lại</h2>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm font-black text-emerald-950 uppercase tracking-tight">Chính Xác &amp; Khách Quan</h3>
                <p className="text-sm text-black mt-2 leading-relaxed">Toàn bộ dữ liệu thí nghiệm, mẫu đúc bê tông xi măng được thực hiện đúng quy trình tiêu chuẩn hiện hành nghiêm ngặt.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm font-black text-emerald-950 uppercase tracking-tight">Nhân Sự Bản Lĩnh Chuyên Môn</h3>
                <p className="text-sm text-black mt-2 leading-relaxed">Sở hữu những kỹ sư điện truyền tải 36–43 năm kinh nghiệm thực tiễn tại các TBA siêu cao áp khó nhất.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm font-black text-emerald-950 uppercase tracking-tight">Vững Tiến Độ Công Trình</h3>
                <p className="text-sm text-black mt-2 leading-relaxed">Cam kết kết quả thí nghiệm nền nứt móng và giám sát an toàn được triển khai nhanh chóng bảo vệ quỹ thời gian vàng.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
