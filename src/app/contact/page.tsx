import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Section } from "@/components/ui/Section";
import { CONTACT_META, FORM_CARD_COPY, CONTACT_DETAILS } from "@/content/contact";
import { buildPageMetadata } from "@/lib/metadata";
import { mapEmbedUrl, mapOpenUrl } from "@/lib/contact-links";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_META.title,
  description: CONTACT_META.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
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
      
      <div className="w-full relative">
        <iframe
          src={mapEmbedUrl()}
          title={CONTACT_DETAILS.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block aspect-square md:aspect-[21/9] w-full border-t border-line bg-alt"
        />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <a
            href={mapOpenUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-2 type-button text-primary shadow-sm transition duration-150 ease-brand hover:scale-[1.02]"
          >
            {CONTACT_DETAILS.mapLink}
            <ArrowUpRightIcon size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
