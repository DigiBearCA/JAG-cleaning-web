import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function BuildArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* Small plank stack */}
        <rect x="28" y="96" width="48" height="6" rx="2" className="fill-illus-body" />
        <rect x="34" y="88" width="40" height="6" rx="2" className="fill-illus-body" />
        <rect x="40" y="80" width="32" height="6" rx="2" className="fill-illus-body" />

        {/* Crossed hammer */}
        {/* Handle */}
        <rect x="76" y="60" width="8" height="40" rx="4" transform="rotate(30 80 80)" className="fill-illus-detail" />
        {/* Head */}
        <rect x="66" y="52" width="24" height="12" rx="4" transform="rotate(30 78 58)" className="fill-illus-body" />

        {/* Hard hat (accent) */}
        <path d="M40 76 Q40 50 64 50 Q88 50 88 76 Z" className="fill-accent" />
        <rect x="36" y="74" width="56" height="6" rx="3" className="fill-accent" />
        {/* Hat ridge */}
        <rect x="60" y="50" width="8" height="26" rx="4" className="fill-illus-body opacity-30" />

        {/* Sparkle */}
        <path d="M96 40 Q96 32 88 32 Q96 32 96 24 Q96 32 104 32 Q96 32 96 40 Z" className="fill-illus-detail" />
      </ArtTile>
    </svg>
  );
}
