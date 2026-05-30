import type { StrapiMedia } from "@/lib/strapi";
import type { RichTextBlock } from "@/types/service-detail.type";

export type DetailApiDocument = {
  name: string | null;
  type: string | null;
  url: string | null;
  file: StrapiMedia | null;
};

export type DetailApiProject = {
  name: string | null;
  location: string | null;
  work: string | null;
  role: string | null;
  color: string | null;
};

export type DetailApiData = {
  linhVuc: string | null;
  tieuDe: string | null;
  moTa1: RichTextBlock[] | null;
  moTa2: RichTextBlock[] | null;
  tieuDe2: string | null;
  tieuDe3: string | null;
  anh1: StrapiMedia | null;
  anh2: StrapiMedia | null;
  anh3: StrapiMedia | null;
  document: DetailApiDocument[] | null;
  projects: DetailApiProject[] | null;
};
