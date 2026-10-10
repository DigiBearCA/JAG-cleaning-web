"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";
import { useIntroReady } from "./IntroProvider";

const ease = [...EASE] as [number, number, number, number];

export interface SlideInProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly as?: "div" | "nav";
  readonly "data-sticky-bar"?: string;
  readonly "aria-label"?: string;
}

/**
 * Slides up from y: 100% to 0 once the intro is ready (plus delay), 0.5s, EASE.
 * Used by the mobile sticky contact bar. Remains fixed and tappable the whole time.
 */
export function SlideIn({
  children,
  className,
  delay = 0.6,
  as: Tag = "nav",
  "data-sticky-bar": dataStickyBar = "",
  "aria-label": ariaLabel,
}: SlideInProps) {
  const ready = useIntroReady();
  const Component = m[Tag];

  return (
    <Component
      data-reveal
      data-sticky-bar={dataStickyBar}
      aria-label={ariaLabel}
      className={className}
      initial={{ y: "100%" }}
      animate={ready ? { y: "0%" } : { y: "100%" }}
      transition={{ duration: DURATION.base, ease, delay }}
    >
      {children}
    </Component>
  );
}
