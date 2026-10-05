import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface CardProps {
  /** Linked cards lift and get a primary border on hover. Pair with a stretched link inside. */
  readonly interactive?: boolean;
  readonly as?: "div" | "li" | "article";
  readonly className?: string;
  readonly children: ReactNode;
}

/** White card, 24px radius, hairline border, 24px padding on mobile and 32px from 768px. */
export function Card({ interactive = false, as = "div", className, children }: CardProps) {
  const Component = as;
  return (
    <Component
      className={cx(
        "relative rounded-card border border-line bg-white p-6 text-ink md:p-8",
        interactive && "transition duration-150 ease-brand hover:-translate-y-0.5 hover:border-primary",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export interface FeatureIconProps {
  readonly children: ReactNode;
  /** light: primary circle with on-primary icon. dark: accent icon, no fill (on dark cards). */
  readonly surface?: "light" | "dark";
}

/** 48px holder for feature icons (Who we serve, Why JAG, card grids). */
export function FeatureIcon({ children, surface = "light" }: FeatureIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-pill",
        surface === "light" ? "bg-primary text-on-primary" : "text-accent",
      )}
    >
      {children}
    </span>
  );
}
