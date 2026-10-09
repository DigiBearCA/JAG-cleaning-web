import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function ManagerArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* Small building silhouette behind */}
        <rect x="70" y="46" width="30" height="60" rx="4" className="fill-illus-body" />
        <rect x="76" y="56" width="6" height="8" rx="2" className="fill-illus-detail" />
        <rect x="88" y="56" width="6" height="8" rx="2" className="fill-illus-detail" />
        <rect x="76" y="70" width="6" height="8" rx="2" className="fill-illus-detail" />
        <rect x="88" y="70" width="6" height="8" rx="2" className="fill-illus-detail" />

        {/* Large key */}
        {/* Key head */}
        <circle cx="46" cy="46" r="16" className="fill-illus-detail" />
        <circle cx="46" cy="46" r="6" className="fill-illus-body" />
        {/* Key shaft */}
        <rect x="42" y="56" width="8" height="40" rx="2" className="fill-illus-detail" />
        {/* Key teeth */}
        <rect x="50" y="76" width="12" height="8" rx="2" className="fill-illus-detail" />
        <rect x="50" y="88" width="12" height="8" rx="2" className="fill-illus-detail" />

        {/* Hanging tag (accent) */}
        <path d="M54 26 L76 26 L86 40 L76 54 L54 54 Z" className="fill-accent" />
        <circle cx="60" cy="40" r="3" className="fill-alt" />
        {/* Tag string */}
        <path d="M52 32 Q46 26 46 30" fill="none" strokeWidth="2" className="stroke-illus-detail" />
        {/* Check mark inside tag */}
        <path d="M64 40 L68 44 L78 34" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-illus-body" />

        {/* Sparkle */}
        <path d="M26 36 Q26 28 18 28 Q26 28 26 20 Q26 28 34 28 Q26 28 26 36 Z" className="fill-illus-detail" />
      </ArtTile>
    </svg>
  );
}
