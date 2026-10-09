"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/** Below this scroll position the header is always shown. */
const TOP_ZONE = 80;
/** Ignore tiny scroll jitter (trackpads, mobile address bar). */
const MIN_DELTA = 6;
/** How long the header stays after the user scrolls up, before hiding again. */
const SHOW_FOR_MS = 2500;

/**
 * Auto-hiding header: hides while scrolling down, reappears when scrolling up, then hides
 * again after SHOW_FOR_MS. It never hides near the top of the page, while `pinned` is true
 * (mobile menu open), while the pointer is over the header, or while focus is inside it
 * (keyboard users always see where focus is).
 */
export function useAutoHideHeader(
  headerRef: RefObject<HTMLElement | null>,
  pinned: boolean,
): boolean {
  const [hidden, setHidden] = useState(false);
  const pinnedRef = useRef(pinned);

  useEffect(() => {
    pinnedRef.current = pinned;
  }, [pinned]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;
    let hovered = false;
    let timer: number | undefined;

    const held = () =>
      pinnedRef.current || hovered || header.contains(document.activeElement);

    const clearTimer = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };

    const scheduleHide = () => {
      clearTimer();
      timer = window.setTimeout(() => {
        if (!held() && window.scrollY > TOP_ZONE) setHidden(true);
      }, SHOW_FOR_MS);
    };

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;

      if (y <= TOP_ZONE || held()) {
        clearTimer();
        setHidden(false);
        lastY = y;
        return;
      }
      if (Math.abs(delta) < MIN_DELTA) return;

      if (delta > 0) {
        clearTimer();
        setHidden(true);
      } else {
        setHidden(false);
        scheduleHide();
      }
      lastY = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    const onEnter = () => {
      hovered = true;
      clearTimer();
    };
    const onLeave = () => {
      hovered = false;
      if (window.scrollY > TOP_ZONE) scheduleHide();
    };
    const onFocusIn = () => {
      clearTimer();
      setHidden(false);
    };
    const onFocusOut = () => {
      if (window.scrollY > TOP_ZONE) scheduleHide();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    header.addEventListener("pointerenter", onEnter);
    header.addEventListener("pointerleave", onLeave);
    header.addEventListener("focusin", onFocusIn);
    header.addEventListener("focusout", onFocusOut);
    return () => {
      clearTimer();
      window.removeEventListener("scroll", onScroll);
      header.removeEventListener("pointerenter", onEnter);
      header.removeEventListener("pointerleave", onLeave);
      header.removeEventListener("focusin", onFocusIn);
      header.removeEventListener("focusout", onFocusOut);
    };
  }, [headerRef]);

  return hidden && !pinned;
}
