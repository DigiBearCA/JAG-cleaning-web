"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HomeIcon, ServicesIcon, ContactIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  HOME_LINK,
  NAV_AFTER_SERVICES,
  QUOTE_HREF,
  SERVICES_LINK,
} from "@/content/navigation";
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
export function MobileMenu({
  id,
  pathname,
  onNavigate,
  onDismiss,
}: MobileMenuProps) {
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
    pathname === href
      ? {
          "aria-current": "page" as const,
          className: cx(LINK_CLASSES, "text-primary"),
        }
      : { className: cx(LINK_CLASSES, "text-ink") };

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
              <Link
                ref={firstLinkRef}
                href={HOME_LINK.href}
                onClick={onNavigate}
                {...linkState(HOME_LINK.href)}
              >
                <span className="flex items-center gap-2">
                  <HomeIcon size={20} />
                  {HOME_LINK.label}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={SERVICES_LINK.href}
                onClick={onNavigate}
                {...linkState(SERVICES_LINK.href)}
              >
                <span className="flex items-center gap-2">
                  <ServicesIcon size={20} />
                  {SERVICES_LINK.label}
                </span>
              </Link>
            </li>
            {NAV_AFTER_SERVICES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  {...linkState(item.href)}
                >
                  <span className="flex items-center gap-2">
                    {item.href === "/contact" && <ContactIcon size={20} />}
                    {item.label}
                  </span>
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
            <Button
              href={whatsappHref()}
              variant="outline"
              icon="whatsapp"
              fullWidth
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
