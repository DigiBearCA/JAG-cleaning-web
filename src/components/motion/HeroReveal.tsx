"use client";

import { m } from "motion/react";
import { Fragment, type ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";
import { useIntroReady } from "./IntroProvider";

const ease = [...EASE] as [number, number, number, number];

/* ---------------------------------------------------------------------------
 * HeroItem — a generic hero child that fades up after the intro is ready.
 * Supports optional scale-in for buttons.
 * --------------------------------------------------------------------------- */

export interface HeroItemProps {
  readonly children: ReactNode;
  /** Delay in seconds relative to intro-ready (default 0). */
  readonly delay?: number;
  /** Whether to animate scale from 0.96 to 1 alongside opacity/y. */
  readonly scaleIn?: boolean;
  readonly className?: string;
}

export function HeroItem({
  children,
  delay = 0,
  scaleIn = false,
  className,
}: HeroItemProps) {
  const ready = useIntroReady();

  return (
    <m.div
      data-reveal
      className={className}
      initial={
        scaleIn
          ? { opacity: 0, y: 24, scale: 0.96 }
          : { opacity: 0, y: 24 }
      }
      animate={
        ready
          ? scaleIn
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: 0 }
          : scaleIn
            ? { opacity: 0, y: 24, scale: 0.96 }
            : { opacity: 0, y: 24 }
      }
      transition={{ duration: DURATION.base, ease, delay }}
    >
      {children}
    </m.div>
  );
}

/* ---------------------------------------------------------------------------
 * SplitWords — reveals the headline word by word.
 * Each word is an inline-block overflow-hidden wrapper containing an m.span
 * that rises from y: 100% to 0. Real <h1> and spaces remain for crawlers and SR.
 * --------------------------------------------------------------------------- */

export interface SplitWordsProps {
  readonly text: string;
  /** Delay before the first word (seconds). */
  readonly delay?: number;
  /** Stagger between words (seconds, default 0.06). */
  readonly stagger?: number;
  readonly className?: string;
  readonly id?: string;
}

export function SplitWords({
  text,
  delay = 0.08,
  stagger = 0.06,
  className,
  id,
}: SplitWordsProps) {
  const ready = useIntroReady();
  const words = text.split(/\s+/);

  return (
    <h1 id={id} className={className} data-reveal>
      {words.map((word, i) => (
        <Fragment key={`${word}-${String(i)}`}>
          {i > 0 ? " " : ""}
          <span className="inline-block overflow-hidden pb-1 -mb-1">
            <m.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={ready ? { y: "0%" } : { y: "100%" }}
              transition={{
                duration: DURATION.base,
                ease,
                delay: delay + i * stagger,
              }}
            >
              {word}
            </m.span>
          </span>
        </Fragment>
      ))}
    </h1>
  );
}

/* ---------------------------------------------------------------------------
 * HeroGroup & HeroGroupItem — for staggered hero lists (e.g. trust chips).
 * --------------------------------------------------------------------------- */

export interface HeroGroupProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly stagger?: number;
  readonly className?: string;
  readonly as?: "ul" | "div";
  readonly "aria-label"?: string;
}

export function HeroGroup({
  children,
  delay = 0.6,
  stagger = 0.05,
  className,
  as: Tag = "ul",
  "aria-label": ariaLabel,
}: HeroGroupProps) {
  const ready = useIntroReady();
  const Component = m[Tag];

  return (
    <Component
      data-reveal
      aria-label={ariaLabel}
      className={className}
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

export interface HeroGroupItemProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: "li" | "div";
}

export function HeroGroupItem({
  children,
  className,
  as: Tag = "li",
}: HeroGroupItemProps) {
  const Component = m[Tag];
  return (
    <Component
      data-reveal
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
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

/* ---------------------------------------------------------------------------
 * HeroImageReveal — clip-path + scale reveal for the hero image area.
 * Keeps priority preloading and avoids opacity:0 for LCP stability.
 * --------------------------------------------------------------------------- */

export interface HeroImageRevealProps {
  readonly children: ReactNode;
  /** Delay in seconds relative to intro-ready. */
  readonly delay?: number;
  readonly className?: string;
}

export function HeroImageReveal({
  children,
  delay = 0.2,
  className,
}: HeroImageRevealProps) {
  const ready = useIntroReady();
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ clipPath: "inset(0 0 0 12%)", scale: 1.04 }}
      animate={
        ready
          ? { clipPath: "inset(0 0 0 0%)", scale: 1 }
          : { clipPath: "inset(0 0 0 12%)", scale: 1.04 }
      }
      transition={{ duration: DURATION.slow, ease, delay }}
    >
      {children}
    </m.div>
  );
}
