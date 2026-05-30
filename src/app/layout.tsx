import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Roboto } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { fetchFooterData } from "@/lib/footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { Language } from "@/lib/translations";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PMS - Tư vấn thiết kế và thí nghiệm",
  description: "Trang chủ giới thiệu năng lực, dự án và tin tức PMS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedLanguage = (await cookies()).get("pms_lang")?.value;
  const initialLanguage: Language = savedLanguage === "en" ? "en" : "vi";
  const footer = await fetchFooterData(initialLanguage);

  return (
    <html lang={initialLanguage} className={`${roboto.variable} h-full antialiased`}>
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <LanguageProvider initialLanguage={initialLanguage}>
          <SiteHeader />
          {children}
          <SiteFooter footer={footer} />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
