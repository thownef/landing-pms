import type { DocItem } from "@/components/services/DocList";

export type RichTextChild = {
  text: string;
  type: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

export type RichTextBlock = {
  type: string;
  children: RichTextChild[];
};

export type ServiceDetailImage = {
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
};

export type ServiceProject = {
  name: string;
  location: string;
  work: string;
  role: string;
  color: string | null;
};

export interface ServiceDetailContent {
  linhVuc: string;
  tieuDe: string;
  moTa1: RichTextBlock[];
  moTa2: RichTextBlock[];
  tieuDe2: string;
  tieuDe3: string;
  anh1: ServiceDetailImage | null;
  anh2: ServiceDetailImage | null;
  anh3: ServiceDetailImage | null;
  document: DocItem[];
  projects: ServiceProject[];
}
