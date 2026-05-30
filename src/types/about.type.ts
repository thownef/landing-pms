import type { StrapiMedia } from "@/lib/strapi";

// ---------------------------------------------------------------------------
// Raw API shapes (nullable — as returned by Strapi)
// ---------------------------------------------------------------------------

export type AboutRichTextChild = {
  text: string | null;
  type: string | null;
  bold?: boolean | null;
  italic?: boolean | null;
  underline?: boolean | null;
};

export type AboutRichTextBlock = {
  type: string | null;
  /** "unordered" | "ordered" — only present when type === "list" */
  format?: string | null;
  children: (AboutRichTextChild | AboutListItemBlock)[] | null;
};

export type AboutListItemBlock = {
  type: "list-item";
  children: AboutRichTextChild[] | null;
};

export type AboutApiProfileItem = {
  id: number;
  name: string | null;
  moTa: string | null;
};

export type AboutApiData = {
  tieuDeBanner1: string | null;
  tieuDeBanner2: string | null;
  moTaBanner: string | null;
  tieuDeCamKet: string | null;
  noiDungCamKet1: AboutRichTextBlock[] | null;
  noiDungCamKet2: AboutRichTextBlock[] | null;
  tieuDeSlogan: string | null;
  slogan: string | null;
  tieuDe1: string | null;
  moTa1: string | null;
  button1: string | null;
  button2: string | null;
  moTaCongTy: AboutRichTextBlock[] | null;
  tenFile: string | null;
  url: string | null;
  tenCongTy: string | null;
  anh1: StrapiMedia | null;
  anh2: StrapiMedia | null;
  anh3: StrapiMedia | null;
  logo: StrapiMedia | null;
  profile: AboutApiProfileItem[] | null;
  file: StrapiMedia | null;
};

// ---------------------------------------------------------------------------
// Mapped / clean shapes (non-nullable — used in components)
// ---------------------------------------------------------------------------

export type AboutProfileItem = {
  name: string;
  moTa: string;
};

export type AboutContent = {
  tieuDeBanner1: string;
  tieuDeBanner2: string;
  moTaBanner: string;
  tieuDeCamKet: string;
  noiDungCamKet1: AboutRichTextBlock[];
  noiDungCamKet2: AboutRichTextBlock[];
  tieuDeSlogan: string;
  slogan: string;
  tieuDe1: string;
  moTa1: string;
  button1: string;
  button2: string;
  moTaCongTy: AboutRichTextBlock[];
  tenFile: string;
  url: string;
  tenCongTy: string;
  anh1: StrapiMedia | null;
  anh2: StrapiMedia | null;
  anh3: StrapiMedia | null;
  logo: StrapiMedia | null;
  profile: AboutProfileItem[];
  /** Full URL to the PDF file */
  fileUrl: string;
  /** Display name for the PDF */
  fileName: string;
};
