import Image from "next/image";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface IllustrationImage {
  readonly src: string;
  readonly alt: string;
}

export interface IllustrationFrameProps {
  /** Fixed aspect ratio so nothing shifts while loading. */
  readonly aspect: "hero" | "scene";
  /** Real photo. When provided it replaces the illustration (next/image). */
  readonly image?: IllustrationImage;
  readonly priority?: boolean;
  readonly className?: string;
  readonly children: ReactNode;
}

const ASPECT: Record<IllustrationFrameProps["aspect"], string> = {
  hero: "aspect-[560/520]",
  scene: "aspect-[6/5]",
};

/** Rounded 32px panel with hidden overflow that holds an illustration or, later, a photo. */
export function IllustrationFrame({ aspect, image, priority = false, className, children }: IllustrationFrameProps) {
  return (
    <div className={cx("relative w-full overflow-hidden rounded-panel bg-illus-sky", ASPECT[aspect], className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        children
      )}
    </div>
  );
}
