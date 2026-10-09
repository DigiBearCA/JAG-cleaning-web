import type { StaticImageData } from "next/image";
import hero1 from "@/images/hero-1.webp";
import hero2 from "@/images/hero-2.webp";
import hero3 from "@/images/hero-3.webp";
import maintenanceFloor from "@/images/maintenance-floor-cleaning.webp";
import officeCleaning from "@/images/office-cleaning.webp";
import residentialCleaning from "@/images/residential-cleanings.webp";
import snowRemoval from "@/images/snow-removal.webp";

/**
 * Every photo used on the home and contact pages, in one place.
 * Images are static imports from src/images, so next/image knows their size and can show a
 * blur placeholder. To swap a photo, add the file to src/images and change its import line.
 */
export interface ImageSlot {
  readonly src: StaticImageData;
  /** Describes what is actually in the photo. Ignored where the image is decorative. */
  readonly alt: string;
}

export interface SiteImages {
  /** The three rotating hero images. The first is the static base layer and the LCP image. */
  readonly hero: readonly [ImageSlot, ImageSlot, ImageSlot];
  readonly whoWeServe: {
    readonly homes: ImageSlot;
    readonly businesses: ImageSlot;
    readonly snow: ImageSlot;
  };
  readonly whyJag: ImageSlot;
  /** Decorative background behind the home page quote section. */
  readonly contactBackground: ImageSlot;
}

const HERO_KITCHEN: ImageSlot = {
  src: hero1,
  alt: "A cleaner in a green polo shirt wiping a white kitchen counter in a bright, open-plan home",
};

// TODO(client): swap in real photos, one line per slot
export const IMAGES: SiteImages = {
  hero: [
    HERO_KITCHEN,
    {
      src: hero2,
      alt: "A cleaner using a squeegee and cloth on a glass partition in a bright office",
    },
    {
      src: hero3,
      alt: "A worker in a hard hat holding a tablet in a freshly finished, empty room",
    },
  ],
  whoWeServe: {
    homes: {
      src: residentialCleaning,
      alt: "A tidy living room with a white sofa, a wooden coffee table, and a spray bottle and cloth",
    },
    businesses: {
      src: officeCleaning,
      alt: "A bright, empty office with wooden desks and a cleaning caddy holding spray bottles and a cloth",
    },
    snow: {
      src: snowRemoval,
      alt: "A cleared, salted driveway between high snowbanks, with a snow shovel leaning near the front door",
    },
  },
  whyJag: {
    src: maintenanceFloor,
    alt: "A bright, clean building corridor with a floor scrubber and a yellow wet-floor sign",
  },
  contactBackground: HERO_KITCHEN,
};
