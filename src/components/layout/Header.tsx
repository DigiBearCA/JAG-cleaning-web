"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";
import {
  HOME_LINK,
  SERVICES_LINK,
  NAV_AFTER_SERVICES,
  QUOTE_HREF,
  type NavLink,
} from "@/content/navigation";
import { telHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const MOBILE_MENU_ID = "mobile-menu";

function DesktopNavLink({
  link,
  pathname,
}: {
  readonly link: NavLink;
  readonly pathname: string;
}) {
  const active = pathname === link.href;
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={cx(
        "inline-flex min-h-11 items-center px-3 py-2 type-button transition duration-150 ease-brand hover:text-primary",
        active
          ? "text-primary underline decoration-accent decoration-2 underline-offset-6"
          : "text-ink",
      )}
    >
      {link.label}
    </Link>
  );
}

/**
 * Sticky site header. Desktop (1024px+): logo, centred nav with the Services link,
 * phone link, and a small Get a Quote button. Below 1024px: logo, round phone button,
 * and the menu toggle.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on route change (state adjusted during render, no effect needed).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function dismissMenu() {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-18">
        <Logo onClick={closeMenu} />

        <nav
          aria-label="Main"
          className="hidden sm:block absolute left-1/2 -translate-x-1/2"
        >
          <ul className="flex items-center gap-1">
            <li>
              <DesktopNavLink link={HOME_LINK} pathname={pathname} />
            </li>
            <li>
              <DesktopNavLink link={SERVICES_LINK} pathname={pathname} />
            </li>
            {NAV_AFTER_SERVICES.map((link) => (
              <li key={link.href}>
                <DesktopNavLink link={link} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={telHref()}
            className="hidden lg:inline-flex min-h-11 items-center gap-2 type-button text-primary underline-offset-4 transition duration-150 ease-brand hover:underline"
          >
            <PhoneIcon size={20} />
            {SITE.phone.display}
          </a>
          <a
            href={telHref()}
            aria-label={`Call ${SITE.phone.display}`}
            className="inline-flex lg:hidden size-11 items-center justify-center rounded-pill border-[1.5px] border-primary text-primary transition duration-150 ease-brand hover:bg-primary/8 active:scale-98"
          >
            <PhoneIcon size={20} />
          </a>
          <div className="hidden sm:flex">
            <Button href={QUOTE_HREF} size="sm">
              Get a Quote
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? MOBILE_MENU_ID : undefined}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex sm:hidden size-11 cursor-pointer items-center justify-center rounded-pill bg-primary text-on-primary transition duration-150 ease-brand hover:bg-primary-hover active:scale-98"
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <MobileMenu
          id={MOBILE_MENU_ID}
          pathname={pathname}
          onNavigate={closeMenu}
          onDismiss={dismissMenu}
        />
      ) : null}
    </header>
  );
}
