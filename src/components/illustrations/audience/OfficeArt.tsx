import type { SVGProps } from "react";

export function OfficeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground shadow */}
      <ellipse cx="64" cy="116" rx="52" ry="8" className="fill-primary opacity-10" />

      {/* Office Building Base */}
      <rect x="20" y="56" width="88" height="60" rx="4" className="fill-illus-body" />
      
      {/* Roof detail */}
      <rect x="16" y="50" width="96" height="8" rx="2" className="fill-illus-sky" />
      <rect x="24" y="44" width="80" height="6" rx="2" className="fill-illus-sky opacity-50" />

      {/* Main Glass Entrance */}
      <rect x="52" y="70" width="24" height="46" rx="2" className="fill-illus-sky" />
      <rect x="56" y="74" width="16" height="42" rx="2" className="fill-illus-body opacity-80" />
      <rect x="63" y="74" width="2" height="42" className="fill-illus-sky" /> {/* Door split */}

      {/* Left Windows */}
      <rect x="28" y="70" width="14" height="14" rx="2" className="fill-illus-sky" />
      <rect x="28" y="92" width="14" height="14" rx="2" className="fill-illus-sky" />

      {/* Right Windows */}
      <rect x="86" y="70" width="14" height="14" rx="2" className="fill-accent" /> {/* Lit window */}
      <rect x="86" y="92" width="14" height="14" rx="2" className="fill-illus-sky" />

      {/* Plant Pot Left */}
      <rect x="42" y="106" width="8" height="10" rx="2" className="fill-illus-sky" />
      <path d="M42 106 Q46 92 50 106 Z" className="fill-illus-sky" />

      {/* Plant Pot Right */}
      <rect x="78" y="106" width="8" height="10" rx="2" className="fill-illus-sky" />
      <path d="M78 106 Q82 92 86 106 Z" className="fill-illus-sky" />

      {/* Sparkle */}
      <path d="M102 36 Q102 26 92 26 Q102 26 102 16 Q102 26 112 26 Q102 26 102 36 Z" className="fill-accent" />
    </svg>
  );
}
