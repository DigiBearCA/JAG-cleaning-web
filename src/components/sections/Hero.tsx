import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/config/images";
import { HERO } from "@/content/home";
import { QUOTE_ANCHOR } from "@/content/navigation";
import { telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";

/** Width of the image column: 55% of the container from 1024px, full width below. */
const HERO_IMAGE_SIZES =
  "(min-width: 1600px) 880px, (min-width: 1024px) 55vw, 100vw";

/**
 * Crossfade order. Image 1 is the static base layer (and the LCP image); images 2 and 3
 * fade in on top of it, 6s apart, on the shared 18s `animate-hero-fade` loop.
 */
const ROTATION_CLASSES = [
  "",
  "animate-hero-fade [animation-delay:6s] motion-reduce:hidden",
  "animate-hero-fade [animation-delay:12s] motion-reduce:hidden",
] as const;

/**
 * Home hero. From 1024px the text column (50%) overlaps the image column (55%) by 5% of
 * the container, and the image's left edge is feathered into the page with a CSS mask.
 * Below 1024px the two stack with no overlap.
 */
export function Hero() {
  return (
    <Section
      spacing="hero"
      labelledBy="hero-title"
      containerClassName="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0"
    >
      <div className="relative z-10 flex animate-fade-up flex-col items-start gap-4 lg:w-1/2 lg:pr-6">
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
        <ul className="flex flex-wrap gap-2" aria-label="Why customers choose us">
          {HERO.trustChips.map((chip) => (
            <li key={chip}>
              <Chip icon="check">{chip}</Chip>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full animate-fade-up [animation-delay:60ms] lg:ml-[-5%] lg:w-[55%]">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-panel bg-illus-sky lg:aspect-5/4 lg:rounded-l-none lg:hero-feather">
          {IMAGES.hero.map((image, index) => {
            const isBase = index === 0;
            return (
              <Image
                key={image.src.src}
                src={image.src}
                alt={isBase ? image.alt : ""}
                aria-hidden={isBase ? undefined : true}
                fill
                preload={isBase}
                placeholder={isBase ? "blur" : "empty"}
                quality={85}
                sizes={HERO_IMAGE_SIZES}
                className={cx("object-cover", ROTATION_CLASSES[index])}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
