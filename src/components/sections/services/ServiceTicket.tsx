import { Icon } from "@/components/icons";
import { CHAPTERS, type Service } from "@/content/services";

export interface ServiceTicketProps {
  readonly service: Service;
  readonly number: string;
}

/**
 * Server component rendering the full content of a service ticket inside the modal dialog.
 * Contains no image. Designed to fit without scrolling on target mobile and desktop viewports.
 * Uses semantic tokens so it looks correct in both Palette A and Palette B.
 */
export function ServiceTicket({ service, number }: ServiceTicketProps) {
  const chapter = CHAPTERS[service.chapter];

  return (
    <div className="flex flex-col md:flex-row w-full bg-white text-ink relative overflow-hidden">
      {/* Mobile top strip (below 768px) */}
      <div className="md:hidden bg-alt py-2 px-3 pr-12 flex flex-wrap items-center gap-1.5 shrink-0">
        <span className="type-small font-bold px-2 py-0.5 rounded-pill bg-alt-heading text-alt-bg leading-none">
          Job {number}
        </span>
        <span className="type-small font-medium px-2 py-0.5 rounded-pill border border-alt-heading/20 text-alt-heading leading-none">
          {chapter.title}
        </span>
        {service.audience.map((aud) => (
          <span
            key={aud}
            className="type-small font-medium px-2 py-0.5 rounded-pill bg-alt-heading/10 text-alt-heading leading-none"
          >
            {aud}
          </span>
        ))}
      </div>

      {/* Mobile horizontal dashed perforation with notch end caps */}
      <div className="md:hidden relative border-t-2 border-dashed border-line shrink-0">
        <span
          aria-hidden="true"
          className="absolute -top-2 left-0 -translate-x-1/2 size-4 rounded-full bg-dark/60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute -top-2 right-0 translate-x-1/2 size-4 rounded-full bg-dark/60 pointer-events-none"
        />
      </div>

      {/* Desktop stub (left 28%, 768px and up) */}
      <aside
        aria-label="Service ticket stub"
        className="hidden md:flex md:w-[28%] bg-alt p-6 lg:p-7 flex-col justify-between shrink-0 select-none relative"
      >
        <div>
          <div className="type-h1 text-alt-heading font-serif leading-none">
            {number}
          </div>
          <div className="mt-3">
            <span className="inline-block rounded-pill border border-alt-heading/20 bg-alt-heading/10 text-alt-heading px-3 py-1 type-small font-medium">
              {chapter.title}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-6 flex flex-col gap-2">
          <span className="type-small text-alt-text/75 uppercase tracking-wider font-semibold">
            Audience
          </span>
          <div className="flex flex-col gap-1.5">
            {service.audience.map((aud) => (
              <span
                key={aud}
                className="inline-block self-start rounded-pill border border-alt-heading/15 bg-alt-heading/10 text-alt-heading px-3 py-0.5 type-small font-medium"
              >
                {aud}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Desktop vertical dashed perforation with notch end caps */}
      <div className="hidden md:block relative border-l-2 border-dashed border-line shrink-0">
        <span
          aria-hidden="true"
          className="absolute top-0 -left-2 -translate-y-1/2 size-4 rounded-full bg-dark/60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 -left-2 translate-y-1/2 size-4 rounded-full bg-dark/60 pointer-events-none"
        />
      </div>

      {/* Main ticket body (right on desktop, bottom on mobile) */}
      <div className="flex-1 p-3.5 md:p-6 lg:p-7 flex flex-col justify-between min-w-0">
        <div>
          {/* Service Name & Descriptions */}
          <div className="pr-10 md:pr-12">
            <h2
              id={`${service.slug}-ticket-title`}
              className="type-h3 md:type-h2 text-primary leading-tight"
            >
              {service.name}
            </h2>
            {/* <p className="type-small text-ink-muted mt-0.5 leading-snug">
              {service.tagline}
            </p> */}
          </div>

          <p
            id={`${service.slug}-ticket-desc`}
            className="type-small md:type-body text-ink mt-1.5 md:mt-2.5 leading-snug"
          >
            {service.description}
          </p>

          {/* What's Included */}
          <div className="mt-2.5 md:mt-4">
            <h3 className="type-small uppercase tracking-wider font-semibold text-ink-muted mb-1 md:mb-1.5">
              What&apos;s included
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-1">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-1.5 md:gap-2">
                  <Icon
                    name="check"
                    size={16}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="type-small text-ink leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How It Works Flow */}
          <div className="mt-2.5 md:mt-4">
            <h3 className="type-small uppercase tracking-wider font-semibold text-ink-muted mb-1.5 md:mb-2">
              How it works
            </h3>

            {/* Desktop: horizontal 4-stop line */}
            <div className="hidden md:block relative">
              <div
                aria-hidden="true"
                className="absolute top-4.5 left-5 right-5 h-0.5 bg-line"
              />
              <ol className="relative grid grid-cols-4 gap-3">
                {service.flow.map((step, idx) => {
                  const isLast = idx === service.flow.length - 1;
                  return (
                    <li key={step.title} className="flex flex-col items-start">
                      <div
                        className={`size-9 rounded-full flex items-center justify-center type-small font-semibold relative z-10 shrink-0 ${
                          isLast
                            ? "bg-accent text-on-accent"
                            : "bg-chip text-chip-fg"
                        }`}
                      >
                        {isLast ? <Icon name="check" size={18} /> : idx + 1}
                      </div>
                      <div className="type-small font-medium text-ink mt-1.5 leading-snug">
                        {step.title}
                      </div>
                      <div className="type-small text-ink-muted mt-0.5 leading-snug">
                        {step.text}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile: 2x2 grid */}
            <ol className="md:hidden grid grid-cols-2 gap-x-2.5 gap-y-1.5">
              {service.flow.map((step, idx) => {
                const isLast = idx === service.flow.length - 1;
                return (
                  <li key={step.title} className="flex items-start gap-1.5">
                    <div
                      className={`size-6 rounded-full flex items-center justify-center type-small font-semibold shrink-0 mt-0.5 ${
                        isLast
                          ? "bg-accent text-on-accent"
                          : "bg-chip text-chip-fg"
                      }`}
                    >
                      {isLast ? <Icon name="check" size={14} /> : idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="type-small font-medium text-ink leading-tight">
                        {step.title}
                      </div>
                      <div className="type-small text-ink-muted leading-tight mt-0.5 line-clamp-2">
                        {step.text}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-2.5 md:mt-4 pt-2 md:pt-3 border-t border-line">
          <a
            href="#quote"
            data-quote-service={service.slug}
            className="flex w-full h-10 md:h-11 items-center justify-center rounded-pill bg-accent px-4 md:px-6 type-button text-on-accent transition duration-150 ease-brand hover:bg-accent-hover text-center"
          >
            Get a free quote for {service.name}
          </a>
        </div>
      </div>
    </div>
  );
}
