import { cookies } from "next/headers";
import { Service } from "@/atomic-component/Service";
import type { Tab, TabNavItem } from "@/components/services/TabNav";
import type { RichTextBlock, TestingContent } from "@/components/services/TabTesting";

type ServiceApiTab = {
  key: string;
  tieuDe: string;
  moTa: string;
};

type ServiceApiData = {
  tieuDe: string;
  metas: ServiceApiTab[];
  tabs: ServiceApiTab[];
};

type StrapiMedia = {
  url: string | null;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  mime?: string | null;
  size?: number | null;
};

type TestingApiDocument = {
  name: string | null;
  type: string | null;
  url: string | null;
  file: StrapiMedia | null;
};

type TestingApiProject = {
  name: string | null;
  location: string | null;
  work: string | null;
  role: string | null;
  color: string | null;
};

type TestingApiData = {
  linhVuc: string | null;
  tieuDe: string | null;
  moTa1: RichTextBlock[] | null;
  moTa2: RichTextBlock[] | null;
  tieuDe2: string | null;
  tieuDe3: string | null;
  anh1: StrapiMedia | null;
  anh2: StrapiMedia | null;
  anh3: StrapiMedia | null;
  document: TestingApiDocument[] | null;
  projects: TestingApiProject[] | null;
};

const TAB_KEYS = new Set<Tab>(["thi_nghiem", "giam_sat", "thiet_ke"]);

function isTab(value: string | undefined): value is Tab {
  return Boolean(value && TAB_KEYS.has(value as Tab));
}

function mapTabs(items: ServiceApiTab[] | undefined): TabNavItem[] {
  return (
    items
      ?.filter((tab): tab is ServiceApiTab & { key: Tab } => isTab(tab.key))
      .map((tab) => ({
        id: tab.key,
        label: tab.tieuDe ?? "",
        sub: tab.moTa ?? "",
      })) ?? []
  );
}

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";
}

function getStrapiOrigin() {
  return getApiBaseUrl().replace(/\/api\/?$/, "");
}

function getMediaUrl(media: StrapiMedia | null) {
  if (!media?.url) return "";
  if (media.url.startsWith("http://") || media.url.startsWith("https://")) return media.url;
  return `${getStrapiOrigin()}${media.url}`;
}

function mapTestingImage(media: StrapiMedia | null) {
  const url = getMediaUrl(media);
  if (!url) return null;

  return {
    url,
    alternativeText: media?.alternativeText ?? null,
    width: media?.width ?? null,
    height: media?.height ?? null,
  };
}

function getDocumentType(doc: TestingApiDocument): "PDF" | "XLSX" {
  const value = doc.type || doc.file?.mime || doc.file?.url || "";
  return value.toLowerCase().includes("xlsx") ? "XLSX" : "PDF";
}

function getDocumentSize(doc: TestingApiDocument) {
  if (typeof doc.file?.size !== "number") return "";
  if (doc.file.size >= 1024) return `${(doc.file.size / 1024).toFixed(1)} MB`;
  return `${doc.file.size.toFixed(1)} KB`;
}

function mapTestingData(data: TestingApiData): TestingContent {
  return {
    linhVuc: data.linhVuc ?? "",
    tieuDe: data.tieuDe ?? "",
    moTa1: data.moTa1 ?? [],
    moTa2: data.moTa2 ?? [],
    tieuDe2: data.tieuDe2 ?? "",
    tieuDe3: data.tieuDe3 ?? "",
    anh1: mapTestingImage(data.anh1),
    anh2: mapTestingImage(data.anh2),
    anh3: mapTestingImage(data.anh3),
    document:
      data.document?.map((doc) => {
        const fileUrl = getMediaUrl(doc.file);

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

async function fetchServiceData(locale: string): Promise<{
  pageTitle: string;
  metas: TabNavItem[];
  tabs: TabNavItem[];
}> {
  const baseUrl = getApiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/service?locale=${locale}&populate=*`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`[ServicePage] API error: ${response.status} ${response.statusText}`);
      return { pageTitle: "", metas: [], tabs: [] };
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as ServiceApiData;

    return {
      pageTitle: data.tieuDe ?? "",
      metas: mapTabs(data.metas),
      tabs: mapTabs(data.tabs),
    };
  } catch (err) {
    console.error("[ServicePage] Fetch failed:", err);
    return { pageTitle: "", metas: [], tabs: [] };
  }
}

async function fetchTestingData(locale: string): Promise<TestingContent | null> {
  const baseUrl = getApiBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/testing?locale=${locale}&populate[anh1]=true&populate[anh2]=true&populate[anh3]=true&populate[document][populate][0]=file&populate[projects]=true`,
      {
      next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      console.error(`[ServicePage] Testing API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as TestingApiData;

    return mapTestingData(data);
  } catch (err) {
    console.error("[ServicePage] Testing fetch failed:", err);
    return null;
  }
}

export default async function ServicePage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";

  const [{ pageTitle, metas, tabs }, testing] = await Promise.all([
    fetchServiceData(locale),
    fetchTestingData(locale),
  ]);

  return <Service pageTitle={pageTitle} metas={metas} tabs={tabs} testing={testing} />;
}
