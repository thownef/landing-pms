import { getStrapiMediaUrl, type StrapiMedia } from "@/lib/strapi";
import type { DetailApiData, DetailApiDocument } from "@/types/service-api.type";
import type { ServiceDetailContent } from "@/types/service-detail.type";

function mapDetailImage(media: StrapiMedia | null) {
  const url = getStrapiMediaUrl(media);
  if (!url) return null;

  return {
    url,
    alternativeText: media?.alternativeText ?? null,
    width: media?.width ?? null,
    height: media?.height ?? null,
  };
}

function getDocumentType(doc: DetailApiDocument): "PDF" | "XLSX" {
  const value = doc.type || doc.file?.mime || doc.file?.url || "";
  return value.toLowerCase().includes("xlsx") ? "XLSX" : "PDF";
}

function getDocumentSize(doc: DetailApiDocument) {
  if (typeof doc.file?.size !== "number") return "";
  if (doc.file.size >= 1024) return `${(doc.file.size / 1024).toFixed(1)} MB`;
  return `${doc.file.size.toFixed(1)} KB`;
}

export function mapServiceDetailData(data: DetailApiData): ServiceDetailContent {
  return {
    linhVuc: data.linhVuc ?? "",
    tieuDe: data.tieuDe ?? "",
    moTa1: data.moTa1 ?? [],
    moTa2: data.moTa2 ?? [],
    tieuDe2: data.tieuDe2 ?? "",
    tieuDe3: data.tieuDe3 ?? "",
    anh1: mapDetailImage(data.anh1),
    anh2: mapDetailImage(data.anh2),
    anh3: mapDetailImage(data.anh3),
    document:
      data.document?.map((doc) => {
        const fileUrl = getStrapiMediaUrl(doc.file);

        return {
          name: doc.name ?? doc.file?.alternativeText ?? "",
          size: getDocumentSize(doc),
          type: getDocumentType(doc),
          url: doc.url ?? (fileUrl || undefined),
        };
      }) ?? [],
    projects:
      data.projects?.map((project) => ({
        name: project.name ?? "",
        location: project.location ?? "",
        work: project.work ?? "",
        role: project.role ?? "",
        color: project.color ?? null,
      })) ?? [],
  };
}
