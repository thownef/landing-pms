import { getStrapiApiBaseUrl } from "@/lib/strapi";
import type { LeadershipApiData, LeadershipContent } from "@/types/leadership.type";

/**
 * Sanitize CKEditor HTML:
 * - Strip all `class` attributes (editor-injected Tailwind/utility classes)
 * - Strip `style` attributes but preserve `color` and `background-color` values
 * - Remove other noisy editor artifacts (&nbsp;, excessive whitespace)
 */
function sanitizeHtml(html: string): string {
  return html
    // Strip all class attributes
    .replace(/\s+class="[^"]*"/gi, "")
    // For style attributes: extract only color / background-color, discard the rest
    .replace(/\s+style="([^"]*)"/gi, (_match, styleValue: string) => {
      const allowed: string[] = [];

      const colorMatch = styleValue.match(/(?<![a-z-])color\s*:\s*([^;]+)/i);
      if (colorMatch) allowed.push(`color:${colorMatch[1].trim()}`);

      const bgMatch = styleValue.match(/background-color\s*:\s*([^;]+)/i);
      if (bgMatch) allowed.push(`background-color:${bgMatch[1].trim()}`);

      return allowed.length > 0 ? ` style="${allowed.join(";")}"` : "";
    })
    .replace(/&nbsp;/g, " ")
    .trim();
}

function mapLeadershipData(data: LeadershipApiData): LeadershipContent {
  return {
    tieuDeBanner1: data.tieuDeBanner1 ?? "",
    tieuDeBanner2: data.tieuDeBanner2 ?? "",
    moTaBanner: data.moTaBanner ?? "",
    ghiChu: data.ghiChu ?? "",
    tieuDe: data.tieuDe ?? [],
    noiDung1: data.noiDung1 ?? [],
    noiDung2: data.noiDung2 ?? [],
    noiDung3: sanitizeHtml(data.noiDung3 ?? ""),
    tieuDeCamKet: data.tieuDeCamKet ?? "",
    tieuDeHotline: data.tieuDeHotline ?? "",
    moTaHotline: data.moTaHotline ?? "",
    hotline: data.hotline ?? "",
    email: data.email ?? "",
    anh: data.anh ?? null,
    camKet:
      data.camKet?.map((item) => ({
        name: item.name ?? "",
        noiDung: item.noiDung ?? "",
      })) ?? [],
  };
}

export async function fetchLeadershipData(locale: string): Promise<LeadershipContent | null> {
  const baseUrl = getStrapiApiBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/leadership?locale=${locale}&populate[0]=anh&populate[1]=camKet`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) {
      console.error(`[Leadership] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as LeadershipApiData;

    return mapLeadershipData(data);
  } catch (err) {
    console.error("[Leadership] Fetch failed:", err);
    return null;
  }
}
