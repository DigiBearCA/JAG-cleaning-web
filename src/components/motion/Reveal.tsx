"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import {
  DURATION,
  EASE,
  REVEAL_Y,
  STAGGER,
} from "@/lib/motion";

const ease = [...EASE] as [number, number, number, number];

/* ---------------------------------------------------------------------------
 * Reveal — a single element that fades up when it enters the viewport.
 * --------------------------------------------------------------------------- */

export interface RevealProps {
  readonly children: ReactNode;
  /** Extra delay in seconds. */
  readonly delay?: number;
  /** Y offset in pixels (default REVEAL_Y = 24). */
  readonly y?: number;
  /** Whether to animate only once (default true). */
  readonly once?: boolean;
  readonly className?: string;
  readonly as?: "div" | "section" | "footer";
}

export function Reveal({
  children,
  delay = 0,
  y = REVEAL_Y,
  once = true,
  className,
  as: Tag = "div",
}: RevealProps) {
  const Component = m[Tag];
  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: DURATION.base, ease, delay }}
    >
      {children}
    </Component>
  );
}

/* ---------------------------------------------------------------------------
 * RevealGroup — a stagger container. Does not animate itself, just
 * orchestrates children timing.
 * --------------------------------------------------------------------------- */

export interface RevealGroupProps {
  readonly children: ReactNode;
  /** Stagger offset between children in seconds (default STAGGER = 0.08). */
  readonly stagger?: number;
  /** Whether to animate only once (default true). */
  readonly once?: boolean;
  readonly className?: string;
  readonly as?: "div" | "ul" | "ol";
}

export function RevealGroup({
  children,
  stagger = STAGGER,
  once = true,
  className,
  as: Tag = "div",
}: RevealGroupProps) {
  const Component = m[Tag];
  return (
    <Component
      data-reveal
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

/* ---------------------------------------------------------------------------
 * RevealItem — a child of RevealGroup that inherits the stagger timing.
 * --------------------------------------------------------------------------- */

export interface RevealItemProps {
  readonly children: ReactNode;
  /** Y offset (default REVEAL_Y = 24). */
  readonly y?: number;
  readonly className?: string;
  readonly as?: "div" | "li";
}

export function RevealItem({
  children,
  y = REVEAL_Y,
  className,
  as: Tag = "div",
}: RevealItemProps) {
  const Component = m[Tag];
  return (
    <Component
      data-reveal
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.base, ease },
        },
      }}
    >
      {children}
    </Component>
  );
}
