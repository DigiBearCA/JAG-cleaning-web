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
  /** Opening hours line. Hidden everywhere when null. */
  readonly hours: string | null;
  readonly social: {
    readonly instagram: string;
    readonly facebook: string;
  };
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
  name: "JAG Cleaning & Snow Removal",
  shortName: "JAG",
  descriptor: "Cleaning & Snow Removal",
  url: "https://www.example.com", // TODO(client): real domain, no trailing slash
  palette: "a", // Switch to "b" here only.
  indexable: false, // TODO(client): set to true at launch, after every placeholder is replaced
  contactVerified: false, // TODO(client): set to true once phone, email, and social links below are real
  serviceArea: "Edmonton, Alberta",
  phone: {
    display: "(780) 000-0000", // TODO(client): real phone number as it should appear on the page
    e164: "+17800000000", // TODO(client): same number in E.164 format for tel: links
  },
  whatsapp: {
    number: "17800000000", // TODO(client): WhatsApp number, country code first, digits only
    defaultMessage: "Hi JAG, I'd like a quote.",
  },
  email: "hello@example.com", // TODO(client): real email address
  hours: null, // TODO(client): opening hours line, for example "Monday to Saturday, 8 am to 6 pm"
  social: {
    instagram: "https://www.instagram.com/your-handle", // TODO(client): Instagram profile URL
    facebook: "https://www.facebook.com/your-page", // TODO(client): Facebook page URL
  },
  address: {
    line: "1 Sir Winston Churchill Square NW, Edmonton, AB", // TODO(client): business address (placeholder is a public landmark)
    mapQuery: "1 Sir Winston Churchill Square NW, Edmonton, AB", // TODO(client): address or place name for the map embed
  },
  showAddressText: false, // TODO(client): set to true only if the street address should be shown publicly
  responseTime: null, // TODO(client): confirm a response time before adding one, for example "We reply within one business day"
};
