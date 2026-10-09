import type { Metadata } from "next";
import { QuoteSection } from "@/components/sections/QuoteSection";
import {
  getEnabledServices,
  getServiceNumber,
  type ChapterId,
} from "@/content/services";
import { Hero } from "@/components/sections/services/Hero";
import { ChapterBand } from "@/components/sections/services/ChapterBand";
import { JobCard } from "@/components/sections/services/JobCard";
// import { EveryJobStrip } from "@/components/sections/services/EveryJobStrip";
import { Section } from "@/components/ui/Section";

import Image from "next/image";

import residentialImg from "@/images/residential-cleanings.webp";
import officeImg from "@/images/office-cleaning.webp";
import carpetImg from "@/images/carpet-cleaning.webp";
import floorImg from "@/images/floor-cleaning.webp";
import maintenanceImg from "@/images/maintenance-floor-cleaning.webp";
import cleanupImg from "@/images/cleanup.webp";
import landscapingImg from "@/images/landscaping.webp";
import renovationImg from "@/images/renovation.webp";
import demolitionImg from "@/images/demolition.webp";
import snowImg from "@/images/snow-removal.webp";

export const metadata: Metadata = {
  title: "Services | JAAG",
  description:
    "Residential and commercial cleaning, plus snow removal in Edmonton, AB. See our full list of services.",
};

const SCENES: Record<string, React.ReactNode> = {
  "residential-cleaning": <Image src={residentialImg} alt="Residential Cleaning" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  "office-cleaning": <Image src={officeImg} alt="Office Cleaning" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  "carpet-cleaning": <Image src={carpetImg} alt="Carpet Cleaning" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  "floor-cleaning": <Image src={floorImg} alt="Floor Cleaning" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  "maintenance-floor-cleaning": <Image src={maintenanceImg} alt="Maintenance Floor Cleaning" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  cleanup: <Image src={cleanupImg} alt="Cleanup" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  landscaping: <Image src={landscapingImg} alt="Landscaping" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  renovation: <Image src={renovationImg} alt="Renovation" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  demolition: <Image src={demolitionImg} alt="Demolition" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
  "snow-removal": <Image src={snowImg} alt="Snow Removal" fill placeholder="blur" quality={85} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />,
};

export default function ServicesPage() {
  const services = getEnabledServices();

  const orderedChapters: ChapterId[] = ["cleaning", "site", "build"];

  return (
    <main id="main" className="overflow-x-hidden">
      <Hero />

      {orderedChapters.map((chapterId) => {
        const chapterServices = services.filter((s) => s.chapter === chapterId);
        if (chapterServices.length === 0) return null;


        const firstService = chapterServices[0];
        const lastService = chapterServices[chapterServices.length - 1];
        if (!firstService || !lastService) return null;

        const range =
          firstService === lastService
            ? getServiceNumber(firstService)
            : `${getServiceNumber(firstService)} to ${getServiceNumber(lastService)}`;

        return (
          <div key={chapterId}>
            <ChapterBand id={chapterId} range={range} />
            <Section tone="base" className="py-4!">
              {chapterServices.map((service, idx) => (
                <JobCard
                  key={service.slug}
                  service={service}
                  number={getServiceNumber(service)}
                  illustration={
                    SCENES[service.slug] || (
                      <div className="w-full h-full bg-alt-outline/10" />
                    )
                  }
                  isEven={idx % 2 !== 0}
                />
              ))}
            </Section>
          </div>
        );
      })}

      {/* <EveryJobStrip /> */}
      <QuoteSection />
    </main>
  );
}
