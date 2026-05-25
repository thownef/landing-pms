import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hucons - Tổng thầu thiết kế và thi công",
  description: "Trang chủ giới thiệu năng lực, dự án và tin tức Hucons.",
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
        <FloatingActions />
      </body>
    </html>
  );
}
