import type {
  FeatureCard,
  LinkedFeatureCard,
  SectionCopy,
  Step,
} from "./types";

export const HOME_META = {
  title: "Contracting & Constructions in Edmonton, AB | JAAG",
  description:
    "JAAG offers residential and commercial cleaning and snow removal in Edmonton, Alberta. Free quotes from an insured local team. Request yours today.",
} as const;

export const HERO = {
  eyebrow: "Serving Edmonton",
  title: "Clean homes & businesses, Clear driveways all winter.",
  lead: "Reliable cleaning for homes and businesses, and snow removal when winter hits.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call us",
  whatsappPrompt: "Prefer WhatsApp?",
  whatsappLink: "Message us",
  trustChips: [
    "Free quotes",
    "Insured",
    "Edmonton-based",
    "Year-round service",
  ],
  illustrationLabel:
    "Illustration of a snow-covered house and office building on a winter day",
} as const;

export const WHO_WE_SERVE: SectionCopy & {
  readonly cards: ReadonlyArray<LinkedFeatureCard>;
} = {
  title: "Who we serve",
  lead: "Cleaning inside, snow removal outside, one local team.",
  cards: [
    {
      title: "Homes",
      text: "Recurring, deep, and move-in or move-out cleaning.",
      icon: "home",
      href: "/services#residential-cleaning",
      linkLabel: "Learn more",
      linkHiddenText: "about home cleaning",
    },
    {
      title: "Businesses",
      text: "Offices, shared spaces, and post-construction cleaning.",
      icon: "building",
      href: "/services#office-cleaning",
      linkLabel: "Learn more",
      linkHiddenText: "about commercial cleaning",
    },
    {
      title: "Snow Removal",
      text: "Driveways, walkways, and parking lots all winter.",
      icon: "snowflake",
      href: "/services",
      linkLabel: "Learn more",
      linkHiddenText: "about snow removal",
    },
  ],
};

export const HOW_IT_WORKS: SectionCopy & {
  readonly steps: ReadonlyArray<Step>;
} = {
  title: "How it works",
  steps: [
    {
      title: "Tell us what you need",
      text: "Send a quick message or give us a call.",
    },
    {
      title: "Get your free quote",
      text: "We reply with a clear quote before any work starts.",
    },
    {
      title: "We take care of it",
      text: "Our team shows up and gets it done.",
    },
  ],
};

export const WHY_JAAG: SectionCopy & {
  readonly cards: ReadonlyArray<FeatureCard>;
} = {
  title: "Why JAAG",
  lead: "We bring professionalism, consistency, and care to every job site. Our team handles the details so you don't have to.",
  cards: [
    {
      title: "Reliable schedule",
      text: "We show up when we say we will, and tell you early if plans change.",
      icon: "clock",
    },
    {
      title: "Careful team",
      text: "We treat your home or workplace the way we would want ours treated.",
      icon: "shield",
    },
    {
      title: "Year-round service",
      text: "Cleaning indoors, snow removal outdoors. One team through every season.",
      icon: "calendar",
    },
    {
      title: "Clear pricing",
      text: "You get a clear quote before work begins. No surprises.",
      icon: "receipt",
    },
  ],
};

export const HOME_FAQ_COPY: SectionCopy = {
  title: "Frequently asked questions",
};

export const QUOTE_COPY = {
  title: "Get your free quote",
  lead: "Tell us what you need and we'll get back to you.",
  /** Shown under the lead. Only confirmed facts: free quotes, insured, own supplies. */
  reassurance:
    "Quotes are free. We are insured and bring our own supplies and equipment.",
  callLabel: "Call",
  whatsappLabel: "Message us on WhatsApp",
} as const;
