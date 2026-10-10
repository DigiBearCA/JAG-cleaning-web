"use client";

import { m } from "motion/react";
import { EASE } from "@/lib/motion";

const ease = [...EASE] as [number, number, number, number];

/**
 * Animated SVG check mark for the form success state.
 * A circle draws itself, then a check mark appears via pathLength.
 * Uses stroke-primary for the check and accent for the circle fill.
 */
export function AnimatedCheck() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="size-16"
      role="img"
      aria-label="Success"
    >
      {/* Background circle fill */}
      <m.circle
        cx="32"
        cy="32"
        r="28"
        className="fill-accent"
        fillOpacity="0.15"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease }}
      />
      {/* Circle stroke */}
      <m.circle
        cx="32"
        cy="32"
        r="28"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      />
      {/* Check mark */}
      <m.path
        d="M20 33 L28 41 L44 25"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease, delay: 0.4 }}
      />
    </svg>
  );
}
