import { SITE } from "@/config/site";
import { IMAGES } from "@/config/images";
import { HOME_FAQ } from "@/content/faq";
import { HOME_META } from "@/content/home";
import { getEnabledServices } from "@/content/services";
import { absoluteUrl } from "@/lib/contact-links";

/** JSON-LD is plain JSON; this keeps the builders typed without a schema library. */
export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | ReadonlyArray<JsonLdValue>;
export interface JsonLdObject {
  readonly [key: string]: JsonLdValue;
}

const BUSINESS_ID = absoluteUrl("/#business");
const WEBSITE_ID = absoluteUrl("/#website");
const ref = (id: string): JsonLdObject => ({ "@id": id });

/** Every served city, inside Alberta. Mirrors the list shown on the Contact page. */
const areaServed = (): JsonLdValue =>
  SITE.serviceCities.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "AdministrativeArea", name: "Alberta" },
  }));

/** Placeholder profile URLs are shown on the site but never claimed as sameAs. */
const realSocialUrls = (): string[] =>
  SITE.social
    ? [SITE.social.instagram, SITE.social.facebook].filter(
        (url) => !url.includes("your-"),
      )
    : [];

/**
 * The business. HomeAndConstructionBusiness is a LocalBusiness subtype, so it covers both.
 * Service-area business: no street address. Contact facts and hours only once verified.
 */
function business(): JsonLdObject {
  const sameAs = realSocialUrls();
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: absoluteUrl("/"),
    description: HOME_META.description,
    image: absoluteUrl(IMAGES.hero[0].src.src),
    areaServed: areaServed(),
    knowsAbout: getEnabledServices().map((s) => s.name),
    ...(SITE.contactVerified
      ? {
          telephone: SITE.phone.e164,
          email: SITE.email,
          // Open 24/7 (SITE.hours). 23:59 is the schema.org convention for "until midnight".
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          ...(sameAs.length > 0 ? { sameAs } : {}),
        }
      : {}),
  };
}

function services(): JsonLdObject[] {
  return getEnabledServices().map((s) => ({
    "@type": "Service",
    "@id": absoluteUrl(`/services#${s.slug}`),
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: absoluteUrl(`/services#${s.slug}`),
    provider: ref(BUSINESS_ID),
    areaServed: areaServed(),
  }));
}

/** Only the FAQ items rendered on the home page. */
function homeFaq(pageId: string): JsonLdObject {
  return {
    "@type": "FAQPage",
    "@id": `${pageId}#faq`,
    isPartOf: ref(pageId),
    mainEntity: HOME_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export interface PageGraphInput {
  /** Site path starting with "/". */
  readonly path: string;
  readonly name: string;
  readonly description: string;
  readonly type?: "WebPage" | "ContactPage";
}

/**
 * One connected @graph per page: business, website, the page, a breadcrumb on inner pages,
 * services on /services, and the FAQ on the home page.
 */
export function pageGraph({
  path,
  name,
  description,
  type = "WebPage",
}: PageGraphInput): JsonLdObject {
  const url = absoluteUrl(path);
  const pageId = `${url}#webpage`;
  const isHome = path === "/";

  const graph: JsonLdObject[] = [
    business(),
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE.name,
      url: absoluteUrl("/"),
      inLanguage: "en-CA",
      publisher: ref(BUSINESS_ID),
    },
    {
      "@type": type,
      "@id": pageId,
      url,
      name,
      description,
      inLanguage: "en-CA",
      isPartOf: ref(WEBSITE_ID),
      about: ref(BUSINESS_ID),
      ...(isHome ? {} : { breadcrumb: ref(`${url}#breadcrumb`) }),
    },
  ];

  if (!isHome) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    });
  }
  if (path === "/services") graph.push(...services());
  if (isHome) graph.push(homeFaq(pageId));

  return { "@context": "https://schema.org", "@graph": graph };
}
