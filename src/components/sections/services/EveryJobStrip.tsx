import { Section } from "@/components/ui/Section";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/icons";

const POINTS = [
  { text: "A free quote first", icon: "receipt" as const },
  { text: "A clear scope before work begins", icon: "check" as const },
  { text: "A tidy site when we leave", icon: "sparkle" as const },
];

export function EveryJobStrip() {
  return (
    <Section tone="dark" className="py-16 md:py-24">
      <SectionHeading title="On every job" align="center" tone="dark" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {POINTS.map((point) => (
          <div
            key={point.text}
            className="rounded-card bg-dark-card p-6 flex items-center gap-4 border border-on-dark/10"
          >
            <div className="flex items-center justify-center rounded-full bg-accent/10 p-3 text-accent shrink-0">
              <Icon name={point.icon} size={24} />
            </div>
            <p className="type-body text-on-dark font-medium">{point.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
