import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { RESIDENTIAL } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: RESIDENTIAL.meta.title,
  description: RESIDENTIAL.meta.description,
  path: RESIDENTIAL.path,
});

export default function ResidentialCleaningPage() {
  return <ServicePageTemplate content={RESIDENTIAL} />;
}
