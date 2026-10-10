import Image from "next/image";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, type ImageSlot } from "@/config/images";
import { SITE } from "@/config/site";
import { QUOTE_COPY } from "@/content/home";
import { telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";
import type { ServiceValue } from "@/lib/quote-validation";

export interface QuoteSectionProps {
  readonly defaultService?: ServiceValue;
  /**
   * Decorative photo behind the section. Defaults to IMAGES.contactBackground across all pages.
   */
  readonly backgroundImage?: ImageSlot;
}

/**
 * Quote section (id "quote").
 * Image-backed and dark by default, matching the home page quotation section across all pages.
 * Left: heading, lead, reassurance, phone link, WhatsApp button, and check pills.
 * Right: the white form card (reveals 0.15s later).
 */
export function QuoteSection({
  defaultService,
  backgroundImage = IMAGES.contactBackground,
}: QuoteSectionProps) {
  const onImage = backgroundImage !== undefined;
  return (
    <Section
      id="quote"
      bordered={!onImage}
      labelledBy="quote-title"
      className={cx(
        onImage && "relative isolate overflow-hidden",
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
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dark/85" />
        </>
      ) : null}

      {/* Text column: reveals first */}
      <Reveal delay={0}>
        <div className={cx("flex flex-col gap-4", onImage && "surface-dark")}>
          <SectionHeading
            id="quote-title"
            title={QUOTE_COPY.title}
            lead={onImage ? QUOTE_COPY.imageLead : QUOTE_COPY.lead}
            tone={onImage ? "dark" : "base"}
          />
          <p
            className={cx(
              "max-w-prose type-body",
              onImage ? "text-on-dark-muted" : "text-ink-muted",
            )}
          >
            {QUOTE_COPY.reassurance}
          </p>
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
          <ul className="flex flex-wrap gap-2" aria-label="Why customers choose us">
            {QUOTE_COPY.pills.map((pill) => (
              <li
                key={pill}
                className={cx(
                  "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 type-small font-medium",
                  onImage
                    ? "bg-dark-card text-on-dark"
                    : "bg-chip text-chip-fg",
                )}
              >
                <CheckIcon
                  size={16}
                  className={cx("shrink-0", onImage ? "text-accent" : "text-primary")}
                />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Form card: reveals 0.15s later */}
      <Reveal delay={0.15}>
        <QuoteForm defaultService={defaultService} labelledBy="quote-title" />
      </Reveal>
    </Section>
  );
}
