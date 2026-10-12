import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { AUDIENCE_ART } from "@/components/illustrations/audience/AudienceArt";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CARD_GRID_CLASS,
  getCardGridSpans,
} from "@/components/sections/services/spans";
import { cx } from "@/lib/cx";
import { AUDIENCES, WHO_WE_SERVE } from "@/content/home";
import {
  AudienceCardTilt,
  AudienceCardIcon,
  AudienceCardTitle,
} from "./AudienceCardTilt";

export function WhoWeServe() {
  const enabledAudiences = AUDIENCES.filter((a) => a.enabled);

  return (
    <Section tone="alt" id="who-we-work-with" labelledBy="who-we-work-with-title">
      <Reveal>
        <SectionHeading
          id="who-we-work-with-title"
          title={WHO_WE_SERVE.title}
          lead={WHO_WE_SERVE.lead}
          align="center"
          tone="alt"
        />
      </Reveal>
      <RevealGroup
        as="ul"
        className={cx("mx-auto mt-4 md:mt-6 gap-4", CARD_GRID_CLASS)}
      >
        {enabledAudiences.map((card, index) => {
          const Art = AUDIENCE_ART[card.art];
          const spanClasses = getCardGridSpans(enabledAudiences.length, index);

          return (
            <RevealItem
              as="li"
              key={card.id}
              className={cx("flex", spanClasses)}
            >
              <AudienceCardTilt className="w-full">
                <div className="flex items-start justify-between">
                  <AudienceCardIcon className="shrink-0 h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 mb-4 pointer-events-none">
                    <Art className="h-full w-full" />
                  </AudienceCardIcon>
                  <Chip>{card.category}</Chip>
                </div>

                <div className="flex flex-col gap-2">
                  <AudienceCardTitle className="type-h4 text-primary pointer-events-none">
                    {card.title}
                  </AudienceCardTitle>
                  <p className="type-small text-ink">{card.description}</p>
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-2">
                  <p className="type-caption font-medium text-ink-muted uppercase tracking-wider">
                    {WHO_WE_SERVE.popularForLabel}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {card.popularFor.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center rounded bg-alt px-2 py-1 type-caption font-medium text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={card.href}
                  className="mt-1 inline-flex min-h-10 items-center gap-2 self-start type-button text-primary underline-offset-4 transition duration-150 ease-brand group-hover:underline after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary focus-visible:after:outline-solid"
                >
                  {card.linkLabel}
                  <span className="sr-only"> {card.title}</span>
                  <ArrowRightIcon size={18} />
                </Link>
              </AudienceCardTilt>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <Reveal className="mt-6 text-center">
        <p className="type-body text-ink">
          Don&apos;t see your situation? Tell us what you need and we&apos;ll let you know if we can help.
        </p>
        <div className="mt-4">
          <Link
            href="#quote"
            className="inline-flex h-8 items-center justify-center rounded-pill bg-accent px-4 type-small font-medium text-on-accent transition hover:bg-accent-hover"
          >
            Get a free quote
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
