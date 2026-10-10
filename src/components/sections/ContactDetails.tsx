import type { ReactNode } from "react";
import { CheckIcon, Icon, type IconName } from "@/components/icons";
import { SITE } from "@/config/site";
import { CONTACT_DETAILS } from "@/content/contact";
import { mailtoHref, telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";

function DetailRow({
  icon,
  label,
  children,
  tone = "base",
}: {
  readonly icon: IconName;
  readonly label: string;
  readonly children: ReactNode;
  readonly tone?: "base" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className={cx(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-pill",
          isDark ? "bg-dark-card text-accent" : "bg-chip text-chip-fg",
        )}
      >
        <Icon name={icon} size={20} />
      </span>
      <div className="flex min-w-0 flex-col pt-0.5">
        <span className={cx("type-small", isDark ? "text-on-dark-muted" : "text-ink-muted")}>
          {label}
        </span>
        <span className={cx("type-body", isDark ? "text-on-dark" : "text-ink")}>
          {children}
        </span>
      </div>
    </li>
  );
}

export interface ContactDetailsProps {
  readonly tone?: "base" | "dark";
}

/** Contact details list. Supports base (light) and dark tones. */
export function ContactDetails({ tone = "base" }: ContactDetailsProps) {
  const { labels } = CONTACT_DETAILS;
  const isDark = tone === "dark";

  const linkClasses = cx(
    "font-medium underline-offset-4 transition duration-150 ease-brand hover:underline break-words",
    isDark ? "text-on-dark hover:text-accent" : "text-primary",
  );

  return (
    <div className={cx("flex flex-col gap-8", isDark && "surface-dark")}>
      <div className="flex flex-col gap-3">
        <h2
          id="contact-details-title"
          className={cx("type-h2", isDark ? "text-on-dark" : "text-primary")}
        >
          {CONTACT_DETAILS.title}
        </h2>
        <p className={cx("max-w-prose type-body", isDark ? "text-on-dark-muted" : "text-ink-muted")}>
          {CONTACT_DETAILS.intro}
        </p>
      </div>

      <ul
        className="flex flex-col gap-5"
        aria-labelledby="contact-details-title"
      >
        <DetailRow icon="phone" label={labels.phone} tone={tone}>
          <a href={telHref()} className={linkClasses}>
            {SITE.phone.display}
          </a>
        </DetailRow>
        <DetailRow icon="whatsapp" label={labels.whatsapp} tone={tone}>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {labels.whatsappLink}
          </a>
        </DetailRow>
        <DetailRow icon="mail" label={labels.email} tone={tone}>
          <a href={mailtoHref()} className={linkClasses}>
            {SITE.email}
          </a>
        </DetailRow>
        <DetailRow icon="clock" label={labels.hours} tone={tone}>
          {SITE.hours}
        </DetailRow>
        <DetailRow icon="mapPin" label={labels.area} tone={tone}>
          {labels.areaText}
        </DetailRow>
        {SITE.showAddressText ? (
          <DetailRow icon="building" label={labels.address} tone={tone}>
            {SITE.address.line}
          </DetailRow>
        ) : null}
      </ul>

      <div
        className={cx(
          "flex flex-col gap-3 rounded-card border p-6",
          isDark
            ? "border-on-dark/15 bg-dark-card text-on-dark"
            : "border-line bg-white text-ink",
        )}
      >
        <h3 className={cx("type-h4", isDark ? "text-on-dark" : "text-primary")}>
          {CONTACT_DETAILS.include.title}
        </h3>
        <ul className="flex flex-col gap-2">
          {CONTACT_DETAILS.include.items.map((item) => (
            <li
              key={item}
              className={cx("flex items-start gap-3 type-body", isDark ? "text-on-dark" : "text-ink")}
            >
              <CheckIcon
                size={20}
                className={cx("mt-0.75 shrink-0", isDark ? "text-accent" : "text-primary")}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
