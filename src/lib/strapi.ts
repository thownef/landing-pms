export type StrapiMedia = {
  url: string | null;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  mime?: string | null;
  size?: number | null;
};

export function getStrapiApiBaseUrl() {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";
}

export function getStrapiOrigin() {
  return getStrapiApiBaseUrl().replace(/\/api\/?$/, "");
}

export function getStrapiMediaUrl(media: StrapiMedia | null) {
  if (!media?.url) return "";
  if (media.url.startsWith("http://") || media.url.startsWith("https://")) return media.url;
  return `${getStrapiOrigin()}${media.url}`;
}
