import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LeadershipMessage } from "@/atomic-component/LeadershipMessage";
import { fetchLeadershipData } from "@/lib/leadership";

export const metadata: Metadata = {
  title: "Thông điệp Ban lãnh đạo - Phúc Mỹ Sơn",
  description:
    "Thông điệp từ Hội đồng Quản trị và Ban Giám đốc Công ty Cổ phần Tư vấn Xây dựng Thương mại Phúc Mỹ Sơn (PMS TCC).",
};

export default async function LeadershipMessagePage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";
  const content = await fetchLeadershipData(locale);

  return <LeadershipMessage content={content} />;
}
