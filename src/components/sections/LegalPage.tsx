import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";
import type { LegalDocument } from "@/content/legal";
import { mailtoHref, telHref } from "@/lib/contact-links";

const DATE_FORMAT = new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" });

function formatDate(iso: string): string {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

const LINK_CLASSES = "font-medium text-primary underline underline-offset-4 transition duration-150 ease-brand hover:text-primary-hover";

/** Narrow (720px) readable column for the Privacy Policy and Terms. */
export function LegalPage({ document }: { readonly document: LegalDocument }) {
  return (
    <Container className="py-12 md:py-16">
      <article className=" flex  flex-col gap-10">
        <header className="flex flex-col gap-3">
          <h1 className="type-h1 text-primary">{document.title}</h1>
          <p className="type-small text-ink-muted">
            Last updated <time dateTime={document.lastUpdated}>{formatDate(document.lastUpdated)}</time>
          </p>
          <p className="type-lead text-ink">{document.intro}</p>
        </header>

        {document.sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-4">
            <h2 className="type-h3 text-primary">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body text-ink">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="flex list-disc flex-col gap-2 pl-6 type-body text-ink marker:text-primary">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.after?.map((paragraph) => (
              <p key={paragraph} className="type-body text-ink">
                {paragraph}
              </p>
            ))}
            {section.showContact ? (
              <p className="type-body text-ink">
                Email{" "}
                <a href={mailtoHref()} className={LINK_CLASSES}>
                  {SITE.email}
                </a>{" "}
                or call{" "}
                <a href={telHref()} className={LINK_CLASSES}>
                  {SITE.phone.display}
                </a>
                .
              </p>
            ) : null}
          </section>
        ))}
      </article>
    </Container>
  );
}
