import { Section } from "@/components/ui/Section";

export function EveryJobStrip() {
  return (
    <Section tone="dark" className="py-12">
      <div className="text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <p className="type-h3 text-on-dark">On every job:</p>
        <p className="type-lead text-on-dark-muted">Clear communication, careful work, and a tidy finish.</p>
      </div>
    </Section>
  );
}

