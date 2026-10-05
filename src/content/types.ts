import type { IconName } from "@/components/icons";
import type { ServiceValue } from "@/lib/quote-validation";

/** Shared shapes for the typed copy in src/content. */

export interface SectionCopy {
  readonly eyebrow?: string;
  readonly title: string;
  readonly lead?: string;
}

export interface FeatureCard {
  readonly title: string;
  readonly text: string;
  readonly icon: IconName;
}

export interface LinkedFeatureCard extends FeatureCard {
  readonly href: string;
  /** Visible link text, for example "Learn more". */
  readonly linkLabel: string;
  /** Visually hidden text that completes the link, for example "about home cleaning". */
  readonly linkHiddenText: string;
}

export interface Step {
  readonly title: string;
  readonly text: string;
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface ChecklistItem {
  readonly label: string;
  readonly detail?: string;
}

export interface ChecklistGroup {
  readonly title?: string;
  readonly items: ReadonlyArray<ChecklistItem>;
}

export type SceneName = "home" | "office" | "snow";

export interface ChipGroup {
  readonly title: string;
  readonly chips: ReadonlyArray<string>;
}

export interface ServicePageContent {
  readonly slug: "residential-cleaning" | "commercial-cleaning" | "snow-removal";
  readonly path: string;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly schema: {
    readonly name: string;
    readonly serviceType: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly scene: SceneName;
    readonly sceneLabel: string;
  };
  readonly included: SectionCopy & { readonly groups: ReadonlyArray<ChecklistGroup> };
  readonly types: SectionCopy & {
    readonly cards: ReadonlyArray<FeatureCard>;
    readonly extras?: ChipGroup;
    readonly note?: string;
  };
  readonly faq: SectionCopy & { readonly items: ReadonlyArray<FaqItem> };
  readonly quoteService: ServiceValue;
}
