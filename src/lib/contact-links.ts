import { SITE } from "@/config/site";

/** `tel:` link for the business phone number. */
export function telHref(): string {
  return `tel:${SITE.phone.e164}`;
}

/** `mailto:` link for the business email, with an optional subject line. */
export function mailtoHref(subject?: string): string {
  const base = `mailto:${SITE.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

/** WhatsApp click-to-chat link with a pre-filled message. */
export function whatsappHref(message: string = SITE.whatsapp.defaultMessage): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Google Maps embed URL for the contact page iframe (no API key needed). */
export function mapEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`;
}

/** Google Maps link that opens the same place in a new tab or the Maps app. */
export function mapOpenUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.mapQuery)}`;
}

/** Absolute URL for a site path, built from SITE.url. */
export function absoluteUrl(path: string = "/"): string {
  return new URL(path, SITE.url).toString();
}
