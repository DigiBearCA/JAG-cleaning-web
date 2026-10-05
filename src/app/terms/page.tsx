import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { TERMS } from "@/content/legal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: TERMS.title,
  description: TERMS.metaDescription,
  path: TERMS.path,
});

export default function TermsPage() {
  return <LegalPage document={TERMS} />;
}
