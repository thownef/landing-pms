import Link from "next/link";
import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-white px-4 py-24">
      <div className="text-center max-w-lg mx-auto space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
              <Construction className="w-10 h-10 text-amber-500" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <div className="inline-block relative">
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-emerald-950">
              Đang Cập Nhật
            </h1>
            <div className="mx-auto mt-1 h-0.5 w-full rounded-full bg-amber-400" />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Trang này đang được xây dựng và hoàn thiện. Vui lòng quay lại sau hoặc liên hệ với chúng tôi để được hỗ trợ.
          </p>
        </div>

        {/* Progress bar decoration */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full animate-pulse" style={{ width: "60%" }} />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#098a58] text-white text-sm font-bold rounded tracking-wide hover:bg-[#08794d] transition-colors"
          >
            Về Trang Chủ
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-bold rounded tracking-wide hover:bg-gray-50 transition-colors"
          >
            Liên Hệ Hỗ Trợ
          </Link>
        </div>
      </div>
    </main>
  );
}
