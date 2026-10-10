"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  function handleDocumentClick(e: MouseEvent) {
    const target = e.target as HTMLElement | null;
    const a = target?.closest("a[href*='#']");
    if (a) {
      setTimeout(callback, 50);
    }
  }
  document.addEventListener("click", handleDocumentClick);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
    document.removeEventListener("click", handleDocumentClick);
  };
}

function getSnapshot() {
  return window.location.hash;
}

function getServerSnapshot() {
  return "";
}

/**
 * Manages service dialog open state synchronized with window.location.hash.
 *
 * Uses React 18/19 useSyncExternalStore to subscribe directly to hashchange and popstate,
 * completely avoiding cascading renders / set-state-in-effect issues.
 */
export function useServiceHash(slug: string) {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const openedWithPush = useRef(false);

  const isMatching = useCallback(
    (h: string): boolean => {
      if (h === `#${slug}`) return true;
      // Support commercial-cleaning alias to office-cleaning
      if (slug === "office-cleaning" && h === "#commercial-cleaning") {
        return true;
      }
      return false;
    },
    [slug],
  );

  const isOpen = isMatching(hash);

  const openDialog = useCallback(() => {
    if (typeof window !== "undefined") {
      openedWithPush.current = true;
      window.history.pushState({ service: slug }, "", `#${slug}`);
      window.dispatchEvent(new Event("hashchange"));
    }
  }, [slug]);

  const closeDialog = useCallback(() => {
    if (typeof window !== "undefined") {
      if (openedWithPush.current) {
        openedWithPush.current = false;
        window.history.back();
      } else if (isMatching(window.location.hash)) {
        window.history.replaceState(null, "", window.location.pathname);
        window.dispatchEvent(new Event("hashchange"));
      }
    }
  }, [isMatching]);

  return { isOpen, openDialog, closeDialog };
}

