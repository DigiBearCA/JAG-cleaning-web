import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { SNOW_REMOVAL } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SNOW_REMOVAL.meta.title,
  description: SNOW_REMOVAL.meta.description,
  path: SNOW_REMOVAL.path,
});

export default function SnowRemovalPage() {
  return <ServicePageTemplate content={SNOW_REMOVAL} />;
}
