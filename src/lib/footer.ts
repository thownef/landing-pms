import { getStrapiApiBaseUrl, getStrapiMediaUrl } from "@/lib/strapi";
import type { FooterAddress, FooterApiData, FooterContent } from "@/types/footer.type";
import type { RichTextBlock } from "@/types/service-detail.type";

function getRichTextLines(blocks: RichTextBlock[] | null | undefined) {
  return (
    blocks
      ?.map((block) => block.children?.map((child) => child.text ?? "").join("").trim())
      .filter(Boolean) ?? []
  );
}

function mapAddress(items: FooterApiData["address"]): FooterAddress[] {
  return (
    items?.map((item) => ({
      name: item.name ?? "",
      lines: getRichTextLines(item.noiDung),
    })) ?? []
  );
}

function mapFooterData(data: FooterApiData): FooterContent {
  const logoUrl = getStrapiMediaUrl(data.logo);

  return {
    name: data.name ?? "",
    noiDung: data.noiDung ?? "",
    slogan: data.slogan ?? "",
    tieuDe1: data.tieuDe1 ?? "",
    tieuDe2: data.tieuDe2 ?? "",
    linhVuc: data.linhVuc ?? "",
    infomation:
      data.infomation?.map((item) => ({
        name: item.name ?? "",
        noiDung: item.noiDung ?? "",
      })) ?? [],
    address: mapAddress(data.address),
    logo: logoUrl
      ? {
          url: logoUrl,
          alternativeText: data.logo?.alternativeText ?? null,
          width: data.logo?.width ?? null,
          height: data.logo?.height ?? null,
        }
      : null,
  };
}

export async function fetchFooterData(locale: string): Promise<FooterContent | null> {
  const baseUrl = getStrapiApiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/footer?locale=${locale}&populate=*`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`[Footer] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as FooterApiData;

    return mapFooterData(data);
  } catch (err) {
    console.error("[Footer] Fetch failed:", err);
    return null;
  }
}
