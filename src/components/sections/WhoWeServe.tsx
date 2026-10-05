import Link from "next/link";
import { ArrowRightIcon, Icon } from "@/components/icons";
import { Card, FeatureIcon } from "@/components/ui/Card";
import { Section, type SectionTone } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHO_WE_SERVE } from "@/content/home";
import type { LinkedFeatureCard } from "@/content/types";

export interface WhoWeServeProps {
  readonly tone?: SectionTone;
  readonly id?: string;
  readonly title?: string;
  readonly lead?: string;
  readonly cards?: ReadonlyArray<LinkedFeatureCard>;
}

/**
 * Three linked service cards. Each card is a single link target: the "Learn more" link is
 * stretched over the card and completed with visually hidden text.
 */
export function WhoWeServe({
  tone = "alt",
  id = "who-we-serve",
  title = WHO_WE_SERVE.title,
  lead = WHO_WE_SERVE.lead,
  cards = WHO_WE_SERVE.cards,
}: WhoWeServeProps) {
  const headingId = `${id}-title`;
  return (
    <Section tone={tone} id={id} labelledBy={headingId}>
      <SectionHeading id={headingId} title={title} lead={lead} align="center" tone={tone} />
      <ul className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.href} as="li" interactive className="flex flex-col gap-4">
            <FeatureIcon>
              <Icon name={card.icon} />
            </FeatureIcon>
            <h3 className="type-h3 text-primary">{card.title}</h3>
            <p className="type-body text-ink">{card.text}</p>
            <Link
              href={card.href}
              className="mt-auto inline-flex min-h-11 items-center gap-2 self-start type-button text-primary after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary focus-visible:after:outline-solid"
            >
              {card.linkLabel}
              <span className="sr-only"> {card.linkHiddenText}</span>
              <ArrowRightIcon size={20} />
            </Link>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
