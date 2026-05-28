"use client";

import { ClipboardList, Sparkles } from "lucide-react";

export function ServiceTabDesign() {
  return (
    <div className="space-y-8 text-center py-6">
      <ClipboardList className="w-16 h-16 text-amber-500 mx-auto" />
      <div className="max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-black text-emerald-950 uppercase">Tư vấn Thiết kế, Thẩm tra &amp; Quản lý dự án</h3>
        <p className="text-xs text-gray-600 leading-relaxed font-light">
          Phân viện thiết kế xây dựng công trình của PMS TCC chuyên nhận thiết kế kỹ thuật, lập dự án cơ sở pháp lý, thẩm tra biện pháp tổ
          chức thi công móng siêu tải trọng cho thiết bị xoay và tháp nâng áp.
        </p>
        <div className="p-8 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-300 max-w-lg mx-auto text-left space-y-3 shadow-inner">
          <div className="flex items-center space-x-2 text-amber-800">
            <Sparkles className="w-5 h-5 flex-shrink-0 animate-spin" />
            <span className="text-[11px] font-bold uppercase tracking-wider">THÔNG BÁO TỪ HỆ THỐNG PMS-TCC CẬP NHẬT 2026:</span>
          </div>
          <p className="text-xs italic text-gray-700 leading-relaxed">"Kinh nghiệm: Gửi bảng kê, thông tin và hình ảnh sau"</p>
          <p className="text-[11px] text-gray-500 leading-relaxed">
            Hiện bộ phận kỹ sư thiết kế móng gá đang tổng hợp dữ liệu bản vẽ CAD chi tiết và danh mục dự án thẩm tra bệ tháo tủ dầu điện
            lực. Hệ thống sẽ tự động cập nhật ngay khi thông tin bổ sung được phê chuẩn chính thức!
          </p>
        </div>
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-slate-200 text-slate-800 text-[10px] rounded font-bold uppercase">Bản vẽ kết cấu cọc</span>
          <span className="px-3 py-1 bg-slate-200 text-slate-800 text-[10px] rounded font-bold uppercase">Thẩm tra biện pháp tổ chức (BPTC)</span>
          <span className="px-3 py-1 bg-slate-200 text-slate-800 text-[10px] rounded font-bold uppercase">Hồ sơ giao thầu EPC</span>
        </div>
      </div>
    </div>
  );
}
