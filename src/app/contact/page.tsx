import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { CONTACT_HERO, CONTACT_META, FORM_CARD_COPY } from "@/content/contact";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_META.title,
  description: CONTACT_META.description,
  path: "/contact",
});

/** Two columns from 768px: details and map on the left, form on the right. Form first on mobile. */
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={CONTACT_HERO.eyebrow} title={CONTACT_HERO.title} lead={CONTACT_HERO.lead} showActions={false} />
      <Section
        labelledBy="contact-details-title"
        bordered
        containerClassName="grid items-start gap-12 md:grid-cols-2"
      >
        <ContactDetails />
        <div id="quote" className="order-first flex flex-col gap-4 md:order-none">
          <div className="flex flex-col gap-2">
            <h2 id="quote-form-title" className="type-h2 text-primary">
              {FORM_CARD_COPY.title}
            </h2>
            <p className="type-body text-ink-muted">{FORM_CARD_COPY.lead}</p>
          </div>
          <QuoteForm labelledBy="quote-form-title" />
        </div>
      </Section>
    </>
  );
}
