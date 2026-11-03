import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VuloForm — Every form your website needs. One simple builder.",
  description:
    "VuloForm is a free drag-and-drop form builder for WordPress. Conditional logic, multi-step forms, calculations, webhooks and embeds — no account, no subscription, no limits.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      <body className="grain min-h-full">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
