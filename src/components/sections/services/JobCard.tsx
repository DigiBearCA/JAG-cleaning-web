import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { Service } from "@/content/services";

export interface JobCardProps {
  readonly service: Service;
  readonly number: string;
  readonly illustration: ReactNode;
  readonly isEven: boolean;
}

function Divider() {
  return (
    <div className="relative h-12 flex items-center overflow-hidden">
      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-line" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-bg rounded-r-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-bg rounded-l-full" />
    </div>
  );
}

export function JobCard({
  service,
  number,
  illustration,
  isEven,
}: JobCardProps) {
  const contentOrder = isEven ? "md:order-1" : "md:order-2";
  const illusOrder = isEven ? "md:order-2" : "md:order-1";

  return (
    <div
      id={service.slug}
      className="bg-white rounded-panel overflow-hidden shadow-sm flex flex-col mb-16 md:mb-24 last:mb-0"
    >
      <div className="flex flex-col md:flex-row">
        <div
          className={`w-full md:w-5/12 relative bg-alt ${illusOrder} flex items-stretch`}
        >
          <div className="w-full h-full object-cover">{illustration}</div>
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-pill shadow-sm">
            <span className="type-eyebrow text-alt-heading">Job {number}</span>
          </div>
        </div>

        <div
          className={`w-full md:w-7/12 p-4 md:p-6 pb-0 flex flex-col justify-center ${contentOrder}`}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-alt flex items-center justify-center text-alt-heading">
              <Icon name={service.icon} className="w-6 h-6" />
            </div>
            <h3 className="type-h3 text-ink">{service.name}</h3>
          </div>

          {/* <p className="type-lead text-ink font-medium mb-4">
            {service.tagline}
          </p> */}
          <p className="type-body text-ink-muted mb-6">{service.description}</p>

          <div className="bg-alt p-4 md:p-6 rounded-card mt-auto">
            <h4 className="type-eyebrow text-alt-heading mb-4">Included</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="check"
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  />
                  <span className="type-body text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      <div className="p-4 md:p-6 pt-0!">
        <h4 className="type-eyebrow text-ink mb-4">How it works</h4>

        <div className="relative mb-3">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-line" />
          <div className="md:hidden absolute top-6 bottom-6 left-6 w-0.5 bg-line" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between relative">
            {service.flow.map((step, i) => (
              <div
                key={i}
                className="flex flex-row md:flex-col items-start md:items-center gap-4 md:text-center md:flex-1"
              >
                <div className="w-12 h-12 rounded-full bg-alt flex items-center justify-center text-alt-heading font-medium type-small shrink-0 relative z-10">
                  {i + 1}
                </div>
                <div>
                  <div className="type-button text-ink mb-1">{step.title}</div>
                  <div className="type-small text-ink-muted">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 md:gap-6 pt-3 border-t border-line">
          <a
            href="#"
            className="flex h-12 items-center justify-center gap-2 rounded-pill bg-alt px-5 md:px-7 type-button text-alt-heading transition-colors hover:bg-alt/80"
          >
            <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            <span className="md:hidden">Back</span>
            <span className="hidden md:inline">Back to all services</span>
          </a>
          <Button
            variant="accent"
            href="#quote"
            data-quote-service={service.slug}
          >
            Get a free quote
          </Button>
        </div>
      </div>
    </div>
  );
}
