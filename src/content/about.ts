import type { FeatureCard, SectionCopy } from "./types";

export const ABOUT_META = {
  title: "About JAAG: Local Edmonton Contracting & Constructions",
  description:
    "JAAG is a new Edmonton, Alberta company offering home and business cleaning plus snow removal. Insured, local, and focused on reliable service all year.",
} as const;

export const ABOUT_HERO = {
  eyebrow: "About us",
  title: "About JAAG",
  lead: "A local Edmonton team for cleaning inside and snow removal outside, through every season.",
} as const;

export const OUR_STORY: SectionCopy & {
  readonly paragraphs: ReadonlyArray<string>;
} = {
  title: "Our story",
  // TODO(client): owner story and photo
  paragraphs: [
    "JAAG Contracting & Constructions is a new company in Edmonton, Alberta. We clean homes and businesses, and we clear snow when winter arrives.",
    "We started JAAG to give people one reliable team through every season: someone to keep the inside clean all year, and to clear the driveway and walkways when the snow comes.",
    "Quotes are free, we are insured, and we bring our own supplies and equipment.",
  ],
};

export const VALUES: SectionCopy & {
  readonly cards: ReadonlyArray<FeatureCard>;
} = {
  title: "What we stand for",
  cards: [
    {
      title: "Reliable",
      text: "We show up when we say we will, and let you know early if anything changes.",
      icon: "clock",
    },
    {
      title: "Careful",
      text: "We take care with your home, your workplace, and your belongings.",
      icon: "shield",
    },
    {
      title: "Straightforward",
      text: "Clear quotes, plain answers, and no pressure.",
      icon: "receipt",
    },
    {
      title: "Local",
      text: "An Edmonton team serving Edmonton homes and businesses.",
      icon: "mapPin",
    },
  ],
};

export const WHAT_WE_DO: SectionCopy = {
  title: "What we do",
  lead: "Three services from one team. Pick the one you need to see the details.",
};
