import { ClockIcon, Icon } from "@/components/icons";
import { Card, FeatureIcon } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ChipGroup, FeatureCard } from "@/content/types";
import { cx } from "@/lib/cx";

export interface CardGridSectionProps {
  readonly id?: string;
  readonly eyebrow?: string;
  readonly title: string;
  readonly lead?: string;
  readonly cards: ReadonlyArray<FeatureCard>;
  /** A row of chips under the cards, for example add-ons. */
  readonly extras?: ChipGroup;
  /** A short note under the cards, for example scheduling. */
  readonly note?: string;
  /** Number of columns from 1024px. */
  readonly columns?: 3 | 4;
}

/** Grid of white feature cards on the base background, with optional chips and note. */
export function CardGridSection({
  id = "types",
  eyebrow,
  title,
  lead,
  cards,
  extras,
  note,
  columns = 3,
}: CardGridSectionProps) {
  const headingId = `${id}-title`;
  return (
    <Section id={id} labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />
      <ul
        className={cx(
          "mt-10 grid gap-4 md:grid-cols-2",
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        )}
      >
        {cards.map((card) => (
          <Card key={card.title} as="li" className="flex flex-col gap-4">
            <FeatureIcon>
              <Icon name={card.icon} />
            </FeatureIcon>
            <h3 className="type-h3 text-primary">{card.title}</h3>
            <p className="type-body text-ink">{card.text}</p>
          </Card>
        ))}
      </ul>

      {extras ? (
        <div className="mt-10 flex flex-col gap-4">
          <h3 className="type-h4 text-primary">{extras.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {extras.chips.map((chip) => (
              <li key={chip}>
                <Chip icon="plus">{chip}</Chip>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {note ? (
        <p className="mt-10 flex max-w-prose items-start gap-3 type-body text-ink">
          <ClockIcon size={24} className="shrink-0 text-primary" />
          {note}
        </p>
      ) : null}
    </Section>
  );
}
