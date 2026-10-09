import type { SVGProps } from "react";

export function ApartmentArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground shadow */}
      <ellipse cx="64" cy="116" rx="44" ry="8" className="fill-illus-ground opacity-40" />

      {/* Background Building */}
      <rect x="64" y="24" width="40" height="92" rx="2" className="fill-illus-body" />
      {/* Roof detail */}
      <rect x="60" y="20" width="48" height="6" rx="2" className="fill-illus-detail" />
      {/* Balconies */}
      <rect x="62" y="44" width="20" height="4" rx="2" className="fill-illus-detail" />
      <rect x="62" y="68" width="20" height="4" rx="2" className="fill-illus-detail" />
      <rect x="62" y="92" width="20" height="4" rx="2" className="fill-illus-detail" />

      {/* Accent Window in Background Building */}
      <rect x="88" y="36" width="10" height="12" rx="2" className="fill-accent" />
      <rect x="88" y="60" width="10" height="12" rx="2" className="fill-illus-detail" />
      <rect x="88" y="84" width="10" height="12" rx="2" className="fill-illus-detail" />

      {/* Foreground Building */}
      <rect x="28" y="48" width="48" height="68" rx="2" className="fill-illus-detail" />
      {/* Roof detail */}
      <rect x="24" y="44" width="56" height="6" rx="2" className="fill-illus-body" />
      
      {/* Foreground Windows */}
      <rect x="36" y="60" width="10" height="12" rx="2" className="fill-illus-body" />
      <rect x="56" y="60" width="10" height="12" rx="2" className="fill-illus-body" />
      <rect x="36" y="80" width="10" height="12" rx="2" className="fill-illus-body" />
      <rect x="56" y="80" width="10" height="12" rx="2" className="fill-illus-body" />
      
      {/* Door */}
      <rect x="42" y="100" width="20" height="16" rx="2" className="fill-illus-body" />

      {/* Sparkle */}
      <path d="M52 24 Q52 16 44 16 Q52 16 52 8 Q52 16 60 16 Q52 16 52 24 Z" className="fill-accent" />
    </svg>
  );
}
