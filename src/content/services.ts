export type ServiceSlug =
  | "residential-cleaning"
  | "office-cleaning"
  | "carpet-cleaning"
  | "floor-cleaning"
  | "maintenance-floor-cleaning"
  | "cleanup"
  | "landscaping"
  | "renovation"
  | "demolition"
  | "snow-removal";

export type ChapterId = "cleaning" | "site" | "build";
export type Audience = "Homes" | "Businesses" | "Property managers";

export interface FlowStep {
  readonly title: string;
  readonly text: string;
}

export type ServiceIconName =
  | "home"
  | "briefcase"
  | "rug"
  | "tiles"
  | "scrubber"
  | "debris"
  | "leaf"
  | "hammer"
  | "wall"
  | "snowflake";

export interface Service {
  readonly slug: ServiceSlug;
  readonly chapter: ChapterId;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly audience: readonly Audience[];
  readonly included: readonly string[];
  readonly flow: readonly [FlowStep, FlowStep, FlowStep, FlowStep];
  readonly icon: ServiceIconName;
  readonly enabled: boolean;
}

export const CHAPTERS: Record<
  ChapterId,
  { title: string; description: string }
> = {
  cleaning: {
    title: "Cleaning",
    description: "Homes and workplaces, kept fresh.",
  },
  site: {
    title: "Site and outdoors",
    description: "Messes cleared and outdoor areas looked after.",
  },
  build: {
    title: "Build",
    description: "Renovation and demolition, with a clean finish.",
  },
};

