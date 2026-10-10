import type { StaticImageData } from "next/image";
import hero1 from "@/images/hero-1.webp";
import hero2 from "@/images/hero-2.webp";
import hero3 from "@/images/hero-3.webp";
import maintenanceFloor from "@/images/maintenance-floor-cleaning.webp";
import residentialCleanings from "@/images/residential-cleanings.webp";
import officeCleaning from "@/images/office-cleaning.webp";
import carpetCleaning from "@/images/carpet-cleaning.webp";
import floorCleaning from "@/images/floor-cleaning.webp";
import cleanupImg from "@/images/cleanup.webp";
import landscapingImg from "@/images/landscaping.webp";
import renovationImg from "@/images/renovation.webp";
import demolitionImg from "@/images/demolition.webp";
import snowRemoval from "@/images/snow-removal.webp";
import type { ServiceSlug } from "@/content/services";

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
  readonly whyJag: ImageSlot;
  /** Decorative background behind the home page quote section. */
  readonly contactBackground: ImageSlot;
  /** Service card photos for the card grid. */
  readonly services: Record<ServiceSlug, ImageSlot>;
}

const HERO_KITCHEN: ImageSlot = {
  src: hero1,
  alt: "A cleaner in a green polo shirt wiping a white kitchen counter in a bright, open-plan home",
};

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
  whyJag: {
    src: maintenanceFloor,
    alt: "A bright, clean building corridor with a floor scrubber and a yellow wet-floor sign",
  },
  contactBackground: HERO_KITCHEN,
  // TODO(client): swap in real photos, one line per slot
  services: {
    "residential-cleaning": {
      src: residentialCleanings,
      alt: "A bright, clean modern living room after residential cleaning",
    },
    "office-cleaning": {
      src: officeCleaning,
      alt: "A tidy modern office workspace with desks and chairs",
    },
    "carpet-cleaning": {
      src: carpetCleaning,
      alt: "Deep-cleaned carpet texture in a residential room",
    },
    "floor-cleaning": {
      src: floorCleaning,
      alt: "Clean, polished hard surface flooring with reflection",
    },
    "maintenance-floor-cleaning": {
      src: maintenanceFloor,
      alt: "A commercial corridor being maintained with clean floor surfaces",
    },
    cleanup: {
      src: cleanupImg,
      alt: "Site cleanup with cleared debris and tidy surroundings",
    },
    landscaping: {
      src: landscapingImg,
      alt: "Neatly maintained outdoor lawn and landscaping",
    },
    renovation: {
      src: renovationImg,
      alt: "An interior renovation project underway with clean finish",
    },
    demolition: {
      src: demolitionImg,
      alt: "Careful interior demolition preparing a space for renovation",
    },
    "snow-removal": {
      src: snowRemoval,
      alt: "A driveway and walkway cleared of winter snow",
    },
  },
};
