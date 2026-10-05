import { Icon } from "@/components/icons";
import { FeatureIcon } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_JAAG } from "@/content/home";

/** Dark section with a 2x2 grid of dark cards and accent icons. */
export function WhyJag() {
  return (
    <Section tone="dark" id="why-jag" labelledBy="why-jag-title">
      <SectionHeading id="why-jag-title" title={WHY_JAAG.title} align="center" tone="dark" />
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {WHY_JAAG.cards.map((card) => (
          <li key={card.title} className="flex flex-col gap-4 rounded-card bg-dark-card p-6 md:p-8">
            <FeatureIcon surface="dark">
              <Icon name={card.icon} size={32} />
            </FeatureIcon>
            <h3 className="type-h3 text-on-dark">{card.title}</h3>
            <p className="type-body text-on-dark-muted">{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
