"use client";

import { FileText, Download, X } from "lucide-react";

interface ServiceDocModalProps {
  docName: string;
  onClose: () => void;
  onDownload: (name: string) => void;
}

export function ServiceDocModal({ docName, onClose, onDownload }: ServiceDocModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-900 select-none">
          <div className="flex items-center space-x-2.5">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h4 className="text-xs font-bold tracking-widest text-amber-300 uppercase">DIGITAL PREVIEW</h4>
              <span className="text-xs sm:text-sm font-black uppercase text-white">CHI TIẾT VĂN BẢN QUÉT GỐC (PDF)</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-emerald-900 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 text-left bg-slate-50 space-y-6 select-none min-h-[300px] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] bg-emerald-100 text-emerald-900 border border-emerald-200 px-2.5 py-0.5 rounded font-bold uppercase">
              Bản quét chính chủ • Hồ sơ PMS TCC
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0c2e1a] uppercase leading-snug border-b border-gray-100 pb-2">
              {docName}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Bộ hồ sơ scan chất lượng cao của tệp: <strong>"{docName}"</strong> đã được liên kết mộc của cơ quan đăng kiểm chất lượng xây
              dựng Sở Xây Dựng và Cục Quản lý Hoạt động, hiển thị hợp pháp các thông số kỹ thuật.
            </p>
            <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5 text-xs text-emerald-900 font-medium">
              <p className="flex justify-between">
                <span className="text-gray-400">Trạng thái tệp:</span>
                <span className="font-bold text-emerald-800">✓ Đã đóng dấu đỏ đầy đủ</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-400">Độ phân giải:</span>
                <span className="font-bold">300 DPI (Sắc nét)</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-400">Cơ quan đối soát:</span>
                <span className="font-bold">Hệ thống đấu thầu Quốc gia</span>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-2 justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Đóng cửa sổ
            </button>
            <button
              onClick={() => { onClose(); onDownload(docName); }}
              className="w-full sm:w-auto px-6 py-2 bg-[#1e4e8c] hover:bg-[#153b6c] text-white rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              <span>Tải tệp PDF xuống</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
