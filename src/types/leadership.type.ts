import type { StrapiMedia } from "@/lib/strapi";

// ---------------------------------------------------------------------------
// Raw API shapes
// ---------------------------------------------------------------------------

export type LeadershipRichTextChild = {
  text: string | null;
  type: string | null;
  bold?: boolean | null;
  italic?: boolean | null;
};

export type LeadershipRichTextBlock = {
  type: string | null;
  children: LeadershipRichTextChild[] | null;
};

export type LeadershipApiCamKet = {
  id: number;
  name: string | null;
  noiDung: string | null;
};

export type LeadershipApiData = {
  tieuDeBanner1: string | null;
  tieuDeBanner2: string | null;
  moTaBanner: string | null;
  ghiChu: string | null;
  tieuDe: LeadershipRichTextBlock[] | null;
  noiDung1: LeadershipRichTextBlock[] | null;
  noiDung2: LeadershipRichTextBlock[] | null;
  /** Raw HTML string from CKEditor */
  noiDung3: string | null;
  tieuDeCamKet: string | null;
  tieuDeHotline: string | null;
  moTaHotline: string | null;
  hotline: string | null;
  email: string | null;
  anh: StrapiMedia | null;
  camKet: LeadershipApiCamKet[] | null;
};

// ---------------------------------------------------------------------------
// Mapped / clean shapes
// ---------------------------------------------------------------------------

export type LeadershipCamKet = {
  name: string;
  noiDung: string;
};

export type LeadershipContent = {
  tieuDeBanner1: string;
  tieuDeBanner2: string;
  moTaBanner: string;
  ghiChu: string;
  tieuDe: LeadershipRichTextBlock[];
  noiDung1: LeadershipRichTextBlock[];
  noiDung2: LeadershipRichTextBlock[];
  /** Sanitized HTML — inline styles stripped */
  noiDung3: string;
  tieuDeCamKet: string;
  tieuDeHotline: string;
  moTaHotline: string;
  hotline: string;
  email: string;
  anh: StrapiMedia | null;
  camKet: LeadershipCamKet[];
};
