import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ChapterGrid } from "@/components/sections/services/ChapterGrid";
// import { EveryJobStrip } from "@/components/sections/services/EveryJobStrip";
import { Hero } from "@/components/sections/services/Hero";
import type { ChapterId } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";
import { pageGraph } from "@/lib/structured-data";

const TITLE = "Commercial Cleaning & Contracting Services in Edmonton, AB";
const DESCRIPTION =
  "Office and building cleaning, floor and carpet care, apartment cleaning, cleanup, landscaping, snow removal, renovation, demolition in Edmonton. Free quotes.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/services",
  absoluteTitle: true,
});

const ORDERED_CHAPTERS: readonly ChapterId[] = ["cleaning", "site", "build"];

export default function ServicesPage() {
  return (
    <main id="main" className="overflow-x-hidden">
      <JsonLd
        data={pageGraph({ path: "/services", name: TITLE, description: DESCRIPTION })}
      />
      <Hero />

      {ORDERED_CHAPTERS.map((chapterId) => (
        <ChapterGrid key={chapterId} chapterId={chapterId} />
      ))}

      {/* <EveryJobStrip /> */}
      <QuoteSection />
    </main>
  );
}
