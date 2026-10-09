import type { ReactNode } from "react";
import { CheckIcon, Icon, type IconName } from "@/components/icons";
import { SITE } from "@/config/site";
import { CONTACT_DETAILS } from "@/content/contact";
import { mailtoHref, telHref, whatsappHref } from "@/lib/contact-links";

const LINK_CLASSES =
  "font-medium text-primary underline-offset-4 transition duration-150 ease-brand hover:underline break-words";

function DetailRow({
  icon,
  label,
  children,
}: {
  readonly icon: IconName;
  readonly label: string;
  readonly children: ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-pill bg-chip text-chip-fg"
      >
        <Icon name={icon} size={20} />
      </span>
      <div className="flex min-w-0 flex-col pt-0.5">
        <span className="type-small text-ink-muted">{label}</span>
        <span className="type-body text-ink">{children}</span>
      </div>
    </li>
  );
}

/** Contact details list. */
export function ContactDetails() {
  const { labels } = CONTACT_DETAILS;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 id="contact-details-title" className="type-h2 text-primary">
          {CONTACT_DETAILS.title}
        </h2>
        <p className="max-w-prose type-body text-ink-muted">
          {CONTACT_DETAILS.intro}
        </p>
      </div>

      <ul
        className="flex flex-col gap-5"
        aria-labelledby="contact-details-title"
      >
        <DetailRow icon="phone" label={labels.phone}>
          <a href={telHref()} className={LINK_CLASSES}>
            {SITE.phone.display}
          </a>
        </DetailRow>
        <DetailRow icon="whatsapp" label={labels.whatsapp}>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            {labels.whatsappLink}
          </a>
        </DetailRow>
        <DetailRow icon="mail" label={labels.email}>
          <a href={mailtoHref()} className={LINK_CLASSES}>
            {SITE.email}
          </a>
        </DetailRow>
        <DetailRow icon="clock" label={labels.hours}>
          {SITE.hours}
        </DetailRow>
        <DetailRow icon="mapPin" label={labels.area}>
          {labels.areaText}
        </DetailRow>
        {SITE.showAddressText ? (
          <DetailRow icon="building" label={labels.address}>
            {SITE.address.line}
          </DetailRow>
        ) : null}
      </ul>

      <div className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 text-ink">
        <h3 className="type-h4 text-primary">{CONTACT_DETAILS.include.title}</h3>
        <ul className="flex flex-col gap-2">
          {CONTACT_DETAILS.include.items.map((item) => (
            <li key={item} className="flex items-start gap-3 type-body text-ink">
              <CheckIcon size={20} className="mt-0.75 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="flex flex-col gap-3">
        <h3 className="type-small font-medium text-ink">{labels.social}</h3>
        <ul className="flex gap-3">
          <li>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${SITE.shortName} on Instagram`} className={SOCIAL_CLASSES}>
              <size={20} />
            </a>
          </li>
          <li>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${SITE.shortName} on Facebook`} className={SOCIAL_CLASSES}>
              <size={20} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
