import Link from "next/link";
import { SITE } from "@/config/site";
import { cx } from "@/lib/cx";

export interface LogoProps {
  readonly tone?: "light" | "dark";
  readonly onClick?: () => void;
  readonly className?: string;
}

/**
 * Wordmark: "JAG" in Fraunces 500 with 0.04em tracking, plus the descriptor.
 * Square, no radius. Links home. The accessible name is the visible text (WCAG 2.5.3);
 * the {" "} nodes are ignored by flex layout but keep the computed name as "JAG Cleaning & Snow Removal".
 */
export function Logo({ tone = "light", onClick, className }: LogoProps) {
  const onDark = tone === "dark";
  return (
    <Link href="/" onClick={onClick} className={cx("inline-flex min-h-11 items-center gap-2.5", className)}>
      <span className={cx("type-wordmark", onDark ? "text-on-dark" : "text-primary")}>{SITE.shortName}</span>{" "}
      <span
        aria-hidden="true"
        className={cx("h-6 w-px", onDark ? "bg-on-dark-muted" : "bg-line")}
      />{" "}
      <span
        className={cx(
          "max-w-30 type-caption font-medium text-balance sm:max-w-none sm:type-small",
          onDark ? "text-on-dark-muted" : "text-ink-muted",
        )}
      >
        {SITE.descriptor}
      </span>
    </Link>
  );
}
