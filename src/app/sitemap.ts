import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/contact-links";

/** Every indexable route. Service details live as sections of /services (one URL). */
const ROUTES = ["/", "/services", "/contact", "/privacy-policy", "/terms"];

// No lastModified, changeFrequency, or priority: Google ignores the last two, and a
// hard-coded date would claim changes that never happened.
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({ url: absoluteUrl(path) }));
}
