import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function ApartmentArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* Tall building back */}
        <rect x="60" y="30" width="36" height="76" rx="4" className="fill-illus-body" />
        {/* Shorter building front */}
        <rect x="32" y="50" width="40" height="56" rx="4" className="fill-illus-detail" />
        
        {/* Balcony ledges on tall building */}
        <rect x="58" y="46" width="16" height="4" rx="2" className="fill-illus-detail" />
        <rect x="58" y="66" width="16" height="4" rx="2" className="fill-illus-detail" />
        <rect x="58" y="86" width="16" height="4" rx="2" className="fill-illus-detail" />

        {/* Window grid short building */}
        <rect x="40" y="60" width="8" height="12" rx="2" className="fill-illus-body" />
        <rect x="56" y="60" width="8" height="12" rx="2" className="fill-illus-body" />
        <rect x="40" y="80" width="8" height="12" rx="2" className="fill-illus-body" />
        <rect x="56" y="80" width="8" height="12" rx="2" className="fill-illus-body" />

        {/* Lit window (accent) in tall building */}
        <rect x="76" y="40" width="12" height="12" rx="2" className="fill-accent" />
        <rect x="76" y="60" width="12" height="12" rx="2" className="fill-illus-body" />
        <rect x="76" y="80" width="12" height="12" rx="2" className="fill-illus-body" />

        {/* Sparkle above */}
        <path d="M48 24 Q48 16 40 16 Q48 16 48 8 Q48 16 56 16 Q48 16 48 24 Z" className="fill-illus-detail" />
      </ArtTile>
    </svg>
  );
}
