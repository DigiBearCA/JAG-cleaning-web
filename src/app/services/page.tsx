import type { Metadata } from "next";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { getEnabledServices, getServiceNumber, type ChapterId } from "@/content/services";
import { Hero } from "@/components/sections/services/Hero";
import { ChapterBand } from "@/components/sections/services/ChapterBand";
import { JobCard } from "@/components/sections/services/JobCard";
import { EveryJobStrip } from "@/components/sections/services/EveryJobStrip";
import { Section } from "@/components/ui/Section";

import {
  ResidentialCleaningScene,
  OfficeCleaningScene,
  CarpetCleaningScene,
  FloorCleaningScene,
  MaintenanceFloorCleaningScene,
  CleanupScene,
  LandscapingScene,
  RenovationScene,
  DemolitionScene,
  SnowRemovalScene,
} from "@/components/illustrations/services";

export const metadata: Metadata = {
  title: "Services | JAG Cleaning & Snow Removal",
  description: "Residential and commercial cleaning, plus snow removal in Edmonton, AB. See our full list of services.",
};

const SCENES: Record<string, React.ReactNode> = {
  "residential-cleaning": <ResidentialCleaningScene />,
  "office-cleaning": <OfficeCleaningScene />,
  "carpet-cleaning": <CarpetCleaningScene />,
  "floor-cleaning": <FloorCleaningScene />,
  "maintenance-floor-cleaning": <MaintenanceFloorCleaningScene />,
  "cleanup": <CleanupScene />,
  "landscaping": <LandscapingScene />,
  "renovation": <RenovationScene />,
  "demolition": <DemolitionScene />,
  "snow-removal": <SnowRemovalScene />,
};

export default function ServicesPage() {
  const services = getEnabledServices();
  
  // Group services by chapter
  const grouped = services.reduce((acc, service) => {
    if (!acc[service.chapter]) {
      acc[service.chapter] = [];
    }
    acc[service.chapter].push(service);
    return acc;
  }, {} as Record<ChapterId, typeof services[number][]>);

  const orderedChapters: ChapterId[] = ["cleaning", "site", "build"];

  return (
    <main id="main">
      <Hero />
      
      {orderedChapters.map((chapterId) => {
        const chapterServices = grouped[chapterId];
        if (!chapterServices || chapterServices.length === 0) return null;
        
        const firstService = chapterServices[0];
        const lastService = chapterServices[chapterServices.length - 1];
        if (!firstService || !lastService) return null;

        const range = `${getServiceNumber(firstService)} to ${getServiceNumber(lastService)}`;
        
        return (
          <div key={chapterId}>
            <ChapterBand id={chapterId} range={range} />
            <Section tone="base" className="py-16 md:py-24">
                {chapterServices.map((service, idx) => (
                  <JobCard
                    key={service.slug}
                    service={service}
                    number={getServiceNumber(service)}
                    illustration={SCENES[service.slug] || <div className="w-full h-full bg-alt-outline/10" />}
                    isEven={idx % 2 !== 0}
                  />
                ))}
            </Section>
          </div>
        );
      })}

      <EveryJobStrip />
      <QuoteSection />
    </main>
  );
}

