"use client";

import { Download } from "lucide-react";

const CapacityProfile = () => {
  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/assets/files/PhucMySon_Profile_10022025.pdf";
    link.download = "PhucMySon_Profile_10022025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-20 border-t border-gray-200 pt-16">
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm text-center">
        <a
          href="/assets/files/PhucMySon_Profile_10022025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group max-w-sm w-full mb-8 block cursor-pointer"
        >
          <div className="absolute -inset-1.5 bg-linear-to-r from-emerald-900 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-300" />
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col justify-between aspect-[3/4] p-8 text-center select-none transform transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-amber-400" />

            <div className="flex flex-col items-center mt-6 space-y-1">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=405"
                alt="Logo PMS TCC"
                className="w-14 h-14 rounded- object-contain"
              />
              <span className="text-emerald-950 font-black text-lg tracking-widest uppercase">PMS TCC</span>
              <p className="text-[8px] text-gray-500 tracking-wider font-bold">XÂY VỮNG NIỀM TIN – DỰNG UY TÍN VÀNG</p>
            </div>

            <div className="my-4 relative h-48 overflow-hidden rounded-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=405"
                alt="Corporate Buildings and construction cranes"
                className="w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/45 to-transparent p-3 flex flex-col items-center text-center">
                <span className="text-[14px] text-white font-black tracking-widest uppercase">PMS TCC</span>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-black tracking-widest text-[#0c2e1a] uppercase">HỒ SƠ NĂNG LỰC</h4>
              <p className="text-[10px] text-gray-500">phucmyson.vn</p>
            </div>
          </div>
        </a>

        <div className="w-full max-w-sm space-y-3">
          <a
            href="/assets/files/PhucMySon_Profile_10022025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#1e4e8c] text-white tracking-widest font-black text-sm rounded-lg hover:bg-[#153b6c] transition-all duration-300 hover:shadow-lg cursor-pointer uppercase"
          >
            XEM HỒ SƠ NĂNG LỰC
          </a>

          <button
            onClick={handleDownloadPdf}
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-transparent text-gray-500 hover:text-emerald-900 tracking-wider font-bold text-xs hover:underline cursor-pointer transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>TẢI BẢN IN PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapacityProfile;
