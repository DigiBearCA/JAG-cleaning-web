import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/config/images";
import { WHO_WE_SERVE } from "@/content/home";

/** One column (capped at 576px) below 1024px, three columns from 1024px. */
const CARD_IMAGE_SIZES =
  "(min-width: 1600px) 510px, (min-width: 1024px) 33vw, (min-width: 640px) 576px, 100vw";

/**
 * Three image cards. Each card is a single link target: the "Learn more" link is stretched
 * over the card and completed with visually hidden text. On hover the photo zooms 4% and
 * the card lifts 2px.
 */
export function WhoWeServe() {
  return (
    <Section tone="alt" id="who-we-serve" labelledBy="who-we-serve-title">
      <SectionHeading
        id="who-we-serve-title"
        title={WHO_WE_SERVE.title}
        lead={WHO_WE_SERVE.lead}
        align="center"
        tone="alt"
      />
      <ul className="mx-auto mt-10 grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3">
        {WHO_WE_SERVE.cards.map((card, index) => {
          const image = IMAGES.whoWeServe[card.image];
          return (
            <li
              key={card.href}
              className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-white text-ink transition duration-150 ease-brand hover:-translate-y-0.5 hover:border-primary"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  placeholder="blur"
                  sizes={CARD_IMAGE_SIZES}
                  className="object-cover transition-transform duration-300 ease-brand group-hover:scale-104"
                />
                <span aria-hidden="true" className="absolute top-4 left-4">
                  <Chip>{String(index + 1).padStart(2, "0")}</Chip>
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                <h3 className="type-h3 text-primary">{card.title}</h3>
                <p className="type-body text-ink">{card.text}</p>
                <div className="flex flex-col gap-2">
                  <p className="type-small font-medium text-ink-muted">
                    {WHO_WE_SERVE.popularForLabel}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {card.popularFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 type-body text-ink">
                        <CheckIcon size={20} className="shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={card.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 self-start type-button text-primary underline-offset-4 transition duration-150 ease-brand group-hover:underline after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary focus-visible:after:outline-solid"
                >
                  {card.linkLabel}
                  <span className="sr-only"> {card.linkHiddenText}</span>
                  <ArrowRightIcon size={20} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
