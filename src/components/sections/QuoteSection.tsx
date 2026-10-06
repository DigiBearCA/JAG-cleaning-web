import { PhoneIcon } from "@/components/icons";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/config/site";
import { QUOTE_COPY } from "@/content/home";
import { telHref, whatsappHref } from "@/lib/contact-links";
import type { ServiceValue } from "@/lib/quote-validation";

export interface QuoteSectionProps {
  readonly defaultService?: ServiceValue;
}

/**
 * Quote section (id "quote"): always the base background with a hairline top border, never alt.
 * Left: heading, phone link, and WhatsApp button. Right: the form card.
 */
export function QuoteSection({ defaultService }: QuoteSectionProps) {
  return (
    <Section
      id="quote"
      bordered
      labelledBy="quote-title"
      containerClassName="grid items-start gap-10 lg:grid-cols-[35fr_65fr] lg:gap-12"
    >
      <div className="flex flex-col gap-4">
        <SectionHeading
          id="quote-title"
          title={QUOTE_COPY.title}
          lead={QUOTE_COPY.lead}
        />
        <p className="max-w-prose type-body text-ink-muted">
          {QUOTE_COPY.reassurance}
        </p>
        <div className="flex flex-col items-start gap-4">
          <a
            href={telHref()}
            className="inline-flex min-h-11 items-center gap-3 type-h4 text-primary underline-offset-4 transition duration-150 ease-brand hover:underline"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-11 items-center justify-center rounded-pill bg-primary text-on-primary"
            >
              <PhoneIcon size={20} />
            </span>
            <span>
              <span className="sr-only">{QUOTE_COPY.callLabel} </span>
              {SITE.phone.display}
            </span>
          </a>
          <Button href={whatsappHref()} variant="outline" icon="whatsapp">
            {QUOTE_COPY.whatsappLabel}
          </Button>
        </div>
      </div>
      <QuoteForm defaultService={defaultService} labelledBy="quote-title" />
    </Section>
  );
}
