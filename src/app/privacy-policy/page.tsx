import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { PRIVACY_POLICY } from "@/content/legal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.metaDescription,
  path: PRIVACY_POLICY.path,
});

export default function PrivacyPolicyPage() {
  return <LegalPage document={PRIVACY_POLICY} />;
}
