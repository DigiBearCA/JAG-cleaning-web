import { SITE } from "@/config/site";
import type {
  FeatureCard,
  SectionCopy,
  ServeCard,
  Step,
} from "./types";

export const HOME_META = {
  title: `${SITE.descriptor} in Edmonton, AB | ${SITE.shortName}`,
  description: `${SITE.shortName} offers residential and commercial cleaning and snow removal in Edmonton, Alberta. Free quotes from an insured local team. Request yours today.`,
} as const;

export const HERO = {
  eyebrow: "Serving Edmonton",
  title: "Clean homes & businesses, Clear driveways all winter.",
  lead: "Reliable cleaning for homes and businesses, and snow removal when winter hits. One local team, our own supplies and equipment, and a free quote before any work begins.",
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
} as const;

export const WHO_WE_SERVE: SectionCopy & {
  readonly lead: string;
  readonly popularForLabel: string;
  readonly cards: readonly [ServeCard, ServeCard, ServeCard];
} = {
  title: "Who we serve",
  lead: "Cleaning inside, snow removal outside, one local team. Whether it's your home, your workplace, or your driveway, we handle the job from the first call to the final check, so pick the area closest to what you need and we'll take it from there.",
  popularForLabel: "Popular for",
  cards: [
    {
      title: "Homes",
      // TODO(review): drafted from research, client to confirm (property types and plan frequencies)
      text: "Regular or one-time cleaning for houses, condos, and apartments. We bring our own supplies and equipment, so there is nothing for you to buy or set up. Choose a weekly, bi-weekly, or monthly plan, or book a single deep clean or a move-in and move-out clean.",
      image: "homes",
      popularFor: ["Recurring cleaning", "Deep cleans", "Move-in and move-out"],
      href: "/services#residential-cleaning",
      linkLabel: "Learn more",
      linkHiddenText: "about home cleaning",
    },
    {
      title: "Businesses",
      // TODO(review): drafted from research, client to confirm (apartment common areas)
      text: "Cleaning for offices and shared spaces, arranged around your working hours. We can clean after hours or on weekends so your team never has to work around us. Offices, apartment building common areas, and post-construction cleanup are all covered.",
      image: "businesses",
      popularFor: ["Offices", "Common areas", "Post-construction cleanup"],
      href: "/services#office-cleaning",
      linkLabel: "Learn more",
      linkHiddenText: "about commercial cleaning",
    },
    {
      title: "Snow Removal",
      // TODO(review): drafted from research, client to confirm (per-visit and seasonal plans)
      text: "Clear driveways, walkways, and parking lots all winter, so you can get in and out safely. Choose a per-visit or seasonal plan and we'll set it up with you in your quote. Ice control with salt or sand is available on request.",
      image: "snow",
      popularFor: ["Driveways", "Parking lots", "Seasonal plans"],
      href: "/services",
      linkLabel: "Learn more",
      linkHiddenText: "about snow removal",
    },
  ],
};

export const HOW_IT_WORKS: SectionCopy & {
  readonly steps: ReadonlyArray<Step>;
  /** "What to have ready" card, shown on the home page only. */
  readonly prep: {
    readonly title: string;
    readonly items: ReadonlyArray<string>;
    readonly note: string;
  };
} = {
  title: "How it works",
  steps: [
    {
      title: "Tell us what you need",
      text: "Send a quick message, give us a call, or message us on WhatsApp. Tell us the type of space, roughly how big it is, and when you would like us to come. A photo helps, but it isn't required.",
    },
    {
      title: "Get your free quote",
      text: "We review the details and reply with a clear quote before any work starts. Quotes are free, so you can compare and decide in your own time.",
    },
    {
      title: "We take care of it",
      text: "Our team shows up with its own supplies and equipment and gets it done. When we finish, we check the result with you and leave the space tidy.",
    },
  ],
  prep: {
    title: "What to have ready for your quote",
    items: [
      "Type of space (home, office, or driveway)",
      "Rough size or number of rooms",
      "Your preferred day and time",
      "Any problem areas or special requests",
    ],
    note: "Not sure? Just tell us what you need and we'll ask the rest.",
  },
};

export const WHY_JAAG: SectionCopy & {
  readonly lead: string;
  readonly badges: {
    readonly hours: string;
    readonly quotes: string;
  };
  readonly cards: ReadonlyArray<FeatureCard>;
} = {
  title: `Why ${SITE.shortName}`,
  lead: "We bring professionalism, consistency, and care to every job site, and we keep things simple: a clear quote, a team that shows up, and work that is checked before we leave. You deal with one local company from the first call to the final walk-through, and our team handles the details so you don't have to.",
  badges: {
    hours: "Open 24/7",
    quotes: "Free quotes",
  },
  cards: [
    {
      title: "Open 24/7",
      text: "Call or message us whenever it suits you, any day of the week. We are open 24 hours a day, 7 days a week, with cleaning indoors and snow removal outdoors through every season.",
      icon: "clock",
    },
    {
      title: "Free, clear quotes",
      text: "Every quote is free, and you know the scope and the price before any work begins. No surprises later.",
      icon: "receipt",
    },
    {
      title: "Insured",
      text: `${SITE.shortName} is insured, so you can book with confidence. If you need details for your property or building, ask when you request your quote.`,
      icon: "shield",
    },
    {
      title: "Our own supplies and equipment",
      text: "We bring everything needed to do the job, so there is nothing for you to buy, borrow, or set up.",
      icon: "broom",
    },
    {
      title: "A reliable schedule",
      text: "We show up when we say we will, and we tell you early if plans change. Regular customers get a steady routine they can count on.",
      icon: "calendar",
    },
    {
      title: "A careful team",
      text: "We treat your home or workplace the way we would want ours treated, and we leave every space clean and tidy.",
      icon: "sparkle",
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
