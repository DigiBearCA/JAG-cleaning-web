import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHO_WE_SERVE, AUDIENCES } from "@/content/home";
import { AudienceArt } from "@/components/illustrations/audience/AudienceArt";

export function WhoWeServe() {
  const enabledAudiences = AUDIENCES.filter((a) => a.enabled);

  return (
    <Section tone="alt" id="who-we-serve" labelledBy="who-we-serve-title">
      <SectionHeading
        id="who-we-serve-title"
        title={WHO_WE_SERVE.title}
        lead={WHO_WE_SERVE.lead}
        align="center"
        tone="alt"
      />
      <ul className="mx-auto mt-12 grid max-w-xl gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {enabledAudiences.map((card) => {
          return (
            <li
              key={card.id}
              className="group relative flex flex-col gap-5 rounded-card border border-line bg-white p-5 sm:p-6 transition-all duration-150 ease-brand hover:-translate-y-0.5 hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20">
                  <AudienceArt
                    art={card.art}
                    className="w-full h-full transition-transform duration-300 ease-brand group-hover:-translate-y-1 group-hover:scale-105"
                  />
                </div>
                <Chip>{card.category}</Chip>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="type-h4 text-primary">{card.title}</h3>
                <p className="type-small text-ink">{card.description}</p>
              </div>

              <div className="flex flex-col gap-2 mt-auto pt-2">
                <p className="type-caption font-medium text-ink-muted uppercase tracking-wider">
                  {WHO_WE_SERVE.popularForLabel}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {card.popularFor.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded bg-alt px-2 py-1 type-caption font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={card.href}
                className="mt-1 inline-flex min-h-10 items-center gap-2 self-start type-button text-primary underline-offset-4 transition duration-150 ease-brand group-hover:underline after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary focus-visible:after:outline-solid"
              >
                {card.linkLabel}
                <span className="sr-only"> {card.title}</span>
                <ArrowRightIcon size={18} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 text-center">
        <p className="type-body text-ink">
          Don&apos;t see your situation? Tell us what you need and we&apos;ll let you know if we can help.
        </p>
        <div className="mt-4">
          <Link
            href="#quote"
            className="inline-flex h-8 items-center justify-center rounded-pill bg-accent px-4 type-small font-medium text-on-accent transition hover:bg-accent-hover"
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </Section>
  );
}
