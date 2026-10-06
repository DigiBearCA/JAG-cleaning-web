import { cx } from "@/lib/cx";
import type { SectionTone } from "./Section";

export interface SectionHeadingProps {
  readonly id?: string;
  readonly eyebrow?: string;
  readonly title: string;
  readonly lead?: string;
  readonly align?: "center" | "left";
  readonly tone?: SectionTone;
  /** Heading level. Defaults to h2. */
  readonly level?: "h1" | "h2";
  readonly className?: string;
}

const HEADING_TONE: Record<SectionTone, string> = {
  base: "text-primary",
  alt: "text-alt-heading",
  dark: "text-on-dark",
};

const LEAD_TONE: Record<SectionTone, string> = {
  base: "text-ink-muted",
  alt: "text-alt-text",
  dark: "text-on-dark-muted",
};

/** Optional eyebrow, H2 (or H1), and optional lead paragraph. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "base",
  level = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = level;
  const centered = align === "center";
  return (
    <div
      className={cx(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cx("type-eyebrow", HEADING_TONE[tone])}>{eyebrow}</p>
      ) : null}
      <Heading
        id={id}
        className={cx(
          level === "h1" ? "type-h1" : "type-h2",
          HEADING_TONE[tone],
        )}
      >
        {title}
      </Heading>
      {lead ? (
        <p className={cx("type-lead max-w-prose", LEAD_TONE[tone])}>{lead}</p>
      ) : null}
    </div>
  );
}
