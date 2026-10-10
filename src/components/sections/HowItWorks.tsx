import { CheckIcon } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { StepLine } from "@/components/motion/StepLine";
import { Section, type SectionTone } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/content/home";
import { cx } from "@/lib/cx";

export interface HowItWorksProps {
  readonly tone?: Extract<SectionTone, "base" | "alt">;
  /** Show the "What to have ready for your quote" card under the steps (home page only). */
  readonly showPrep?: boolean;
}

/**
 * Three numbered steps joined by a thin line (vertical on mobile, horizontal from 768px).
 * Numbers sit in chip-coloured circles; on alt sections the chip colour equals the section
 * background, so the circles switch to white to stay visible.
 */
export function HowItWorks({ tone = "base", showPrep = false }: HowItWorksProps) {
  const onAlt = tone === "alt";

  return (
    <Section tone={tone} id="how-it-works" labelledBy="how-it-works-title">
      <Reveal>
        <SectionHeading
          id="how-it-works-title"
          title={HOW_IT_WORKS.title}
          align="center"
          tone={tone}
        />
      </Reveal>
      <RevealGroup as="ol" className="mt-6 grid gap-8 md:grid-cols-3 md:gap-4">
        {HOW_IT_WORKS.steps.map((step, index) => {
          const last = index === HOW_IT_WORKS.steps.length - 1;
          return (
            <RevealItem
              as="li"
              key={step.title}
              className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4"
            >
              {!last && <StepLine onAlt={onAlt} />}
              <span
                aria-hidden="true"
                className={cx(
                  "relative inline-flex size-12 shrink-0 items-center justify-center rounded-pill type-h4",
                  onAlt ? "bg-white text-primary" : "bg-chip text-chip-fg",
                )}
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-1 pt-2 md:pt-0">
                <h3
                  className={cx(
                    "type-h3",
                    onAlt ? "text-alt-heading" : "text-primary",
                  )}
                >
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p
                  className={cx(
                    "type-body",
                    onAlt ? "text-alt-text" : "text-ink-muted",
                  )}
                >
                  {step.text}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
      {showPrep ? (
        <Reveal className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 rounded-card border border-line bg-white p-4 text-ink">
          <h3 className="type-h3 text-primary text-center">{HOW_IT_WORKS.prep.title}</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {HOW_IT_WORKS.prep.items.map((item) => (
              <li key={item} className="flex items-start gap-3 type-body text-ink">
                <CheckIcon size={20} className="mt-0.75 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="type-body text-ink-muted text-center">{HOW_IT_WORKS.prep.note}</p>
        </Reveal>
      ) : null}
    </Section>
  );
}
