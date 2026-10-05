import type { IconName } from "@/components/icons";

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface ServiceNavItem extends NavLink {
  readonly description: string;
  readonly icon: IconName;
}

/** The header and sticky bar always send people to the form on the Contact page. */
export const QUOTE_HREF = "/contact#quote";

/** In-page anchor used on pages that include the quote section. */
export const QUOTE_ANCHOR = "#quote";

export const HOME_LINK: NavLink = { label: "Home", href: "/" };

export const SERVICES_NAV: ReadonlyArray<ServiceNavItem> = [
  {
    label: "Residential Cleaning",
    href: "/services/residential-cleaning",
    description: "Homes, condos, and apartments",
    icon: "home",
  },
  {
    label: "Commercial Cleaning",
    href: "/services/commercial-cleaning",
    description: "Offices and shared spaces",
    icon: "building",
  },
  {
    label: "Snow Removal",
    href: "/services/snow-removal",
    description: "Driveways, walkways, and lots",
    icon: "snowflake",
  },
];

/** Header links after the Services dropdown, in order. */
export const NAV_AFTER_SERVICES: ReadonlyArray<NavLink> = [
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SERVICES_LABEL = "Services";

export const FOOTER_COMPANY: ReadonlyArray<NavLink> = [
  HOME_LINK,
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LEGAL: ReadonlyArray<NavLink> = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
