import { getStrapiApiBaseUrl } from "@/lib/strapi";
import type { HomeApiData, HomeContent } from "@/types/home.type";

function mapHomeData(data: HomeApiData): HomeContent {
  return {
    gioiThieu: data.gioiThieu ?? "",
    slogan: data.slogan ?? [],
    noiDung: data.noiDung ?? [],
    button: data.button ?? "",
    tenCongTy: data.tenCongTy ?? "",
    moTaCongTy: data.moTaCongTy ?? "",
    phuongCham: data.phuongCham ?? "",
    tieuDe1: data.tieuDe1 ?? "",
    tieuDePhu1: data.tieuDePhu1 ?? "",
    noiDung1: data.noiDung1 ?? "",
    tieuDe2: data.tieuDe2 ?? "",
    tieuDePhu2: data.tieuDePhu2 ?? "",
    noiDung2: data.noiDung2 ?? "",
    tieuDe3: data.tieuDe3 ?? "",
    tieuDePhu3: data.tieuDePhu3 ?? "",
    stat:
      data.stat?.map((item) => ({
        title: item.title ?? "",
        subTitle: item.subTitle ?? "",
        moTa: item.moTa ?? "",
        icon: item.icon ?? null,
      })) ?? [],
    hangMuc:
      data.hangMuc?.map((item) => ({
        ten: item.ten ?? "",
        moTa: item.moTa ?? "",
        donVi: item.donVi ?? "",
      })) ?? [],
    trietLy:
      data.trietLy?.map((item) => ({
        name: item.name ?? "",
        noiDung: item.noiDung ?? "",
        note: item.note ?? "",
        icon: item.icon ?? null,
      })) ?? [],
    procedure:
      data.procedure?.map((item) => ({
        stt: item.stt ?? "",
        name: item.name ?? "",
        noiDung: item.noiDung ?? "",
      })) ?? [],
    camKet:
      data.camKet?.map((item) => ({
        name: item.name ?? "",
        noiDung: item.noiDung ?? "",
        note: item.note ?? "",
        icon: item.icon ?? null,
      })) ?? [],
  };
}

export async function fetchHomeData(locale: string): Promise<HomeContent | null> {
  const baseUrl = getStrapiApiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/home?locale=${locale}&populate=*`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`[Home] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as HomeApiData;

    return mapHomeData(data);
  } catch (err) {
    console.error("[Home] Fetch failed:", err);
    return null;
  }
}
