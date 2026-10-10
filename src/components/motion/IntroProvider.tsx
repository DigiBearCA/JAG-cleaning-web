"use client";

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

interface IntroContextValue {
  /** True once the intro starts exiting (or immediately if the intro is skipped). */
  readonly ready: boolean;
  /** Called by WelcomeIntro when the intro begins its exit animation. */
  readonly markReady: () => void;
}

const IntroContext = createContext<IntroContextValue>({
  ready: true,
  markReady: () => {},
});

function emptySubscribe() {
  return () => {};
}

function getSkipSnapshot(): boolean {
  return document.documentElement.getAttribute("data-intro") === "skip";
}

function getServerSkipSnapshot(): boolean {
  return false;
}

/**
 * Provides the intro-ready signal to hero components.
 * If `data-intro="skip"` is set on `<html>` (by the inline head script),
 * `ready` is `true` immediately on hydration, so the hero entrance begins without delay.
 */
export function IntroProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const isSkipped = useSyncExternalStore(
    emptySubscribe,
    getSkipSnapshot,
    getServerSkipSnapshot,
  );
  const [ready, setReady] = useState(false);

  function markReady() {
    setReady(true);
  }

  const isReady = ready || isSkipped;

  return (
    <IntroContext value={{ ready: isReady, markReady }}>
      {children}
    </IntroContext>
  );
}

/** Returns whether the intro has finished (or was skipped) so the hero can animate in. */
export function useIntroReady(): boolean {
  return useContext(IntroContext).ready;
}

/** Returns the markReady function. Used only by WelcomeIntro. */
export function useMarkReady(): () => void {
  return useContext(IntroContext).markReady;
}
