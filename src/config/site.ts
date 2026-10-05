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
  name: "JAAG CONTRACTING & CONSTRUCTIONS",
  shortName: "JAAG",
  descriptor: "Contracting & Constructions",
  url: "https://jaag-cleaning-web.vercel.app/", // TODO(client): real domain, no trailing slash
  palette: "a", // Switch to "b" here only.
  indexable: true, // TODO(client): set to true at launch, after every placeholder is replaced
  contactVerified: true, // TODO(client): set to true once phone, email, and social links below are real
  serviceArea: "Edmonton, Alberta",
  phone: {
    display: "(236) 632-7696", // TODO(client): real phone number as it should appear on the page
    e164: "+12366327696", // TODO(client): same number in E.164 format for tel: links
  },
  whatsapp: {
    number: "12366327696", // WhatsApp number, country code first, digits only
    defaultMessage: "Hi JAAG, I'd like a quote.",
  },
  email: "Joga.singh801@icloud.com",
  hours: null, // TODO(client): opening hours line, for example "Monday to Saturday, 8 am to 6 pm"
  social: {
    instagram: "https://www.instagram.com/your-handle", // TODO(client): Instagram profile URL
    facebook: "https://www.facebook.com/your-page", // TODO(client): Facebook page URL
  },
  address: {
    line: "13208 Sherbrooke AVE NW, Edmonton, AB, T5L4G3",
    mapQuery: "13208 Sherbrooke AVE NW, Edmonton, AB, T5L4G3",
  },
  showAddressText: true,
  responseTime: "We reply within one business day",
};
