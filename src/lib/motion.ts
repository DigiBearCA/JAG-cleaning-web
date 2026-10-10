/**
 * Motion design tokens and reusable variants.
 * Single source of truth for all animation timing in the app.
 * Only opacity and transform (plus clip-path for hero image and pathLength for check) are animated.
 */
import type { Transition, Variants } from "motion/react";

/** Brand ease curve — matches --ease-brand in globals.css */
export const EASE = [0.2, 0, 0, 1] as const;

/** Curtain ease for the intro overlay exit */
export const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;

/** Duration tokens in seconds */
export const DURATION = { fast: 0.2, base: 0.5, slow: 0.8 } as const;

/** Default stagger between children (seconds) */
export const STAGGER = 0.08;

/** Default reveal translateY offset (pixels) */
export const REVEAL_Y = 24;

/* ---------------------------------------------------------------------------
 * Reusable typed variants
 * --------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
    },
  },
};

/* ---------------------------------------------------------------------------
 * Transition presets
 * --------------------------------------------------------------------------- */

/** Mutable copy of the ease curve for use in transition objects */
const ease: [number, number, number, number] = [...EASE];

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease,
};

export const slowTransition: Transition = {
  duration: DURATION.slow,
  ease,
};

