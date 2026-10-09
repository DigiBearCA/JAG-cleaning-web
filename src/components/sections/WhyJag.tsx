import Image from "next/image";
import { ClockIcon, Icon } from "@/components/icons";
import { FeatureIcon } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/config/images";
import { WHY_JAAG } from "@/content/home";

/** The intro column is 2/5 of the container from 1024px, full width below. */
const WHY_IMAGE_SIZES =
  "(min-width: 1600px) 620px, (min-width: 1024px) 40vw, 100vw";

/**
 * Dark section, split layout. Left: heading, paragraph, and a framed photo with two badge
 * pills, sticky on desktop while the right column scrolls. Right: six numbered dark cards.
 */
export function WhyJag() {
  return (
    <Section tone="dark" id="why-jag" labelledBy="why-jag-title">
      <div className="grid gap-4 lg:grid-cols-[2fr_3fr] lg:gap-6">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-jag-title"
            title={WHY_JAAG.title}
            lead={WHY_JAAG.lead}
            align="left"
            tone="dark"
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-panel bg-dark-card">
            <Image
              src={IMAGES.whyJag.src}
              alt={IMAGES.whyJag.alt}
              fill
              placeholder="blur"
              sizes={WHY_IMAGE_SIZES}
              className="object-cover"
            />
            <ul className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <li className="inline-flex items-center gap-1.5 rounded-pill bg-accent px-3 py-1 type-small font-medium text-on-accent">
                <ClockIcon size={16} className="shrink-0" />
                {WHY_JAAG.badges.hours}
              </li>
              <li className="inline-flex items-center rounded-pill bg-white px-3 py-1 type-small font-medium text-primary">
                {WHY_JAAG.badges.quotes}
              </li>
            </ul>
          </div>
        </div>

        <ol className="grid gap-4 md:grid-cols-2">
          {WHY_JAAG.cards.map((card, index) => (
            <li
              key={card.title}
              className="flex flex-col gap-0 rounded-card bg-dark-card p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <FeatureIcon surface="dark">
                  <Icon name={card.icon} size={32} />
                </FeatureIcon>
                <span aria-hidden="true" className="type-h3 text-on-dark-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="type-h3 text-on-dark mb-2">{card.title}</h3>
              <p className="type-body text-on-dark-muted">{card.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
