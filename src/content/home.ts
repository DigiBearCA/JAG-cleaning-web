import { SITE } from "@/config/site";
import type {
  FeatureCard,
  SectionCopy,
  Audience,
  Step,
} from "./types";

export const HOME_META = {
  title: `Commercial Cleaning in Edmonton, AB | ${SITE.shortName}`,
  description:
    "Commercial cleaning for Edmonton offices and buildings, plus floor and carpet care, apartment cleaning, and property services. Free quotes, insured, open 24/7.",
} as const;

export const HERO = {
  eyebrow: "Commercial cleaning in Edmonton",
  // Alternative 1: Cleaner offices. Better-kept buildings.
  // Alternative 2: One crew for your whole building.
  title: "Commercial cleaning for Edmonton offices and buildings.",
  lead: "Reliable cleaning, floor care, and property services for businesses, property managers, and apartment buildings. We bring our own supplies and equipment, and you get a free quote before any work begins. Apartment and condo cleaning is available too.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call us",
  whatsappPrompt: "Prefer WhatsApp?",
  whatsappLink: "Message us",
  trustChips: [
    "Free quotes",
    "Insured",
    "Edmonton-based",
    "Open 24/7",
  ],
} as const;

export const WHO_WE_SERVE: SectionCopy & {
  readonly lead: string;
  readonly popularForLabel: string;
} = {
  title: "Who we work with",
  lead: "From office floors to whole buildings, one local team handles the job from the first call to the final check. Pick the area closest to what you need and we'll take it from there.",
  popularForLabel: "Popular for",
};

// TODO(review): scope drafted from research and the client's list of work, client to confirm
export const AUDIENCES: ReadonlyArray<Audience> = [
  {
    id: "offices",
    category: "Business",
    title: "Offices and businesses",
    description: "Daily, weekly, or after-hours cleaning for offices and shared workspaces, planned around your working hours. We can clean evenings and weekends so your team never has to work around us.",
    popularFor: ["Offices", "After-hours cleaning", "Regular schedules"],
    href: "/services#office-cleaning",
    linkLabel: "Learn more",
    art: "office",
    enabled: true,
  },
  {
    id: "managers",
    category: "Buildings",
    title: "Property managers and building owners",
    description: "One reliable team for lobbies, hallways, washrooms, and common areas across your buildings. Agree on a schedule once and we keep to it, with floor care, carpet cleaning, and a clear quote up front.",
    popularFor: ["Common areas", "Floor and carpet care", "Scheduled visits"],
    href: "/services#maintenance-floor-cleaning",
    linkLabel: "Learn more",
    art: "manager",
    enabled: true,
  },
  {
    id: "apartments",
    category: "Apartments",
    title: "Apartments and condos",
    description: "Cleaning for apartment and condo buildings and for individual units, from a single refresh to a full move-in or move-out clean. We work around your building and your schedule.",
    popularFor: ["Move-in cleans", "Move-out cleans", "Unit cleaning"],
    href: "/services#residential-cleaning",
    linkLabel: "Learn more",
    art: "apartment",
    enabled: true,
  },
  {
    id: "build",
    category: "Build",
    title: "Construction and renovation sites",
    // TODO(client): confirm scope for build and demolition work
    description: "Cleanup and renovation support for commercial properties and job sites, from clearing debris to a tidy finish that is ready for the next step. Tell us what stage your project is at and we'll quote the right help.",
    popularFor: ["Site cleanup", "Post-construction", "Renovation"],
    href: "/services#cleanup",
    linkLabel: "Ask for a quote",
    art: "build",
    enabled: true,
  },
  {
    id: "winter",
    category: "Winter",
    title: "Winter property care",
    // TODO(client): confirm snow removal is still offered; set enabled to false to hide this card
    description: "Clear parking lots, entrances, and walkways all winter, so staff, tenants, and customers can get in and out safely. Choose a per-visit or seasonal plan and we'll set it up with you in your quote. Ice control with salt or sand is available on request.",
    popularFor: ["Parking lots", "Entrances", "Seasonal plans"],
    href: "/services#snow-removal",
    linkLabel: "Learn more",
    art: "winter",
    enabled: true,
  },
];

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
      text: "Send a quick message, call, or message us on WhatsApp. Tell us the type of space, roughly how big it is, and when you would like us to come. A photo helps, but it isn't required.",
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
      "Type of space (office, building, or parking lot)",
      "Rough size or number of floors",
      "Your preferred days and times",
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
    hours: SITE.hoursShort,
    quotes: "Free quotes",
  },
  cards: [
    {
      title: SITE.hoursShort,
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
      text: "We show up when we say we will, and we tell you early if plans change, so your team can plan around us. Regular customers get a steady routine they can count on.",
      icon: "calendar",
    },
    {
      title: "A careful team",
      text: "We treat your workplace or building the way we would want ours treated, and we leave every space clean and tidy.",
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
  /** Longer lead for the image-backed version on the home page. */
  imageLead:
    "Tell us what you need and we'll get back to you with a clear, free quote. You can also call or message us on WhatsApp any time, because we are open 24 hours a day, 7 days a week.",
  /** Check pills in the image-backed version. Only confirmed facts. */
  pills: ["Free quote", "Insured", SITE.hoursShort],
  /** Shown under the lead. Only confirmed facts: free quotes, insured, own supplies. */
  reassurance:
    "Quotes are free. We are insured and bring our own supplies and equipment.",
  callLabel: "Call",
  whatsappLabel: "Message us on WhatsApp",
} as const;
