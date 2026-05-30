import { getStrapiApiBaseUrl, getStrapiMediaUrl } from "@/lib/strapi";
import type { AboutApiData, AboutContent } from "@/types/about.type";

function mapAboutData(data: AboutApiData): AboutContent {
  return {
    tieuDeBanner1: data.tieuDeBanner1 ?? "",
    tieuDeBanner2: data.tieuDeBanner2 ?? "",
    moTaBanner: data.moTaBanner ?? "",
    tieuDeCamKet: data.tieuDeCamKet ?? "",
    noiDungCamKet1: data.noiDungCamKet1 ?? [],
    noiDungCamKet2: data.noiDungCamKet2 ?? [],
    tieuDeSlogan: data.tieuDeSlogan ?? "",
    slogan: data.slogan ?? "",
    tieuDe1: data.tieuDe1 ?? "",
    moTa1: data.moTa1 ?? "",
    button1: data.button1 ?? "",
    button2: data.button2 ?? "",
    moTaCongTy: data.moTaCongTy ?? [],
    tenFile: data.tenFile ?? "",
    url: data.url ?? "",
    tenCongTy: data.tenCongTy ?? "",
    anh1: data.anh1 ?? null,
    anh2: data.anh2 ?? null,
    anh3: data.anh3 ?? null,
    logo: data.logo ?? null,
    profile:
      data.profile?.map((item) => ({
        name: item.name ?? "",
        moTa: item.moTa ?? "",
      })) ?? [],
    fileUrl: getStrapiMediaUrl(data.file),
    fileName: data.tenFile ?? data.file?.url?.split("/").pop() ?? "profile.pdf",
  };
}

export async function fetchAboutData(locale: string): Promise<AboutContent | null> {
  const baseUrl = getStrapiApiBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/about?locale=${locale}&populate[0]=anh1&populate[1]=anh2&populate[2]=anh3&populate[3]=logo&populate[4]=file&populate[5]=profile`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) {
      console.error(`[About] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as AboutApiData;

    return mapAboutData(data);
  } catch (err) {
    console.error("[About] Fetch failed:", err);
    return null;
  }
}
