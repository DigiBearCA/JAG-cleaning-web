import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function OfficeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* Wide low building */}
        <rect x="24" y="56" width="80" height="50" rx="4" className="fill-illus-body" />
        
        {/* Flat roof line */}
        <rect x="20" y="52" width="88" height="6" rx="2" className="fill-illus-detail" />
        
        {/* Glass entrance */}
        <rect x="52" y="70" width="24" height="36" rx="2" className="fill-illus-detail" />
        <rect x="56" y="74" width="16" height="28" rx="2" className="fill-illus-body" />

        {/* Windows */}
        <rect x="32" y="70" width="12" height="12" rx="2" className="fill-illus-detail" />
        <rect x="84" y="70" width="12" height="12" rx="2" className="fill-accent" /> {/* Lit window */}
        <rect x="32" y="86" width="12" height="12" rx="2" className="fill-illus-detail" />
        <rect x="84" y="86" width="12" height="12" rx="2" className="fill-illus-detail" />

        {/* Plant by the door */}
        <path d="M42 106 Q46 96 48 106 Z" className="fill-illus-detail" />
        <rect x="42" y="100" width="8" height="6" rx="2" className="fill-illus-detail" />

        {/* Sparkle */}
        <path d="M90 36 Q90 28 82 28 Q90 28 90 20 Q90 28 98 28 Q90 28 90 36 Z" className="fill-illus-detail" />
      </ArtTile>
    </svg>
  );
}