// TODO(review): scope and flows drafted from research, client to confirm
export const SERVICES: readonly Service[] = [
  {
    slug: "residential-cleaning",
    chapter: "cleaning",
    name: "Residential cleaning",
    tagline: "Fresh homes, on your schedule.",
    description:
      "Regular or one-time cleaning for houses, condos, and apartments. Tell us what you need and we take care of it, with our own supplies and equipment.",
    audience: ["Homes"],
    included: [
      "Kitchen and bathrooms",
      "Bedrooms and living areas",
      "Floors vacuumed and mopped",
      "Dusting and surfaces",
      "Move-in and move-out cleans",
      "Add-ons like inside oven or fridge on request",
    ],
    flow: [
      { title: "Tell us about your home", text: "Size, rooms, and how often." },
      {
        title: "Get your free quote",
        text: "A clear price before work starts.",
      },
      {
        title: "We clean",
        text: "Our team brings the supplies and equipment.",
      },
      { title: "Final walk-through", text: "We check the details with you." },
    ],
    icon: "home",
    enabled: true,
  },
  {
    slug: "office-cleaning",
    chapter: "cleaning",
    name: "Office cleaning",
    tagline: "A clean workplace, every day it matters.",
    description:
      "Cleaning for offices and shared spaces, planned around your hours, including evenings and weekends.",
    audience: ["Businesses", "Property managers"],
    included: [
      "Desks and workstations",
      "Washrooms",
      "Kitchens and break rooms",
      "Lobbies and entrances",
      "Floors",
      "Garbage and recycling",
    ],
    flow: [
      { title: "Walkthrough", text: "We look at your space and needs." },
      { title: "Plan and quote", text: "Frequency, scope, and price." },
      { title: "Scheduled cleaning", text: "Daily, weekly, or after hours." },
      {
        title: "Ongoing check-ins",
        text: "We adjust the plan as needs change.",
      },
    ],
    icon: "briefcase",
    enabled: true,
  },
  {
    slug: "carpet-cleaning",
    chapter: "cleaning",
    name: "Carpet cleaning",
    tagline: "Deep-cleaned carpets, ready to use.",
    description:
      "Deep carpet cleaning for homes and businesses, focused on high-traffic areas, spots, and stains.",
    audience: ["Homes", "Businesses"],
    included: [
      "Rooms, stairs, and hallways",
      "Spot and stain treatment",
      "High-traffic areas",
      "Office and commercial carpets",
      "Move-out carpet cleans",
    ],
    flow: [
      {
        title: "Tell us the areas",
        text: "Rooms, carpet type, and any stains.",
      },
      { title: "Get your free quote", text: "A clear price before we start." },
      {
        title: "Treat and deep clean",
        text: "Extra attention on stains and traffic lanes.",
      },
      { title: "Final check", text: "We review the result with you." },
    ],
    icon: "rug",
    enabled: true,
  },
  {
    slug: "floor-cleaning",
    chapter: "cleaning",
    name: "Floor cleaning",
    tagline: "Floors that look cared for.",
    description:
      "One-time floor cleaning for hard floors in homes and commercial spaces, including tile, vinyl, and concrete.",
    audience: ["Homes", "Businesses"],
    included: [
      "Sweeping and scrubbing",
      "Tile and grout",
      "Vinyl and concrete floors",
      "Kitchens, entryways, and shops",
      "Floors after renovation work",
      "Edges and corners",
    ],
    flow: [
      { title: "Tell us about the floors", text: "Type, size, and condition." },
      { title: "Get your free quote", text: "A clear price before we start." },
      { title: "Scrub and rinse", text: "Cleaned section by section." },
      { title: "Finish and inspect", text: "We check the result with you." },
    ],
    icon: "tiles",
    enabled: true,
  },
  {
    slug: "maintenance-floor-cleaning",
    chapter: "cleaning",
    name: "Maintenance floor cleaning",
    tagline: "Routine floor care between deep cleans.",
    description:
      "Scheduled floor cleaning for businesses, so busy floors stay clean and presentable all year.",
    audience: ["Businesses", "Property managers"],
    included: [
      "Daily, weekly, or monthly schedules",
      "Entrances and corridors",
      "Shops, offices, and shared spaces",
      "Consistent routine and timing",
      "Deep-clean add-on when needed",
    ],
    flow: [
      { title: "Floor walkthrough", text: "We look at the areas and traffic." },
      { title: "Set a schedule", text: "Frequency, scope, and price." },
      { title: "Routine cleaning", text: "The same team, on time." },
      { title: "Review and adjust", text: "We keep the plan working for you." },
    ],
    icon: "scrubber",
    enabled: true,
  },
  {
    slug: "cleanup",
    chapter: "site",
    name: "Cleanup",
    tagline: "We clear it so you can move on.",
    description:
      "Cleanup for properties and job sites: debris and leftover mess cleared away so the space is ready to use.",
    audience: ["Homes", "Businesses"],
    included: [
      "Cleanup after construction and renovation",
      "Debris and material clearing",
      "Yard and property cleanup",
      "Final sweep and wipe-down",
      "One-time or repeat visits",
    ],
    flow: [
      {
        title: "Tell us what needs clearing",
        text: "Location, size, and type of mess.",
      },
      { title: "Get your free quote", text: "A clear price before we start." },
      { title: "Clear and clean", text: "Remove debris, then tidy up." },
      { title: "Final check", text: "We confirm the space is ready." },
    ],
    icon: "debris",
    enabled: true,
  },
  {
    slug: "landscaping",
    chapter: "site",
    name: "Landscaping",
    tagline: "Outdoor spaces that look cared for.",
    description:
      "Landscaping for yards and commercial properties, keeping outdoor areas neat and welcoming.",
    audience: ["Homes", "Businesses"],
    included: [
      "Lawn and yard tidying",
      "Planting beds and shrubs",
      "Trimming and edging",
      "Seasonal property cleanups",
      "Entrances and shared outdoor areas",
    ],
    flow: [
      {
        title: "Share your yard and goals",
        text: "What you have and what you want.",
      },
      { title: "Plan and quote", text: "Scope, timing, and price." },
      { title: "Do the work", text: "Done step by step." },
      { title: "Final walk-through", text: "We review the result with you." },
    ],
    icon: "leaf",
    enabled: true,
  },
  {
    slug: "renovation",
    chapter: "build",
    name: "Renovation",
    tagline: "Plan it, build it, tidy it up.",
    description:
      "Renovation work for homes and commercial spaces, handled in stages with clear communication and a clean finish.",
    audience: ["Homes", "Businesses"],
    included: [
      "Interior updates and refreshes",
      "Repairs and finishing",
      "Residential and commercial spaces",
      "Scope and schedule agreed up front",
      "Cleanup after the work",
    ],
    flow: [
      { title: "Share your plans", text: "What you want to change." },
      { title: "Look and quote", text: "We review the space and the scope." },
      { title: "Work in stages", text: "Clear updates along the way." },
      { title: "Walk-through and cleanup", text: "We hand over a tidy space." },
    ],
    icon: "hammer",
    enabled: true,
  },
  {
    slug: "demolition",
    chapter: "build",
    name: "Demolition",
    tagline: "Careful removal, clean finish.",
    description:
      "Interior and light demolition to prepare a space for renovation, with debris cleared away afterwards.",
    audience: ["Homes", "Businesses"],
    included: [
      "Removal of fixtures, flooring, and walls as agreed",
      "Debris clearing",
      "Site cleanup",
      "Preparation for renovation",
    ],
    flow: [
      { title: "Describe the space", text: "What needs to come out." },
      { title: "Look and quote", text: "We review the space and the scope." },
      { title: "Careful removal", text: "Planned and done step by step." },
      { title: "Debris cleared", text: "The site is tidied and ready." },
    ],
    icon: "wall",
    enabled: true,
  },
  {
    slug: "snow-removal",
    chapter: "site",
    name: "Snow removal",
    tagline: "Clear driveways, all winter.",
    description:
      "Snow removal for driveways, walkways, and parking lots, per visit or seasonal.",
    audience: ["Homes", "Businesses"],
    included: [
      "Driveways",
      "Walkways and steps",
      "Parking lots",
      "Building entrances",
      "Ice control (salt or sand) on request",
    ],
    flow: [
      { title: "Tell us the property", text: "Driveway or lot, and size." },
      {
        title: "Choose per visit or seasonal",
        text: "We set up a plan with you.",
      },
      { title: "We clear it", text: "Snow cleared when it falls." },
      { title: "Check and repeat", text: "We keep the plan on track." },
    ],
    icon: "snowflake",
    enabled: false,
  },
];

export function getEnabledServices(): readonly Service[] {
  return SERVICES.filter((s) => s.enabled);
}

export function getServiceNumber(service: Service): string {
  const enabled = getEnabledServices();
  const index = enabled.findIndex((s) => s.slug === service.slug);
  return String(index + 1).padStart(2, "0");
}
