import { SITE } from "@/config/site";

export const CONTACT_META = {
  title: `Contact ${SITE.shortName}: Free Quotes in Edmonton, AB`,
  description: `Contact ${SITE.shortName} for a free quote on commercial cleaning, floor care, renovation, or snow removal in Edmonton, AB. Call, send a WhatsApp message, or use our form.`,
} as const;

export const CONTACT_HERO = {
  eyebrow: "Contact",
  title: "Contact us",
  lead: "Tell us what you need and we'll get back to you. We serve businesses, offices, and buildings across Edmonton, Alberta.",
} as const;

export const CONTACT_DETAILS = {
  title: "Get in touch",
  intro: "Call, send a WhatsApp message, or email us. Quotes are free.",
  labels: {
    phone: "Phone",
    whatsapp: "WhatsApp",
    whatsappLink: "Message us on WhatsApp",
    email: "Email",
    hours: "Hours",
    area: "Service area",
    areaText: "Serving Edmonton, Alberta",
    address: "Address",
    social: "Follow us",
  },
  /** Short checklist under the contact details. */
  include: {
    title: "What to include in your message",
    items: [
      "Type of space (office, building, or parking lot)",
      "Rough size or number of floors",
      "Your preferred days and times",
      "Any problem areas or special requests",
    ],
  },
  mapTitle: "Map of our area in Edmonton, Alberta",
  mapLink: "Open in Maps",
} as const;

export const FORM_CARD_COPY = {
  title: "Request your free quote",
  lead: "Fill in a few details and we'll get back to you.",
} as const;

export const NOT_FOUND_COPY = {
  title: "We couldn't find that page",
  lead: "The page may have moved, or the link may be out of date. Head back to the main page or get in touch and we'll help.",
  home: "Home",
  contact: "Contact us",
} as const;
