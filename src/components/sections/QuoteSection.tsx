import Image from "next/image";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ImageSlot } from "@/config/images";
import { SITE } from "@/config/site";
import { QUOTE_COPY } from "@/content/home";
import { telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";
import type { ServiceValue } from "@/lib/quote-validation";

export interface QuoteSectionProps {
  readonly defaultService?: ServiceValue;
  /**
   * Decorative photo behind the section (home page only). When set, the section reads as a
   * dark section: flat `bg-dark/75` overlay, on-dark text, and check pills. When unset the
   * section looks exactly as before.
   */
  readonly backgroundImage?: ImageSlot;
}

/**
 * Quote section (id "quote"). Default: base background with a hairline top border, never alt.
 * With `backgroundImage`: image-backed and dark, so it must follow a base section and sit
 * only next to base sections or the footer (DESIGN.md §2.4).
 * Left: heading, phone link, and WhatsApp button. Right: the white form card.
 */
export function QuoteSection({
  defaultService,
  backgroundImage,
}: QuoteSectionProps) {
  const onImage = backgroundImage !== undefined;
  return (
    <Section
      id="quote"
      bordered={!onImage}
      labelledBy="quote-title"
      // Image variant: the bottom hairline separates this dark band from the dark footer.
      className={cx(
        onImage && "relative isolate overflow-hidden border-b border-on-dark/15",
      )}
      containerClassName="grid items-start gap-10 lg:grid-cols-[35fr_65fr] lg:gap-12"
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage.src}
            alt=""
            aria-hidden
            fill
            placeholder="blur"
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dark/75" />
        </>
      ) : null}
      {/* surface-dark gives the left column accent focus rings; the white form card keeps the default primary ring. */}
      <div className={cx("flex flex-col gap-4", onImage && "surface-dark")}>
        <SectionHeading
          id="quote-title"
          title={QUOTE_COPY.title}
          lead={onImage ? QUOTE_COPY.imageLead : QUOTE_COPY.lead}
          tone={onImage ? "dark" : "base"}
        />
        {onImage ? null : (
          <p className="max-w-prose type-body text-ink-muted">
            {QUOTE_COPY.reassurance}
          </p>
        )}
        <div className="flex flex-col items-start gap-4">
          <a
            href={telHref()}
            className={cx(
              "inline-flex min-h-11 items-center gap-3 type-h4 underline-offset-4 transition duration-150 ease-brand hover:underline",
              onImage ? "text-on-dark" : "text-primary",
            )}
          >
            <span
              aria-hidden="true"
              className={cx(
                "inline-flex size-11 items-center justify-center rounded-pill",
                onImage ? "bg-accent text-on-accent" : "bg-primary text-on-primary",
              )}
            >
              <PhoneIcon size={20} />
            </span>
            <span>
              <span className="sr-only">{QUOTE_COPY.callLabel} </span>
              {SITE.phone.display}
            </span>
          </a>
          <Button
            href={whatsappHref()}
            variant="outline"
            icon="whatsapp"
            tone={onImage ? "onDark" : "onLight"}
          >
            {QUOTE_COPY.whatsappLabel}
          </Button>
        </div>
        {onImage ? (
          <ul className="flex flex-wrap gap-2" aria-label="Why customers choose us">
            {QUOTE_COPY.pills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-pill bg-dark-card px-3 py-1 type-small font-medium text-on-dark"
              >
                <CheckIcon size={16} className="shrink-0 text-accent" />
                {pill}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <QuoteForm defaultService={defaultService} labelledBy="quote-title" />
    </Section>
  );
}
