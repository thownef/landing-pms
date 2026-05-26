import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
