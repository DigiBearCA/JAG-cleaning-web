import type { SVGProps } from "react";

export function HomeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Background abstract element to anchor the icon */}
      <path d="M16 112 L112 112 L72 24 Z" className="fill-illus-body opacity-30" />
      
      {/* Main House Structure */}
      <rect x="32" y="56" width="64" height="56" className="fill-primary" />
      
      {/* Roof */}
      <path d="M16 56 L64 16 L112 56 Z" className="fill-illus-detail" />
      <path d="M16 56 L64 16 L112 56 L112 64 L64 24 L16 64 Z" className="fill-primary" />

      {/* Chimney */}
      <rect x="84" y="16" width="12" height="28" className="fill-primary" />
      <path d="M80 12 H100 V16 H80 Z" className="fill-accent" />
      
      {/* Front Door */}
      <rect x="64" y="72" width="20" height="40" className="fill-white" />
      <rect x="64" y="72" width="20" height="40" className="fill-accent opacity-20" />
      {/* Door panels */}
      <rect x="68" y="76" width="12" height="12" rx="1" className="fill-primary" />
      <rect x="68" y="92" width="12" height="16" rx="1" className="fill-primary" />
      <circle cx="80" cy="90" r="2" className="fill-white" />

      {/* Modern Window */}
      <rect x="40" y="72" width="16" height="24" className="fill-accent" />
      {/* Window reflections / panes */}
      <rect x="42" y="74" width="5" height="9" className="fill-white opacity-90" />
      <rect x="49" y="74" width="5" height="9" className="fill-white opacity-90" />
      <rect x="42" y="85" width="5" height="9" className="fill-white opacity-90" />
      <rect x="49" y="85" width="5" height="9" className="fill-white opacity-90" />
      
      {/* Landscaping / Bushes */}
      <circle cx="28" cy="112" r="14" className="fill-primary" />
      <circle cx="28" cy="112" r="8" className="fill-illus-detail" />
      <circle cx="104" cy="108" r="16" className="fill-primary" />
      <circle cx="104" cy="108" r="10" className="fill-accent" />

      {/* Sparkle */}
      <path d="M112 24 Q112 16 104 16 Q112 16 112 8 Q112 16 120 16 Q112 16 112 24 Z" className="fill-accent" />
    </svg>
  );
}
