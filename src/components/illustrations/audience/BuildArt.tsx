import type { SVGProps } from "react";

export function BuildArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground shadow */}
      <ellipse cx="64" cy="116" rx="52" ry="8" className="fill-primary opacity-10" />

      {/* Stack of Planks */}
      <rect x="24" y="104" width="64" height="8" rx="2" className="fill-illus-body" />
      <rect x="32" y="92" width="56" height="8" rx="2" className="fill-illus-body" />
      <rect x="28" y="80" width="48" height="8" rx="2" className="fill-illus-body" />

      {/* Construction Hammer */}
      <g transform="translate(16, 0)">
        {/* Handle */}
        <rect x="70" y="44" width="12" height="60" rx="4" transform="rotate(25 76 74)" className="fill-illus-sky" />
        {/* Head */}
        <rect x="56" y="36" width="36" height="16" rx="4" transform="rotate(25 74 44)" className="fill-illus-body" />
      </g>

      {/* Hard Hat */}
      <path d="M34 80 Q34 44 64 44 Q94 44 94 80 Z" className="fill-accent" />
      <rect x="26" y="76" width="76" height="8" rx="4" className="fill-accent" />
      {/* Hat Ridge */}
      <rect x="58" y="44" width="12" height="34" rx="4" className="fill-illus-body opacity-30" />

      {/* Sparkle */}
      <path d="M104 36 Q104 26 94 26 Q104 26 104 16 Q104 26 114 26 Q104 26 104 36 Z" className="fill-illus-sky" />
    </svg>
  );
}
