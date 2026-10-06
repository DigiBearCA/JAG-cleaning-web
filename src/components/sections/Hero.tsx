import { WhatsAppIcon } from "@/components/icons";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import {
  IllustrationFrame,
  type IllustrationImage,
} from "@/components/illustrations/IllustrationFrame";
import { HeroCarousel } from "./HeroCarousel";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { HERO } from "@/content/home";
import { QUOTE_ANCHOR } from "@/content/navigation";
import { telHref, whatsappHref } from "@/lib/contact-links";

export interface HeroProps {
  /** Optional real photo. When set it replaces the illustration with no redesign. */
  readonly image?: IllustrationImage;
}

/** Home hero: text left, illustration right on desktop; stacked on mobile. */
export function Hero({ image }: HeroProps) {
  return (
    <Section
      spacing="hero"
      labelledBy="hero-title"
      containerClassName="grid items-center gap-4 md:grid-cols-2 md:gap-6"
    >
      <div className="flex animate-fade-up flex-col items-start gap-4">
        <Chip icon="mapPin">{HERO.eyebrow}</Chip>
        <div className="flex flex-col gap-4">
          <h1 id="hero-title" className="type-h1 text-primary">
            {HERO.title}
          </h1>
          <p className="max-w-prose type-lead text-ink-muted">{HERO.lead}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            <Button href={QUOTE_ANCHOR}>{HERO.primaryCta}</Button>
            <Button href={telHref()} variant="outline" icon="phone">
              {HERO.secondaryCta}
            </Button>
          </div>
          <p className="type-body text-ink-muted">
            {HERO.whatsappPrompt}{" "}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 align-middle font-medium text-primary underline underline-offset-4 transition duration-150 ease-brand hover:text-primary-hover"
            >
              <WhatsAppIcon size={20} />
              {HERO.whatsappLink}
            </a>
          </p>
        </div>
        <ul
          className="flex flex-wrap gap-2"
          aria-label="Why customers choose us"
        >
          {HERO.trustChips.map((chip) => (
            <li key={chip}>
              <Chip icon="check">{chip}</Chip>
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fade-up [animation-delay:60ms]">
        {image ? (
          <IllustrationFrame aspect="hero" image={image} priority>
            <HeroIllustration label={HERO.illustrationLabel} />
          </IllustrationFrame>
        ) : (
          <HeroCarousel />
        )}
      </div>
    </Section>
  );
}
