"use client";

import { m } from "motion/react";
import { cx } from "@/lib/cx";
import { EASE } from "@/lib/motion";

const ease = [...EASE] as [number, number, number, number];

export interface StepLineProps {
  readonly onAlt?: boolean;
}

/**
 * Animated connecting line between steps in How It Works.
 * Desktop: scaleX 0 to 1 origin left over 0.8s.
 * Mobile: scaleY 0 to 1 origin top over 0.8s.
 */
export function StepLine({ onAlt = false }: StepLineProps) {
  const lineBg = onAlt ? "bg-alt-heading/40" : "bg-line";

  return (
    <>
      {/* Desktop connecting line: draws left to right */}
      <m.div
        data-reveal
        aria-hidden="true"
        className={cx(
          "hidden md:block absolute top-6 left-[calc(50%+3rem)] h-px w-[calc(100%-6rem)] origin-left",
          lineBg,
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
      />
      {/* Mobile connecting line: draws top to bottom */}
      <m.div
        data-reveal
        aria-hidden="true"
        className={cx(
          "md:hidden absolute top-14 -bottom-8 left-6 -translate-x-1/2 w-px origin-top",
          lineBg,
        )}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
      />
    </>
  );
}
