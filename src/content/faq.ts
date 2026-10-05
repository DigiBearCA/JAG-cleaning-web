import type { FaqItem } from "./types";

export const HOME_FAQ: ReadonlyArray<FaqItem> = [
  {
    id: "quote-cost",
    question: "How much does a quote cost?",
    answer: "Nothing. Quotes are free. Send us a message or call, and we will get back to you with a clear quote.",
  },
  {
    id: "supplies",
    question: "Do you bring your own supplies?",
    answer: "Yes. We bring our own cleaning supplies and equipment. If you prefer particular products, just let us know.",
  },
  {
    id: "insured",
    question: "Are you insured?",
    answer: "Yes, JAAG is insured. If you need details for your property or building, ask when you request your quote.",
  },
  {
    id: "areas",
    question: "Which areas do you serve?",
    answer: "We currently serve Edmonton. If you are just outside the city, send us a message and we will let you know if we can help.",
  },
  {
    id: "one-time-or-recurring",
    question: "Can I book one-time or recurring service?",
    answer: "Both. Book a single visit or set up a regular schedule that suits you.",
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
    answer: "Put away personal items and valuables so we can clean every surface.",
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
    answer: "Daily, weekly, or a custom schedule. We agree it with you in your quote.",
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
    answer: "We agree the trigger with you in your quote, so you know what to expect.",
  },
];
