import { Section } from "@/components/ui/Section";
import { JobIndex } from "./JobIndex";

export function Hero() {
  return (
    <Section tone="base" spacing="hero">
      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <h1 className="type-h1 mb-6 text-primary">Services</h1>
          <p className="type-lead text-ink-muted">
            Professional cleaning and snow removal for homes and businesses in
            Edmonton, Alberta. We bring our own supplies, provide clear upfront
            quotes, and leave your space ready to use.
          </p>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <JobIndex />
        </div>
      </div>
    </Section>
  );
}
