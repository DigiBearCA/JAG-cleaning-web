import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhyJag } from "@/components/sections/WhyJag";
import { HOME_FAQ } from "@/content/faq";
import { HOME_FAQ_COPY, HOME_META } from "@/content/home";
import { buildPageMetadata } from "@/lib/metadata";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: HOME_META.title,
  description: HOME_META.description,
  path: "/",
  absoluteTitle: true,
});

/** Section order and backgrounds: bg, alt, bg, dark, bg, bg (quote), dark footer. */
export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema(HOME_META.description)} />
      <Hero />
      <WhoWeServe />
      <HowItWorks showPrep />
      <WhyJag />
      <FaqSection title={HOME_FAQ_COPY.title} items={HOME_FAQ} />
      <QuoteSection />
    </>
  );
}
