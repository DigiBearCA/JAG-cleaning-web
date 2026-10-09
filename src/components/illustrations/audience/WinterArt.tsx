import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function WinterArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* Mound of snow */}
        <path d="M24 106 Q44 76 74 96 Q90 106 104 106 Z" className="fill-illus-body" />

        {/* Snow shovel */}
        {/* Shovel blade */}
        <rect x="54" y="66" width="24" height="24" rx="4" transform="rotate(-15 66 78)" className="fill-illus-detail" />
        {/* Shovel shaft */}
        <rect x="63" y="36" width="6" height="40" rx="2" transform="rotate(-15 66 56)" className="fill-illus-detail" />
        {/* Shovel handle (accent) */}
        <rect x="56" y="28" width="20" height="8" rx="4" transform="rotate(-15 66 32)" className="fill-accent" />

        {/* Snowflake */}
        <g transform="translate(36, 44)">
          <rect x="-2" y="-12" width="4" height="24" rx="2" className="fill-illus-detail" />
          <rect x="-2" y="-12" width="4" height="24" rx="2" transform="rotate(60)" className="fill-illus-detail" />
          <rect x="-2" y="-12" width="4" height="24" rx="2" transform="rotate(120)" className="fill-illus-detail" />
        </g>
      </ArtTile>
    </svg>
  );
}
