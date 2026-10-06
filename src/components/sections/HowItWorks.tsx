import { Section, type SectionTone } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/content/home";
import { cx } from "@/lib/cx";

export interface HowItWorksProps {
  readonly tone?: Extract<SectionTone, "base" | "alt">;
}

/**
 * Three numbered steps joined by a thin line (vertical on mobile, horizontal from 768px).
 * Numbers sit in chip-coloured circles; on alt sections the chip colour equals the section
 * background, so the circles switch to white to stay visible.
 */
export function HowItWorks({ tone = "base" }: HowItWorksProps) {
  const onAlt = tone === "alt";
  return (
    <Section tone={tone} id="how-it-works" labelledBy="how-it-works-title">
      <SectionHeading
        id="how-it-works-title"
        title={HOW_IT_WORKS.title}
        align="center"
        tone={tone}
      />
      <ol className=" mt-10 grid  gap-8 md: md:grid-cols-3 md:gap-4">
        {HOW_IT_WORKS.steps.map((step, index) => {
          const last = index === HOW_IT_WORKS.steps.length - 1;
          return (
            <li
              key={step.title}
              className={cx(
                "relative flex flex-col items-center text-center gap-4",
                !last &&
                  "before:absolute before:top-14 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:w-px md:before:top-6 md:before:right-auto md:before:bottom-auto md:before:left-[calc(50%+3rem)] md:before:h-px md:before:w-[calc(100%-6rem)] md:before:translate-x-0",
                !last &&
                  (onAlt ? "before:bg-alt-heading/40" : "before:bg-line"),
              )}
            >
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
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
