import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/config/images";
import {
  getEnabledServices,
  getServiceNumber,
  type ChapterId,
} from "@/content/services";
import { ChapterBand } from "./ChapterBand";
import { ServiceTicket } from "./ServiceTicket";
import { ServiceTile } from "./ServiceTile";
import { getCardSpans } from "./spans";

export interface ChapterGridProps {
  readonly chapterId: ChapterId;
}

/**
 * Server component rendering one chapter band (alt background) followed by
 * its balanced card grid (base background).
 */
export function ChapterGrid({ chapterId }: ChapterGridProps) {
  const allServices = getEnabledServices();
  const chapterServices = allServices.filter((s) => s.chapter === chapterId);
  if (chapterServices.length === 0) return null;

  const firstService = chapterServices[0];
  const lastService = chapterServices[chapterServices.length - 1];
  if (!firstService || !lastService) return null;

  const range =
    firstService === lastService
      ? getServiceNumber(firstService)
      : `${getServiceNumber(firstService)} to ${getServiceNumber(lastService)}`;

  return (
    <div>
      <ChapterBand id={chapterId} range={range} />
      <Section tone="base" className="py-6! md:py-8!">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {chapterServices.map((service, index) => {
            const number = getServiceNumber(service);
            const imageSlot = IMAGES.services[service.slug];
            const spanClasses = getCardSpans(chapterServices.length, index);

            return (
              <ServiceTile
                key={service.slug}
                service={service}
                number={number}
                imageSlot={imageSlot}
                spanClasses={spanClasses}
              >
                <ServiceTicket service={service} number={number} />
              </ServiceTile>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

