import type { SVGProps } from "react";

export function WinterArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground / Snow bank */}
      <path d="M16 114 Q48 74 88 100 Q106 114 116 114 Z" className="fill-illus-body" />
      <path d="M50 114 Q80 90 116 114 Z" className="fill-illus-detail" />
      
      {/* Heavy Snow Shovel / Plow */}
      <g transform="translate(10, 0)">
        {/* Shaft */}
        <rect x="72" y="24" width="8" height="70" rx="2" transform="rotate(-30 76 59)" className="fill-primary" />
        
        {/* Handle */}
        <path d="M96 28 L108 8 L116 12 L104 32 Z" className="fill-primary" />
        <rect x="94" y="6" width="32" height="8" rx="4" transform="rotate(-30 110 10)" className="fill-accent" />
        
        {/* Blade */}
        <path d="M28 64 Q44 76 36 96 L76 104 Q84 84 68 72 Z" className="fill-accent" />
        <path d="M36 96 L76 104 L72 108 L32 100 Z" className="fill-primary" />
      </g>

      {/* Heavy geometric Snowflake */}
      <g transform="translate(36, 40)">
        <rect x="-4" y="-16" width="8" height="32" rx="2" className="fill-primary" />
        <rect x="-4" y="-16" width="8" height="32" rx="2" transform="rotate(60)" className="fill-primary" />
        <rect x="-4" y="-16" width="8" height="32" rx="2" transform="rotate(120)" className="fill-primary" />
        {/* Center hole */}
        <circle cx="0" cy="0" r="4" className="fill-white" />
      </g>

      {/* Ice crystals */}
      <path d="M16 80 L24 72 L32 80 Z" className="fill-primary opacity-20" />
      <path d="M88 64 L96 52 L104 64 Z" className="fill-primary opacity-20" />
    </svg>
  );
}
