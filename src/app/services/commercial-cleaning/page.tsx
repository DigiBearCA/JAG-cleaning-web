import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { COMMERCIAL } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: COMMERCIAL.meta.title,
  description: COMMERCIAL.meta.description,
  path: COMMERCIAL.path,
});

export default function CommercialCleaningPage() {
  return <ServicePageTemplate content={COMMERCIAL} />;
}
