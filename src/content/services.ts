import { COMMERCIAL_FAQ, RESIDENTIAL_FAQ, SNOW_FAQ } from "./faq";
import type { ServicePageContent } from "./types";

export const RESIDENTIAL: ServicePageContent = {
  slug: "residential-cleaning",
  path: "/services/residential-cleaning",
  meta: {
    title: "House Cleaning in Edmonton, AB",
    description:
      "Regular, deep, and move-in or move-out cleaning for Edmonton homes, condos, and apartments. Insured local team with free quotes. Get your quote today.",
  },
  schema: {
    name: "Residential Cleaning",
    serviceType: "Residential cleaning",
  },
  hero: {
    eyebrow: "Residential cleaning",
    title: "Home cleaning in Edmonton",
    lead: "Regular or one-time cleaning for houses, condos, and apartments, done by a reliable local team. We work in homes across Edmonton, Alberta.",
    scene: "home",
    sceneLabel: "Illustration of a house with a clean, bright window",
  },
  included: {
    title: "What's included",
    lead: "Our standard clean covers the rooms you use every day.",
    // TODO(review): scope drafted from competitor research, client may adjust
    groups: [
      {
        title: "Kitchen",
        items: [
          { label: "Counters and sink" },
          { label: "Stovetop" },
          { label: "Outside of appliances" },
          { label: "Cabinet fronts" },
          { label: "Floors" },
        ],
      },
      {
        title: "Bathrooms",
        items: [
          { label: "Toilets" },
          { label: "Tubs and showers" },
          { label: "Sinks" },
          { label: "Mirrors" },
          { label: "Floors" },
        ],
      },
      {
        title: "Bedrooms and living areas",
        items: [
          { label: "Dusting" },
          { label: "Surfaces wiped" },
          { label: "Vacuuming" },
          { label: "Mopping" },
          { label: "Bins emptied" },
        ],
      },
      {
        title: "Throughout",
        items: [
          { label: "Doors and light switches wiped" },
          { label: "Entryways" },
          { label: "A final walk-through" },
        ],
      },
    ],
  },
  types: {
    title: "Ways we help",
    lead: "Choose the kind of clean that suits your home and your schedule.",
    // TODO(review): scope drafted from competitor research, client may adjust
    cards: [
      {
        title: "Recurring cleaning",
        text: "Weekly, every two weeks, or monthly visits that keep your home on track.",
        icon: "calendar",
      },
      {
        title: "One-time clean",
        text: "A single visit when you need a hand, before guests arrive or after a busy stretch.",
        icon: "sparkle",
      },
      {
        title: "Deep clean",
        text: "Extra time on built-up grime, baseboards, door frames, and hard-to-reach spots.",
        icon: "broom",
      },
      {
        title: "Move-in and move-out",
        text: "An empty-home clean, including inside cabinets and drawers.",
        icon: "key",
      },
      {
        title: "Apartments and condos",
        text: "The same careful clean, suited to smaller spaces and shared buildings.",
        icon: "building",
      },
    ],
    extras: {
      title: "Add-ons on request",
      // TODO(review): scope drafted from competitor research, client may adjust
      chips: ["Inside oven", "Inside fridge", "Inside cabinets", "Interior windows", "Baseboards"],
    },
  },
  faq: {
    title: "Questions about home cleaning",
    items: RESIDENTIAL_FAQ,
  },
  quoteService: "home",
};

