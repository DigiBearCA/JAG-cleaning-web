import { SITE } from "@/config/site";
import { absoluteUrl } from "@/lib/contact-links";
import { getEnabledServices } from "@/content/services";

/** JSON-LD is plain JSON; this keeps the builders typed without a schema library. */
export type JsonLdValue = string | number | boolean | null | JsonLdObject | ReadonlyArray<JsonLdValue>;
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
 * Phone, email, and social profiles are only added once SITE.contactVerified is true.
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
  };
}

export interface ServiceSchemaInput {
  readonly name: string;
  readonly serviceType: string;
  readonly description: string;
  readonly path: string;
}

/** Service page schema, with the provider referencing the business by name and URL. */
export function serviceSchema({ name, serviceType, description, path }: ServiceSchemaInput): JsonLdObject {
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
