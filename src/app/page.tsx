import { cookies } from "next/headers";
import { Home } from "@/atomic-component/Home";
import { fetchHomeData } from "@/lib/home";

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("pms_lang")?.value;
  const locale = lang === "en" ? "en" : "vi";
  const content = await fetchHomeData(locale);

  return <Home content={content} />;
}
