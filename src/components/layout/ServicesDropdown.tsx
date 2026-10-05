"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { ChevronDownIcon, Icon } from "@/components/icons";
import { SERVICES_LABEL, SERVICES_NAV } from "@/content/navigation";
import { cx } from "@/lib/cx";

/**
 * Header "Services" menu. Not a page: the trigger is a button.
 * Opens on click (and on hover for hover-capable pointers via CSS, since Tailwind's hover
 * variant is wrapped in @media (hover: hover)). Closes on outside click, Escape (focus returns
 * to the button), focus leaving the menu, and route change.
 */
export function ServicesDropdown() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on route change (state adjusted during render, no effect needed).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Node && containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget;
    if (next instanceof Node && event.currentTarget.contains(next)) return;
    setOpen(false);
  }

  const sectionActive = pathname.startsWith("/services/");

  return (
    <div ref={containerRef} className="group relative" onBlur={handleBlur}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-menu"
        onClick={() => setOpen((value) => !value)}
        className={cx(
          "inline-flex min-h-11 cursor-pointer items-center gap-1 px-3 py-2 type-button transition duration-150 ease-brand hover:text-primary",
          sectionActive ? "text-primary underline decoration-accent decoration-2 underline-offset-6" : "text-ink",
        )}
      >
        {SERVICES_LABEL}
        <ChevronDownIcon
          size={18}
          className={cx("transition-transform duration-150 ease-brand", open && "rotate-180")}
        />
      </button>

      <div
        id="services-menu"
        className={cx(
          "absolute top-full left-1/2 z-50 w-80 -translate-x-1/2 pt-2 transition-[opacity,translate,visibility] duration-150 ease-brand",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <ul className="flex flex-col rounded-menu border border-line bg-white p-2 shadow-float">
          {SERVICES_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-start gap-3 rounded-lg p-3 transition duration-150 ease-brand hover:bg-bg"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-pill bg-chip text-chip-fg"
                  >
                    <Icon name={item.icon} size={20} />
                  </span>
                  <span className="flex flex-col">
                    <span className={cx("type-menu-title", active ? "text-primary underline decoration-accent decoration-2 underline-offset-4" : "text-primary")}>
                      {item.label}
                    </span>
                    <span className="type-small text-ink-muted">{item.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
