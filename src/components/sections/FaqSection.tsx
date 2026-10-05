import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/content/types";

export interface FaqSectionProps {
  readonly title: string;
  readonly lead?: string;
  readonly items: ReadonlyArray<FaqItem>;
}

/** FAQ on the base background with a centred heading and the accordion. */
export function FaqSection({ title, lead, items }: FaqSectionProps) {
  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading id="faq-title" title={title} lead={lead} align="center" />
      <Accordion items={items} className=" mt-10 " />
    </Section>
  );
}
