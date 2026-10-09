import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/content/types";
import { SITE } from "@/config/site";
import { ShieldIcon, PhoneIcon } from "@/components/icons";

export interface FaqSectionProps {
  readonly title: string;
  readonly lead?: string;
  readonly items: ReadonlyArray<FaqItem>;
}

/** FAQ in a split layout: sticky heading and trust box on the left, accordion on the right. */
export function FaqSection({ title, lead, items }: FaqSectionProps) {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-4 lg:grid-cols-[2fr_3fr] lg:gap-6">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="faq-title" title={title} lead={lead} align="left" />
          
          <div className="flex flex-col gap-6 rounded-panel bg-alt p-6 sm:p-8">
            <h3 className="type-h4 text-alt-heading">Still have questions?</h3>
            
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-white text-primary shadow-sm">
                  <PhoneIcon size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="type-small font-medium text-alt-text">Give us a call</span>
                  <a href={`tel:${SITE.phone.e164}`} className="type-body font-medium text-primary hover:underline">
                    {SITE.phone.display}
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-white text-primary shadow-sm">
                  <ShieldIcon size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="type-small font-medium text-alt-text">Trusted & Insured</span>
                  <span className="type-body text-alt-text">{SITE.shortName} is fully insured for your peace of mind.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Accordion items={items} />
        </div>
      </div>
    </Section>
  );
}
