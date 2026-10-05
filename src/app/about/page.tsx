import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Card, FeatureIcon } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_HERO, ABOUT_META, OUR_STORY, VALUES, WHAT_WE_DO } from "@/content/about";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: ABOUT_META.title,
  description: ABOUT_META.description,
  path: "/about",
});

/** Backgrounds: hero bg, story bg, values alt, what we do bg, quote bg. */
export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={ABOUT_HERO.eyebrow} title={ABOUT_HERO.title} lead={ABOUT_HERO.lead} />

      <Section id="our-story" labelledBy="our-story-title" className="pt-0 md:pt-0">
        <div className="flex max-w-prose flex-col gap-4">
          <SectionHeading id="our-story-title" title={OUR_STORY.title} />
          {OUR_STORY.paragraphs.map((paragraph) => (
            <p key={paragraph} className="type-body text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="values" labelledBy="values-title">
        <SectionHeading id="values-title" title={VALUES.title} align="center" tone="alt" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.cards.map((card) => (
            <Card key={card.title} as="li" className="flex flex-col gap-4">
              <FeatureIcon>
                <Icon name={card.icon} />
              </FeatureIcon>
              <h3 className="type-h3 text-primary">{card.title}</h3>
              <p className="type-body text-ink">{card.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <WhoWeServe tone="base" id="what-we-do" title={WHAT_WE_DO.title} lead={WHAT_WE_DO.lead} />

      <QuoteSection />
    </>
  );
}
