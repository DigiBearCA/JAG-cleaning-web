import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/contact-links";

/** Update when page content changes meaningfully. */
const LAST_MODIFIED = new Date("2026-10-05");

const ROUTES: ReadonlyArray<{
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: "monthly" | "yearly";
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
