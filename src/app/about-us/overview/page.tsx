import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Overview } from "@/atomic-component/Overview";
import { fetchAboutData } from "@/lib/about";

export const metadata: Metadata = {
  title: "Tổng quan - Phúc Mỹ Sơn",
  description: "Thông tin tổng quan về Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn.",
};

export default async function OverviewPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";
  const content = await fetchAboutData(locale);

  return <Overview content={content} />;
}
