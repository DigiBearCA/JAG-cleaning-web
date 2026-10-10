"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { SparkleIcon } from "@/components/icons";
import { SITE } from "@/config/site";
import {
  DURATION,
  EASE,
  EASE_CURTAIN,
} from "@/lib/motion";
import { useMarkReady } from "./IntroProvider";

/** Returns a greeting based on the visitor's local hour. */
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour <= 11) return "Good morning, welcome.";
  if (hour >= 12 && hour <= 16) return "Good afternoon, welcome.";
  return "Good evening, welcome.";
}

function emptySubscribe() {
  return () => {};
}

function getSkipSnapshot(): boolean {
  return document.documentElement.getAttribute("data-intro") === "skip";
}

function getServerSkipSnapshot(): boolean {
  return false;
}

const ease = [...EASE] as [number, number, number, number];
const easeCurtain = [...EASE_CURTAIN] as [number, number, number, number];

/**
 * Full-screen welcome intro overlay.
 * - Server-rendered markup so it paints on first paint without flashing the underlying page.
 * - Plays only on the first page view of a browser session to "/" with no hash.
 * - Skips immediately for returning visitors, deep links, or prefers-reduced-motion (hidden via CSS before paint).
 * - Skippable on any pointerdown or keydown (speeds exit to 0.4s).
 * - Decorative: aria-hidden="true", no focusable children, pointer-events on for tap-to-skip.
 * - Fires markReady() at 1.35s so the hero entrance begins underneath before the curtain finishes exiting.
 */
export function WelcomeIntro() {
  const markReady = useMarkReady();
  const prefersReduced = useReducedMotion();
  const isSkipAttr = useSyncExternalStore(
    emptySubscribe,
    getSkipSnapshot,
    getServerSkipSnapshot,
  );
  const greeting = useSyncExternalStore(
    emptySubscribe,
    getGreeting,
    () => "",
  );

  const shouldSkip = isSkipAttr || prefersReduced === true;
  const [phase, setPhase] = useState<"playing" | "exiting" | "done">("playing");
  const [isSkipped, setIsSkipped] = useState(false);
  const isSkippedRef = useRef(false);
  const readyFiredRef = useRef(false);

  // Record session storage on mount
  useEffect(() => {
    if (shouldSkip) return;
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      // sessionStorage unavailable; continue
    }
  }, [shouldSkip]);

  // Normal timeline: at 1.35s, mark ready and start curtain exit
  useEffect(() => {
    if (shouldSkip || phase !== "playing") return;

    const timer = setTimeout(() => {
      if (!readyFiredRef.current) {
        readyFiredRef.current = true;
        markReady();
      }
      setPhase("exiting");
    }, 1350);

    return () => clearTimeout(timer);
  }, [shouldSkip, phase, markReady]);

  // Exit timer: 0.4s if skipped, 0.7s if normal
  useEffect(() => {
    if (shouldSkip || phase !== "exiting") return;

    const exitDurationMs = isSkippedRef.current ? 400 : 700;
    const timer = setTimeout(() => {
      setPhase("done");
    }, exitDurationMs);

    return () => clearTimeout(timer);
  }, [shouldSkip, phase]);

  // Skip handler: pointerdown or keydown anywhere on the document
  useEffect(() => {
    if (shouldSkip || phase !== "playing") return;

    function handleSkip() {
      if (isSkippedRef.current) return;
      isSkippedRef.current = true;
      setIsSkipped(true);
      if (!readyFiredRef.current) {
        readyFiredRef.current = true;
        markReady();
      }
      setPhase("exiting");
    }

    document.addEventListener("pointerdown", handleSkip);
    document.addEventListener("keydown", handleSkip);
    return () => {
      document.removeEventListener("pointerdown", handleSkip);
      document.removeEventListener("keydown", handleSkip);
    };
  }, [shouldSkip, phase, markReady]);

  if (shouldSkip || phase === "done") return null;

  const exitDuration = isSkipped ? 0.4 : 0.7;

  return (
    <m.div
      id="intro"
      aria-hidden="true"
      className="fixed inset-0 z-100 grid place-items-center bg-dark text-on-dark"
      animate={
        phase === "exiting" ? { y: "-100%" } : undefined
      }
      transition={
        phase === "exiting"
          ? { duration: exitDuration, ease: easeCurtain }
          : undefined
      }
    >
      {/* 4px amber bottom edge leading the curtain exit */}
      {phase === "exiting" ? (
        <div
          className="absolute inset-x-0 bottom-0 h-1 bg-accent"
          aria-hidden="true"
        />
      ) : null}

      <div className="flex flex-col items-center gap-4 px-6 text-center">
        {/* Wordmark + four-point sparkle */}
        <m.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: DURATION.base, ease }}
          data-reveal
        >
          <span className="type-h1 tracking-brand text-on-dark sm:text-5xl">
            {SITE.shortName}
          </span>
          <m.span
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, duration: DURATION.base, ease }}
          >
            <SparkleIcon size={28} className="text-accent" />
          </m.span>
        </m.div>

        {/* Greeting line in Fraunces 28px (empty on SSR to prevent hydration mismatch) */}
        <m.p
          className="type-h2 text-on-dark"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4, ease }}
          data-reveal
        >
          {greeting}
        </m.p>

        {/* Descriptor */}
        <m.p
          className="type-small text-on-dark-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease }}
          data-reveal
        >
          {SITE.descriptor}
        </m.p>

        {/* Thin amber line (2px tall, 120px wide) drawing left to right */}
        <m.div
          className="h-0.5 w-30 bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ delay: 0.65, duration: 0.6, ease }}
          aria-hidden="true"
        />
      </div>
    </m.div>
  );
}
