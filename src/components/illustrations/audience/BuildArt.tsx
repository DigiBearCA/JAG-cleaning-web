import type { SVGProps } from "react";

export function BuildArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <rect x="16" y="112" width="96" height="4" className="fill-primary" />
      
      {/* Crane Structure Background */}
      <rect x="24" y="24" width="8" height="88" className="fill-primary" />
      <path d="M24 50 L32 40 L24 30 Z" className="fill-illus-detail" />
      <path d="M24 70 L32 60 L24 50 Z" className="fill-illus-detail" />
      <path d="M24 90 L32 80 L24 70 Z" className="fill-illus-detail" />
      
      {/* Crane arm */}
      <rect x="24" y="24" width="72" height="8" className="fill-primary" />
      
      {/* Hook line & block */}
      <rect x="80" y="32" width="2" height="40" className="fill-illus-detail" />
      <rect x="76" y="72" width="10" height="8" className="fill-primary" />
      <path d="M80 80 Q86 88 76 90" fill="none" strokeWidth="4" strokeLinecap="round" stroke="currentColor" className="text-primary" />

      {/* Large Hard Hat in Foreground */}
      <g transform="translate(16, 0)">
        <path d="M30 112 Q30 76 60 76 Q90 76 90 112 Z" className="fill-accent" />
        <rect x="20" y="104" width="80" height="8" rx="4" className="fill-accent" />
        {/* Hat detail ridge */}
        <path d="M60 76 Q64 88 64 112 H56 Q56 88 60 76 Z" className="fill-white opacity-30" />
      </g>

      {/* Sparkle */}
      <path d="M104 36 Q104 28 96 28 Q104 28 104 20 Q104 28 112 28 Q104 28 104 36 Z" className="fill-accent" />
    </svg>
  );
}
