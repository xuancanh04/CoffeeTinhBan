import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyContact } from "@/components/site/StickyContact";
import { getSiteUrl, site } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Cà phê rang xay nguyên chất`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: `${site.name} – ${site.tagline}`,
    description: site.shortDescription,
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col font-secondary">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-surface-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-soft"
        >
          Bỏ qua điều hướng, đến nội dung chính
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyContact />
      </body>
    </html>
  );
}
