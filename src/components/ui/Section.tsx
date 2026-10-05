import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container } from "./Container";

export type SectionTone = "base" | "alt" | "dark";

export interface SectionProps {
  readonly tone?: SectionTone;
  readonly id?: string;
  /** Id of the heading that names this section. */
  readonly labelledBy?: string;
  /** Hairline top border, used by the quote section. */
  readonly bordered?: boolean;
  /** Hero rhythm: 48px mobile, 96px desktop. */
  readonly spacing?: "default" | "hero";
  readonly className?: string;
  readonly containerClassName?: string;
  readonly children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  base: "bg-bg text-ink",
  alt: "bg-alt text-alt-text",
  dark: "surface-dark bg-dark text-on-dark",
};

/** Full-width band with the section rhythm and a container inside. Square edges. */
export function Section({
  tone = "base",
  id,
  labelledBy,
  bordered = false,
  spacing = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        TONE_CLASSES[tone],
        spacing === "hero" ? "py-12 md:py-24" : "py-12 md:py-16",
        bordered && "border-t border-line",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
