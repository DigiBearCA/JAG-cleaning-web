import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const TITLE_TEMPLATE = `%s | ${SITE.name}`;

/**
 * Browser UI colour for the viewport export. Meta tags cannot read CSS variables, so this
 * mirrors --bg from src/styles/palettes.css (identical in palettes A and B).
 */
export const THEME_COLOR = "rgb(247, 249, 250)";

export interface PageMetadataInput {
  /** Title before the template is applied, unless `absoluteTitle` is true. */
  readonly title: string;
  readonly description: string;
  /** Site path starting with "/", used for the canonical URL and og:url. */
  readonly path: string;
  /** Use the title as-is (home page) instead of applying the template. */
  readonly absoluteTitle?: boolean;
}

/** Per-page metadata: canonical URL, Open Graph (en_CA), and a large Twitter card. */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : TITLE_TEMPLATE.replace("%s", title);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
