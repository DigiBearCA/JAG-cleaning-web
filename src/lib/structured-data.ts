import { SITE } from "@/config/site";
import { absoluteUrl } from "@/lib/contact-links";
import { getEnabledServices } from "@/content/services";

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

/** Edmonton, within Alberta, within Canada. Shared by every schema object. */
function areaServed(): JsonLdObject {
  return {
    "@type": "City",
    name: "Edmonton",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Alberta",
      containedInPlace: {
        "@type": "Country",
        name: "Canada",
        identifier: "CA",
      },
    },
  };
}

/**
 * Home page LocalBusiness. JAG is a service-area business, so no street address is included.
 * Phone, email, social profiles, and opening hours are only added once SITE.contactVerified is true.
 */
export function localBusinessSchema(description: string): JsonLdObject {
  const base: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: SITE.name,
    url: absoluteUrl("/"),
    description,
    areaServed: areaServed(),
    serviceType: getEnabledServices().map((s) => s.name),
  };

  if (!SITE.contactVerified) return base;

  return {
    ...base,
    telephone: SITE.phone.e164,
    email: SITE.email,
    sameAs: [SITE.social.instagram, SITE.social.facebook],
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
  };
}

export interface ServiceSchemaInput {
  readonly name: string;
  readonly serviceType: string;
  readonly description: string;
  readonly path: string;
}

/** Service page schema, with the provider referencing the business by name and URL. */
export function serviceSchema({
  name,
  serviceType,
  description,
  path,
}: ServiceSchemaInput): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: SITE.name,
      url: absoluteUrl("/"),
    },
    areaServed: areaServed(),
  };
}

/** Services page schema: ItemList of Service objects for every enabled service. */
export function servicesPageSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: getEnabledServices().map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(`/services#${service.slug}`),
        provider: {
          "@type": "LocalBusiness",
          "@id": absoluteUrl("/#business"),
          name: SITE.name,
          url: absoluteUrl("/"),
        },
        areaServed: areaServed(),
      },
    })),
  };
}
