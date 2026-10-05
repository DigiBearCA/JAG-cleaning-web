// TODO(client): have a legal professional review before launch

export interface LegalSection {
  readonly heading: string;
  readonly paragraphs: ReadonlyArray<string>;
  readonly list?: ReadonlyArray<string>;
  /** Paragraphs shown after the list. */
  readonly after?: ReadonlyArray<string>;
  /** Renders the business email and phone as links at the end of the section. */
  readonly showContact?: boolean;
}

export interface LegalDocument {
  readonly title: string;
  readonly path: string;
  readonly metaDescription: string;
  /** ISO date, shown as the last-updated line. */
  readonly lastUpdated: string;
  readonly intro: string;
  readonly sections: ReadonlyArray<LegalSection>;
}

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  path: "/privacy-policy",
  metaDescription:
    "How JAG Cleaning & Snow Removal collects, uses, and protects the information you share through our quote form, and how to ask us to remove it.",
  lastUpdated: "2026-10-05",
  intro:
    "JAG Cleaning & Snow Removal (\"JAG\", \"we\", \"us\") provides cleaning and snow removal in Edmonton, Alberta. This policy explains, in plain language, what information we collect through this website and what we do with it.",
  sections: [
    {
      heading: "What we collect",
      paragraphs: ["When you use our quote form, we collect:"],
      list: ["Your name", "Your phone number", "The service you need", "Any message you choose to add"],
      after: [
        "If you call, email, or message us on WhatsApp, we receive the details you share in that conversation.",
        "This website does not use advertising or analytics cookies. The map on our Contact page is provided by Google Maps, which may collect information under Google's own privacy policy.",
      ],
    },
    {
      heading: "Why we collect it",
      paragraphs: [
        "We use your information only to reply to your request, prepare your quote, and arrange any service you book with us.",
      ],
    },
    {
      heading: "How we share it",
      paragraphs: [
        "We do not sell or rent your personal information. We use an email delivery service to send form submissions to our inbox. That service handles your information only to deliver the message to us.",
        "We may share information if the law requires it.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep quote requests only as long as we need them to respond to you and to keep basic business records.",
      ],
    },
    {
      heading: "Asking us to remove your information",
      paragraphs: [
        "You can ask to see, correct, or remove the information we hold about you at any time. Email us and we will take care of your request.",
      ],
      showContact: true,
    },
    {
      heading: "Changes to this policy",
      paragraphs: ["We may update this policy from time to time. The date at the top of this page shows when it last changed."],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: "Terms of Service",
  path: "/terms",
  metaDescription:
    "These are the terms that apply when you request a free quote or book cleaning or snow removal with JAG Cleaning & Snow Removal in Edmonton, Alberta.",
  lastUpdated: "2026-10-05",
  intro:
    "These terms apply when you use this website or request a quote or service from JAG Cleaning & Snow Removal (\"JAG\", \"we\", \"us\") in Edmonton, Alberta. By booking a service, you agree to them.",
  sections: [
    {
      heading: "Quotes",
      paragraphs: [
        "Quotes are free. A quote is an estimate based on the information you give us. It becomes confirmed once we both agree on the work, the schedule, and the price.",
      ],
    },
    {
      heading: "Our services",
      paragraphs: [
        "We provide services as agreed in each confirmed quote. If the work turns out to be different from what was described, we will talk to you before going ahead.",
        "Snow removal timing depends on weather and road conditions. We will let you know if a visit is delayed.",
      ],
    },
    {
      heading: "Cancelling or rescheduling",
      paragraphs: [
        "To cancel or reschedule a visit, contact us as early as you can by phone, WhatsApp, or email. We will find another time that works for you.",
      ],
    },
    {
      heading: "Access and safety",
      paragraphs: [
        "Please make sure we can safely reach the areas to be serviced, and tell us about anything we should know, such as pets, alarms, or fragile items.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "We take care in our work and we are insured. To the extent the law allows, our liability for any claim related to a service is limited to the amount you paid for that service, and we are not responsible for indirect losses.",
      ],
    },
    {
      heading: "This website",
      paragraphs: [
        "We work to keep this website accurate, but service details can change. The details in your confirmed quote are what apply.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: ["These terms are governed by the laws of the Province of Alberta and the federal laws of Canada that apply there."],
    },
    {
      heading: "Questions",
      paragraphs: ["If you have a question about these terms, get in touch."],
      showContact: true,
    },
  ],
};
