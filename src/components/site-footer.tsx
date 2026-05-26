export function SiteFooter() {
  return (
    <footer className="select-none border-t-2 border-amber-400 bg-[#098a58] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 text-left md:grid-cols-12">
          <div className="flex flex-col space-y-4 md:col-span-5">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-amber-300">
                PMS
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-black uppercase leading-none tracking-tight text-white">Phúc Mỹ Sơn</h4>
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">Tư vấn xây dựng &amp; năng lượng</span>
              </div>
            </div>

            <p className="max-w-md text-justify text-base font-normal leading-8">
              Trải qua hơn 20 năm trưởng thành bền vững, PMS TCC đồng hành cùng chủ đầu tư và đối tác trong các dịch vụ tư vấn xây dựng,
              giám sát, quản lý dự án và thí nghiệm kiểm tra chất lượng công trình.
            </p>

            <div className="w-fit rounded-lg border border-white/25 bg-black/15 p-4 text-sm font-bold text-amber-300 shadow-inner">
              XÂY VỮNG NIỀM TIN - DỰNG UY TÍN VÀNG
            </div>
          </div>

          <div className="flex flex-col space-y-3.5 md:col-span-4">
            <h4 className="text-base font-bold uppercase tracking-widest">Thông tin pháp lý</h4>
            <div className="space-y-3 text-base font-normal">
              <p className="flex justify-between gap-4 border-b border-white/15 pb-2">
                <span className="">Tên doanh nghiệp:</span>
                <span className="text-right font-semibold text-white">CTCP TVXD TM Phúc Mỹ Sơn</span>
              </p>
              <p className="flex justify-between gap-4 border-b border-white/15 pb-2">
                <span className="">Mã số thuế:</span>
                <span className="font-semibold text-white">0303282829</span>
              </p>
              <p className="flex justify-between gap-4 border-b border-white/15 pb-2">
                <span className="">Năm thành lập:</span>
                <span className="text-right font-semibold text-white">2004</span>
              </p>
              <p className="flex justify-between gap-4 border-b border-white/15 pb-2">
                <span className="">Lĩnh vực chính:</span>
                <span className="text-right font-semibold text-white">Tư vấn xây dựng &amp; thí nghiệm</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="">Mã phòng thí nghiệm:</span>
                <span className="text-right font-semibold text-white">LAS-XD HCM.017</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3.5 md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest">Địa chỉ tác nghiệp</h4>
            <div className="space-y-5 text-base font-normal leading-7">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-amber-300">Trụ sở chính:</span>
                <p className="mt-1 ">28 đường số 16, Khu phố 5, P. Hiệp Bình, TP.HCM</p>
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-amber-300">Phòng thí nghiệm:</span>
                <p className="mt-1">5D/5, Khu phố Đồng An 1, Phường Bình Hòa, TP.HCM</p>
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-amber-300">Liên hệ:</span>
                <p className="mt-1 ">
                  (028) 35 114 394
                  <br />
                  lasxdhcm017.pms@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
