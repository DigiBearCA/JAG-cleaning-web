import { SITE } from "@/config/site";
import type { FaqItem } from "./types";

export const HOME_FAQ: ReadonlyArray<FaqItem> = [
  {
    id: "quote-cost",
    question: "How much does a quote cost?",
    answer:
      "Nothing. Quotes are free. Send us a message or call, and we will get back to you with a clear quote, so you know the scope and price before any work begins.",
  },
  {
    id: "supplies",
    question: "Do you bring your own supplies?",
    answer:
      "Yes. We bring our own cleaning supplies and equipment, so there is nothing for you to buy or set up. If you prefer particular products, just let us know and we will work with them.",
  },
  {
    id: "insured",
    question: "Are you insured?",
    answer: `Yes, ${SITE.shortName} is insured, so you can book with confidence. If you need details for your property or building, ask when you request your quote and we will share them.`,
  },
  {
    id: "areas",
    question: "Which areas do you serve?",
    answer:
      "We currently serve Edmonton, for homes and businesses alike. If you are just outside the city, send us a message and we will let you know if we can help.",
  },
  {
    id: "one-time-or-recurring",
    question: "Can I book one-time or recurring service?",
    answer:
      "Both. Book a single visit, or set up a regular schedule that suits you. Tell us which you prefer when you ask for a quote and we will plan around it.",
  },
  {
    id: "hours",
    question: "What are your hours?",
    answer:
      "We are open 24 hours a day, 7 days a week. Call, message us on WhatsApp, or send the form whenever suits you.",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Call us, message us on WhatsApp, or fill in the short quote form on this page. We will confirm the details and a time with you.",
  },
  {
    id: "multiple-services",
    question: "Can I get a quote for more than one service?",
    answer:
      "Yes. Tell us everything you need in the form and we will quote it together, so you only have one conversation.",
  },
  {
    id: "need-to-be-home",
    question: "Do I need to be home?",
    answer:
      "Not always. We can arrange access that works for you, and we will agree on it before the visit.",
  },
  {
    id: "reschedule",
    question: "What if I need to reschedule?",
    // TODO(client): confirm rescheduling policy
    answer:
      "Let us know as early as you can and we will find a new time that works for you.",
  },
];

export const RESIDENTIAL_FAQ: ReadonlyArray<FaqItem> = [
  {
    id: "home-access",
    question: "Do I need to be home?",
    answer: "No. We can arrange access that works for you.",
  },
  {
    id: "home-prep",
    question: "What should I do before you arrive?",
    answer:
      "Put away personal items and valuables so we can clean every surface.",
  },
  {
    id: "home-extras",
    question: "Can I add extras?",
    answer: "Yes, tell us when you request your quote.",
  },
];

export const COMMERCIAL_FAQ: ReadonlyArray<FaqItem> = [
  {
    id: "commercial-frequency",
    question: "How often can you clean?",
    answer:
      "Daily, weekly, or a custom schedule. We agree it with you in your quote.",
  },
  {
    id: "commercial-after-hours",
    question: "Can you clean after hours?",
    answer: "Yes, evenings and weekends can be arranged.",
  },
  {
    id: "commercial-one-time",
    question: "Do you offer one-time cleans?",
    answer: "Yes, for example before an event or after a renovation.",
  },
];

export const SNOW_FAQ: ReadonlyArray<FaqItem> = [
  {
    id: "snow-season",
    question: "How do I sign up for the season?",
    answer: "Send a quote request and we will set up a winter plan with you.",
  },
  {
    id: "snow-ice",
    question: "Do you handle ice?",
    answer: "We can salt or sand on request.",
  },
  {
    id: "snow-trigger",
    question: "How much snow before you come?",
    answer:
      "We agree the trigger with you in your quote, so you know what to expect.",
  },
];
