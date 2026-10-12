/**
 * The single source of every client-specific value on the site.
 * No other file may contain a phone number, email, URL, social link, address, or domain.
 */

export type PaletteName = "a" | "b";

export interface SiteConfig {
  readonly name: string;
  readonly shortName: string;
  readonly descriptor: string;
  /** Absolute origin used for metadataBase, canonical URLs, the sitemap, and JSON-LD. No trailing slash. */
  readonly url: string;
  readonly palette: PaletteName;
  /** While false the site sends noindex and robots.txt disallows everything. */
  readonly indexable: boolean;
  /** While false, JSON-LD omits phone, email, and social profiles. */
  readonly contactVerified: boolean;
  readonly serviceArea: string;
  /** Cities served, shown on the Contact page and used as areaServed in the structured data. */
  readonly serviceCities: ReadonlyArray<string>;
  /** Search Console and Bing Webmaster Tools verification tokens. Empty = not emitted. */
  readonly verification: {
    readonly google: string;
    readonly bing: string;
  };
  readonly phone: {
    readonly display: string;
    readonly e164: string;
  };
  readonly whatsapp: {
    /** International format, digits only, no plus sign. */
    readonly number: string;
    readonly defaultMessage: string;
  };
  readonly email: string;
  /** Opening hours line (Contact page, footer, JSON-LD). */
  readonly hours: string;
  /** Short form for pills and badges. */
  readonly hoursShort: string;
  readonly social: {
    readonly instagram: string;
    readonly facebook: string;
  } | null;
  readonly address: {
    readonly line: string;
    readonly mapQuery: string;
  };
  /** When false, the Contact page shows the map but not the street address text. */
  readonly showAddressText: boolean;
  /** Response-time line. Hidden everywhere when null. */
  readonly responseTime: string | null;
}

export const SITE: SiteConfig = {
  name: "JAAG CONTRACTING & CONSTRUCTIONS",
  shortName: "JAAG",
  descriptor: "Commercial Cleaning & Contracting", // TODO(client): confirm the public-facing descriptor
  url: "https://jaag-cleaning-web.vercel.app", // TODO(client): real domain, no trailing slash
  palette: "a", // Switch to "b" here only.
  indexable: true,
  contactVerified: true,
  serviceArea: "Edmonton, Alberta",
  // TODO(client): confirm every city here is one you actually serve.
  serviceCities: [
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Spruce Grove",
    "Leduc",
    "Beaumont",
    "Fort Saskatchewan",
  ],
  // TODO(client): paste the tokens from Google Search Console and Bing Webmaster Tools.
  verification: { google: "", bing: "" },
  phone: {
    display: "(236) 632-7696",
    e164: "+12366327696",
  },
  whatsapp: {
    number: "12366327696", // WhatsApp number, country code first, digits only
    defaultMessage: "Hi JAAG, I'd like a quote.",
  },
  email: "Joga.singh801@icloud.com",
  // TODO(client): confirm the 24/7 wording, since it promises availability at all hours
  hours: "Open 24 hours a day, 7 days a week",
  hoursShort: "Open 24/7",
  // TODO(client): replace with the real profile URLs. Placeholders are shown on the site
  // but kept out of the structured data (sameAs) until they change.
  social: {
    instagram: "https://www.instagram.com/your-handle",
    facebook: "https://www.facebook.com/your-page",
  },
  address: {
    line: "13208 Sherbrooke AVE NW, Edmonton, AB, T5L4G3",
    mapQuery: "13208 Sherbrooke AVE NW, Edmonton, AB, T5L4G3",
  },
  showAddressText: true,
  responseTime: "We reply within one business day",
};
