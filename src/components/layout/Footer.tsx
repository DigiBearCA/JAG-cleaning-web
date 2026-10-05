import Link from "next/link";
import type { ReactNode } from "react";
import { FacebookIcon, Icon, InstagramIcon, type IconName } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";
import { FOOTER_COMPANY, FOOTER_LEGAL } from "@/content/navigation";
import { getEnabledServices } from "@/content/services";
import { mailtoHref, telHref, whatsappHref } from "@/lib/contact-links";
import { Logo } from "./Logo";

const LINK_CLASSES =
  "inline-flex min-h-11 items-center gap-2 type-small text-on-dark-muted underline-offset-4 transition duration-150 ease-brand hover:text-on-dark hover:underline";

/** Computed once at build time; the footer is statically rendered. */
const YEAR = new Date().getFullYear();

function FooterColumn({ title, children }: { readonly title: string; readonly children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="type-h4 text-on-dark">{title}</h2>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

function ContactLink({ href, icon, children }: { readonly href: string; readonly icon: IconName; readonly children: ReactNode }) {
  const external = href.startsWith("https://");
  return (
    <li>
      <a href={href} className={LINK_CLASSES} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <Icon name={icon} size={18} className="shrink-0" />
        <span className="break-all">{children}</span>
      </a>
    </li>
  );
}

const SOCIAL_CLASSES =
  "inline-flex size-11 items-center justify-center rounded-pill border-[1.5px] border-on-dark-muted text-on-dark transition duration-150 ease-brand hover:border-on-dark hover:bg-on-dark/10";

/** Dark footer, square edges. Four columns on desktop, stacked on mobile. */
export function Footer() {
  return (
    <footer className="surface-dark bg-dark text-on-dark">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Logo tone="dark" className="self-start" />
            <p className="max-w-xs type-small text-on-dark-muted">
              {SITE.descriptor} in Edmonton, Alberta. Free quotes from an insured local team.
            </p>
          </div>

          <FooterColumn title="Services">
            {getEnabledServices().map((item) => (
              <li key={item.slug}>
                <Link href={`/services#${item.slug}`} className={LINK_CLASSES}>
                  {item.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {FOOTER_COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={LINK_CLASSES}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <div className="flex flex-col gap-3">
            <h2 className="type-h4 text-on-dark">Contact</h2>
            <ul className="flex flex-col">
              <ContactLink href={telHref()} icon="phone">
                {SITE.phone.display}
              </ContactLink>
              <ContactLink href={mailtoHref()} icon="mail">
                {SITE.email}
              </ContactLink>
              <ContactLink href={whatsappHref()} icon="whatsapp">
                WhatsApp
              </ContactLink>
            </ul>
            <ul className="flex gap-3 pt-1">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.shortName} on Instagram`}
                  className={SOCIAL_CLASSES}
                >
                  <InstagramIcon size={20} />
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.shortName} on Facebook`}
                  className={SOCIAL_CLASSES}
                >
                  <FacebookIcon size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-on-dark/16 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="type-small text-on-dark-muted">
            © {YEAR} {SITE.name}
          </p>
          <ul className="flex flex-wrap gap-x-6">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={LINK_CLASSES}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
