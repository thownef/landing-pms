import { cookies } from "next/headers";
import { Service } from "@/atomic-component/Service";
import type { Tab, TabNavItem } from "@/components/services/TabNav";

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

async function fetchServiceData(locale: string): Promise<{
  pageTitle: string;
  metas: TabNavItem[];
  tabs: TabNavItem[];
}> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

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

export default async function ServicePage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";

  const { pageTitle, metas, tabs } = await fetchServiceData(locale);

  return <Service pageTitle={pageTitle} metas={metas} tabs={tabs} />;
}
