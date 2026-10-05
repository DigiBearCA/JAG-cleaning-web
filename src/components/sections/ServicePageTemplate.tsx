import { JsonLd } from "@/components/seo/JsonLd";
import { CardGridSection } from "@/components/sections/CardGridSection";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import type { ServicePageContent } from "@/content/types";
import { serviceSchema } from "@/lib/structured-data";

/**
 * Shared service page: hero (bg), what's included (alt), types (bg), how it works (alt),
 * FAQ (bg), quote (bg with hairline). Alt and dark sections never touch.
 */
export function ServicePageTemplate({ content }: { readonly content: ServicePageContent }) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: content.schema.name,
          serviceType: content.schema.serviceType,
          description: content.meta.description,
          path: content.path,
        })}
      />
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        lead={content.hero.lead}
        scene={content.hero.scene}
        sceneLabel={content.hero.sceneLabel}
      />
      <ChecklistSection
        title={content.included.title}
        eyebrow={content.included.eyebrow}
        lead={content.included.lead}
        groups={content.included.groups}
      />
      <CardGridSection
        title={content.types.title}
        eyebrow={content.types.eyebrow}
        lead={content.types.lead}
        cards={content.types.cards}
        extras={content.types.extras}
        note={content.types.note}
      />
      <HowItWorks tone="alt" />
      <FaqSection title={content.faq.title} lead={content.faq.lead} items={content.faq.items} />
      <QuoteSection defaultService={content.quoteService} />
    </>
  );
}
