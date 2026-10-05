"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HOME_LINK, NAV_AFTER_SERVICES, QUOTE_HREF, SERVICES_LABEL, SERVICES_NAV } from "@/content/navigation";
import { telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";

export interface MobileMenuProps {
  readonly id: string;
  readonly pathname: string;
  /** Close after following a link (focus goes with the navigation). */
  readonly onNavigate: () => void;
  /** Close with Escape (focus returns to the menu button). */
  readonly onDismiss: () => void;
}

const LINK_CLASSES =
  "flex min-h-14 w-full items-center justify-between gap-4 border-b border-line py-2 text-left type-menu-link transition duration-150 ease-brand hover:text-primary";

/**
 * Full-screen panel under the header, rendered only while open. It does not trap focus.
 * While it is in the DOM, globals.css locks page scroll and hides the sticky contact bar
 * through the [data-mobile-menu-open] hook.
 */
export function MobileMenu({ id, pathname, onNavigate, onDismiss }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(() => pathname.startsWith("/services/"));
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    firstLinkRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onDismiss();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onDismiss]);

  const linkState = (href: string) =>
    pathname === href ? { "aria-current": "page" as const, className: cx(LINK_CLASSES, "text-primary") } : { className: cx(LINK_CLASSES, "text-ink") };

  return (
    <div
      id={id}
      data-mobile-menu-open=""
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg shadow-float animate-menu-in md:top-18 lg:hidden"
    >
      <Container className="flex min-h-full flex-col pt-2 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            <li>
              <Link ref={firstLinkRef} href={HOME_LINK.href} onClick={onNavigate} {...linkState(HOME_LINK.href)}>
                {HOME_LINK.label}
              </Link>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={`${id}-services`}
                onClick={() => setServicesOpen((value) => !value)}
                className={cx(LINK_CLASSES, "cursor-pointer", pathname.startsWith("/services/") ? "text-primary" : "text-ink")}
              >
                {SERVICES_LABEL}
                <ChevronDownIcon
                  size={24}
                  className={cx("shrink-0 text-primary transition-transform duration-150 ease-brand", servicesOpen && "rotate-180")}
                />
              </button>
              <ul id={`${id}-services`} hidden={!servicesOpen} className="flex flex-col border-b border-line py-2">
                {SERVICES_NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={cx(
                          "flex min-h-12 items-center pl-4 type-lead font-medium transition duration-150 ease-brand hover:text-primary",
                          active ? "text-primary" : "text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            {NAV_AFTER_SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onNavigate} {...linkState(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Button href={QUOTE_HREF} fullWidth onClick={onNavigate}>
            Get a Quote
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button href={telHref()} variant="outline" icon="phone" fullWidth>
              Call
            </Button>
            <Button href={whatsappHref()} variant="outline" icon="whatsapp" fullWidth>
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
