import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { IntroProvider } from "@/components/motion/IntroProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { WelcomeIntro } from "@/components/motion/WelcomeIntro";
import { SITE } from "@/config/site";
import { HOME_META } from "@/content/home";
import { THEME_COLOR, TITLE_TEMPLATE } from "@/lib/metadata";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
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
  robots: SITE.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
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

/**
 * Inline script that runs before first paint.
 * If the visitor has already seen the intro this session, or is not on the home page,
 * or prefers reduced motion, it sets data-intro="skip" on <html> so the intro overlay
 * is hidden by CSS before any content paints. No cookies, no tracking.
 */
const INTRO_SKIP_SCRIPT = `(function(){var d=document.documentElement;try{var s=sessionStorage.getItem("intro-seen");var h=location.pathname==="/"&&!location.hash;var r=matchMedia("(prefers-reduced-motion: reduce)").matches;if(s||!h||r)d.setAttribute("data-intro","skip")}catch(e){d.setAttribute("data-intro","skip")}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      data-palette={SITE.palette}
      className={`${newsreader.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SKIP_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] antialiased md:pb-0">
        <MotionProvider>
          <IntroProvider>
            <WelcomeIntro />
            <SkipLink />
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <StickyContactBar />
            {/* No-JS fallback: remove intro overlay and show all reveal elements immediately. */}
            <noscript>
              <style>
                {
                  "#intro{display:none}[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}"
                }
              </style>
            </noscript>
          </IntroProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