export const COMMERCIAL: ServicePageContent = {
  slug: "commercial-cleaning",
  path: "/services/commercial-cleaning",
  meta: {
    title: "Commercial Cleaning in Edmonton, AB",
    description:
      "Office, apartment building, and post-construction cleaning in Edmonton. Flexible schedules, an insured team, and free quotes. Request your quote today.",
  },
  schema: {
    name: "Commercial Cleaning",
    serviceType: "Commercial cleaning",
  },
  hero: {
    eyebrow: "Commercial cleaning",
    title: "Commercial cleaning in Edmonton",
    lead: "Clean offices and shared spaces, on a schedule that fits your business. We serve offices and buildings across Edmonton, Alberta.",
    scene: "office",
    sceneLabel: "Illustration of two office buildings with lit windows",
  },
  included: {
    title: "What's included",
    lead: "A regular clean covers the areas your team and visitors use most.",
    // TODO(review): scope drafted from competitor research, client may adjust
    groups: [
      {
        items: [
          { label: "Workstations and offices", detail: "Desks wiped and surfaces dusted." },
          { label: "Common areas and lobbies", detail: "Surfaces dusted and floors cleaned." },
          { label: "Kitchens and break rooms", detail: "Counters, sinks, and the outside of appliances wiped." },
          { label: "Washrooms", detail: "Toilets, sinks, mirrors, and floors cleaned." },
          { label: "Floors", detail: "Vacuuming and mopping." },
          { label: "Entrances and glass doors", detail: "Glass and handles wiped." },
          { label: "Garbage and recycling", detail: "Bins emptied and liners replaced." },
        ],
      },
    ],
  },
  types: {
    title: "Spaces we clean",
    lead: "Regular cleaning or a one-time visit, planned around how your space is used.",
    // TODO(review): scope drafted from competitor research, client may adjust
    cards: [
      {
        title: "Offices",
        text: "Daily, weekly, or after-hours schedules.",
        icon: "building",
      },
      {
        title: "Apartment buildings and shared spaces",
        text: "Lobbies, hallways, stairwells, elevators, and laundry rooms.",
        icon: "key",
      },
      {
        title: "Post-construction cleaning",
        text: "Dust and debris removal, surfaces, fixtures, floors, and a final detail before move-in.",
        icon: "broom",
      },
    ],
    note: "We arrange cleaning around your hours, including evenings and weekends.",
  },
  faq: {
    title: "Questions about commercial cleaning",
    items: COMMERCIAL_FAQ,
  },
  quoteService: "business",
};

export const SNOW_REMOVAL: ServicePageContent = {
  slug: "snow-removal",
  path: "/services/snow-removal",
  meta: {
    title: "Snow Removal in Edmonton, AB",
    description:
      "Driveway, walkway, and parking lot snow removal in Edmonton, per visit or seasonal. Insured local team with free quotes. Get your quote today.",
  },
  schema: {
    name: "Snow Removal",
    serviceType: "Snow removal",
  },
  hero: {
    eyebrow: "Snow removal",
    title: "Snow removal in Edmonton",
    lead: "Clear driveways, walkways, and lots so you can get in and out safely all winter. We serve homes and businesses across Edmonton, Alberta.",
    scene: "snow",
    sceneLabel: "Illustration of a house with a cleared driveway and falling snow",
  },
  included: {
    title: "What's included",
    lead: "We clear the areas you rely on to get in and out.",
    // TODO(review): scope drafted from competitor research, client may adjust
    groups: [
      {
        items: [
          { label: "Driveways" },
          { label: "Walkways and front steps" },
          { label: "Parking lots" },
          { label: "Building entrances and sidewalks" },
          { label: "Ice control", detail: "Salt or sand on request." },
        ],
      },
    ],
  },
  types: {
    title: "Who it's for",
    lead: "Snow removal for homes and businesses, set up the way you need it.",
    // TODO(review): scope drafted from competitor research, client may adjust
    cards: [
      {
        title: "Homes",
        text: "Driveways, walkways, and steps.",
        icon: "home",
      },
      {
        title: "Businesses",
        text: "Parking lots, entrances, and sidewalks.",
        icon: "building",
      },
      {
        title: "Service options",
        text: "Per visit or seasonal, set up through your quote.",
        icon: "calendar",
      },
    ],
  },
  faq: {
    title: "Questions about snow removal",
    items: SNOW_FAQ,
  },
  quoteService: "snow",
};
