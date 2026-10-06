import { Icon } from "@/components/icons";
import { Card, FeatureIcon } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_JAAG } from "@/content/home";

/** Alt section with a 2x2 grid of white cards. */
export function WhyJag() {
  return (
    <Section tone="alt" id="why-jag" labelledBy="why-jag-title">
      <div className="grid grid-cols-1 md:grid-cols-[70fr_30fr] gap-4 md:gap-6 items-center">
        <ul className="order-last md:order-first grid gap-4 sm:grid-cols-2">
          {WHY_JAAG.cards.map((card) => (
            <Card as="li" key={card.title} className="flex flex-col items-center text-center gap-4">
              <div className="flex flex-row items-center justify-center gap-3">
                <FeatureIcon surface="light">
                  <Icon name={card.icon} />
                </FeatureIcon>
                <h3 className="type-h3 text-primary">{card.title}</h3>
              </div>
              <p className="type-body text-ink">{card.text}</p>
            </Card>
          ))}
        </ul>

        <div className="order-first lg:order-last">
          <SectionHeading
            id="why-jag-title"
            title={WHY_JAAG.title}
            lead={WHY_JAAG.lead}
            align="left"
            tone="alt"
            className="items-center text-center lg:items-start lg:text-left"
          />
        </div>
      </div>
    </Section>
  );
}
