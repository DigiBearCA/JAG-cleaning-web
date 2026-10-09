import type { SVGProps } from "react";

export function OfficeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <rect x="16" y="112" width="96" height="4" className="fill-primary" />
      
      {/* Modern angled facade geometry */}
      <path d="M24 112 L36 40 L104 40 L112 112 Z" className="fill-primary" />
      
      {/* Left structural column */}
      <path d="M24 112 L36 40 L46 40 L36 112 Z" className="fill-illus-detail" />
      {/* Right structural column */}
      <path d="M112 112 L104 40 L94 40 L100 112 Z" className="fill-illus-detail" />
      
      {/* Glass windows background */}
      <path d="M46 40 L94 40 L100 112 L36 112 Z" className="fill-accent opacity-20" />
      
      {/* Heavy Window frames */}
      <path d="M42 64 L96 64" stroke="currentColor" strokeWidth="4" className="text-white" />
      <path d="M39 88 L98 88" stroke="currentColor" strokeWidth="4" className="text-white" />
      <path d="M70 40 L70 112" stroke="currentColor" strokeWidth="4" className="text-white" />

      {/* Accent glow inside office */}
      <path d="M72 66 L95 66 L96 86 L72 86 Z" className="fill-accent" />
      <rect x="76" y="74" width="14" height="6" rx="2" className="fill-white" />

      {/* Entrance Box */}
      <rect x="54" y="96" width="32" height="16" className="fill-white" />
      <rect x="58" y="100" width="10" height="12" className="fill-primary" />
      <rect x="72" y="100" width="10" height="12" className="fill-primary" />

      {/* Planter Left */}
      <circle cx="28" cy="104" r="12" className="fill-illus-detail" />
      <circle cx="28" cy="104" r="6" className="fill-primary" />
      
      {/* Planter Right */}
      <circle cx="108" cy="104" r="12" className="fill-illus-detail" />
      <circle cx="108" cy="104" r="6" className="fill-primary" />

      <path d="M96 24 Q96 16 88 16 Q96 16 96 8 Q96 16 104 16 Q96 16 96 24 Z" className="fill-accent" />
    </svg>
  );
}
