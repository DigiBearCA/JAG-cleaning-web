import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ChapterGrid } from "@/components/sections/services/ChapterGrid";
import { EveryJobStrip } from "@/components/sections/services/EveryJobStrip";
import { Hero } from "@/components/sections/services/Hero";
import type { ChapterId } from "@/content/services";
import { servicesPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cleaning, Snow Removal & Contracting Services",
  description:
    "Residential and commercial cleaning, plus snow removal in Edmonton, AB. See our full list of services.",
};

const ORDERED_CHAPTERS: readonly ChapterId[] = ["cleaning", "site", "build"];

export default function ServicesPage() {
  return (
    <main id="main" className="overflow-x-hidden">
      <JsonLd data={servicesPageSchema()} />
      <Hero />

      {ORDERED_CHAPTERS.map((chapterId) => (
        <ChapterGrid key={chapterId} chapterId={chapterId} />
      ))}

      <EveryJobStrip />
      <QuoteSection />
    </main>
  );
}
