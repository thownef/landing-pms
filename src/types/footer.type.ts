import type { StrapiMedia } from "@/lib/strapi";
import type { RichTextBlock } from "@/types/service-detail.type";

export type FooterApiInfo = {
  name: string | null;
  noiDung: string | null;
};

export type FooterApiAddress = {
  name: string | null;
  noiDung: RichTextBlock[] | null;
};

export type FooterApiData = {
  name: string | null;
  noiDung: string | null;
  slogan: string | null;
  tieuDe1: string | null;
  tieuDe2: string | null;
  linhVuc: string | null;
  infomation: FooterApiInfo[] | null;
  address: FooterApiAddress[] | null;
  logo: StrapiMedia | null;
};

export type FooterInfo = {
  name: string;
  noiDung: string;
};

export type FooterAddress = {
  name: string;
  lines: string[];
};

export type FooterLogo = {
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
};

export type FooterContent = {
  name: string;
  noiDung: string;
  slogan: string;
  tieuDe1: string;
  tieuDe2: string;
  linhVuc: string;
  infomation: FooterInfo[];
  address: FooterAddress[];
  logo: FooterLogo | null;
};
