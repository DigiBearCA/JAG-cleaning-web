import { Icon } from "@/components/icons";
import { Card, FeatureIcon } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_JAAG } from "@/content/home";

/** Alt section with a 2x2 grid of white cards. */
export function WhyJag() {
  return (
    <Section tone="alt" id="why-jag" labelledBy="why-jag-title">
      <SectionHeading id="why-jag-title" title={WHY_JAAG.title} align="center" tone="alt" />
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {WHY_JAAG.cards.map((card) => (
          <Card as="li" key={card.title} className="flex flex-col gap-4">
            <FeatureIcon surface="light">
              <Icon name={card.icon} />
            </FeatureIcon>
            <h3 className="type-h3 text-primary">{card.title}</h3>
            <p className="type-body text-ink">{card.text}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
