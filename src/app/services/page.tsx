import { cookies } from "next/headers";
import { Service } from "@/atomic-component/Service";
import type { Tab, TabNavItem } from "@/components/services/TabNav";
import { mapServiceDetailData } from "@/lib/service-detail-mapper";
import { getStrapiApiBaseUrl } from "@/lib/strapi";
import type { DetailApiData } from "@/types/service-api.type";
import type { ServiceDetailContent } from "@/types/service-detail.type";

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
  const baseUrl = getStrapiApiBaseUrl();

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

const DETAIL_POPULATE_QUERY =
  "populate[anh1]=true&populate[anh2]=true&populate[anh3]=true&populate[document][populate][0]=file&populate[projects]=true";

async function fetchDetailData(endpoint: "testing" | "monitor", locale: string): Promise<ServiceDetailContent | null> {
  const baseUrl = getStrapiApiBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/${endpoint}?locale=${locale}&${DETAIL_POPULATE_QUERY}`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      console.error(`[ServicePage] ${endpoint} API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const payload = await response.json();
    const data = (payload.data ?? payload) as DetailApiData;

    return mapServiceDetailData(data);
  } catch (err) {
    console.error(`[ServicePage] ${endpoint} fetch failed:`, err);
    return null;
  }
}

export default async function ServicePage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";

  const [{ pageTitle, metas, tabs }, testing, monitor] = await Promise.all([
    fetchServiceData(locale),
    fetchDetailData("testing", locale),
    fetchDetailData("monitor", locale),
  ]);

  return <Service pageTitle={pageTitle} metas={metas} tabs={tabs} testing={testing} monitor={monitor} />;
}
