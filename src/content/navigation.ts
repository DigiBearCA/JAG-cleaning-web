export interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** The header and sticky bar always send people to the form on the Contact page. */
export const QUOTE_HREF = "/contact#quote";

/** In-page anchor used on pages that include the quote section. */
export const QUOTE_ANCHOR = "#quote";

export const HOME_LINK: NavLink = { label: "Home", href: "/" };

export const SERVICES_LINK: NavLink = { label: "Services", href: "/services" };

/** Header links after the Services link, in order. */
export const NAV_AFTER_SERVICES: ReadonlyArray<NavLink> = [
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_COMPANY: ReadonlyArray<NavLink> = [
  HOME_LINK,
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LEGAL: ReadonlyArray<NavLink> = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
