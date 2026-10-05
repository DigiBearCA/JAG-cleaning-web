import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { SITE } from "@/config/site";
import { HOME_META } from "@/content/home";
import { THEME_COLOR, TITLE_TEMPLATE } from "@/lib/metadata";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_META.title,
    template: TITLE_TEMPLATE,
  },
  description: HOME_META.description,
  applicationName: SITE.name,
  robots: SITE.indexable ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE.name,
    title: HOME_META.title,
    description: HOME_META.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_META.title,
    description: HOME_META.description,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: THEME_COLOR,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" data-palette={SITE.palette} className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SkipLink />
        <main id="main" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
