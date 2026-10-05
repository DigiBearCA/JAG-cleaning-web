import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { NOT_FOUND_COPY } from "@/content/contact";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section spacing="hero" labelledBy="not-found-title">
      <div className=" flex  flex-col items-center gap-6 text-center">
        <h1 id="not-found-title" className="type-h1 text-primary">
          {NOT_FOUND_COPY.title}
        </h1>
        <p className="type-lead text-ink-muted">{NOT_FOUND_COPY.lead}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">{NOT_FOUND_COPY.home}</Button>
          <Button href="/contact" variant="outline">
            {NOT_FOUND_COPY.contact}
          </Button>
        </div>
      </div>
    </Section>
  );
}
