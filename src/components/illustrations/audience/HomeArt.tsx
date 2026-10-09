import type { SVGProps } from "react";

export function HomeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Base shadow/ground */}
      <ellipse cx="64" cy="116" rx="48" ry="8" className="fill-primary opacity-10" />
      
      {/* Chimney */}
      <rect x="80" y="24" width="16" height="32" className="fill-illus-sky" />
      <path d="M76 20 H100 V26 H76 Z" className="fill-illus-body" />
      
      {/* House Body */}
      <path d="M24 108 V64 L64 32 L104 64 V108 Z" className="fill-illus-body" />
      
      {/* Roof overhang */}
      <path d="M16 68 L64 28 L112 68 L106 74 L64 38 L22 74 Z" className="fill-illus-sky" />
      
      {/* Door */}
      <rect x="52" y="76" width="24" height="32" rx="2" className="fill-illus-sky" />
      <rect x="56" y="80" width="16" height="16" rx="2" className="fill-illus-body opacity-60" />
      {/* Door Handle */}
      <circle cx="70" cy="96" r="2" className="fill-accent" />
      
      {/* Left Window (Accent) */}
      <rect x="32" y="76" width="14" height="20" rx="2" className="fill-accent" />
      {/* Right Window */}
      <rect x="82" y="76" width="14" height="20" rx="2" className="fill-illus-sky" />
      
      {/* Bush Left */}
      <circle cx="32" cy="108" r="10" className="fill-illus-sky" />
      <circle cx="24" cy="112" r="6" className="fill-illus-body opacity-80" />
      
      {/* Bush Right */}
      <circle cx="96" cy="104" r="14" className="fill-illus-sky" />
      <circle cx="106" cy="110" r="8" className="fill-illus-body opacity-80" />
      
      {/* Sparkle */}
      <path d="M110 24 Q110 16 102 16 Q110 16 110 8 Q110 16 118 16 Q110 16 110 24 Z" className="fill-accent" />
    </svg>
  );
}
