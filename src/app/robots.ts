import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { absoluteUrl } from "@/lib/contact-links";

/**
 * While SITE.indexable is false (placeholders still live), crawlers are told to stay out.
 * At launch, flipping it to true allows everything.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE.indexable
      ? { userAgent: "*", allow: "/", disallow: "/api/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
