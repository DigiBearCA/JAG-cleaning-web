import type { SVGProps } from "react";

export function ManagerArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground shadow */}
      <ellipse cx="64" cy="116" rx="44" ry="8" className="fill-primary opacity-10" />

      {/* Building Silhouette Background */}
      <rect x="76" y="36" width="36" height="80" rx="4" className="fill-illus-body" />
      <rect x="84" y="52" width="8" height="8" rx="2" className="fill-illus-sky" />
      <rect x="96" y="52" width="8" height="8" rx="2" className="fill-illus-sky" />
      <rect x="84" y="68" width="8" height="8" rx="2" className="fill-illus-sky" />
      <rect x="96" y="68" width="8" height="8" rx="2" className="fill-illus-sky" />
      <rect x="84" y="84" width="8" height="8" rx="2" className="fill-illus-sky" />
      <rect x="96" y="84" width="8" height="8" rx="2" className="fill-illus-sky" />

      {/* Large Key */}
      <g transform="translate(-10, 0)">
        {/* Key Head */}
        <circle cx="56" cy="46" r="22" className="fill-illus-sky" />
        <circle cx="56" cy="46" r="8" className="fill-illus-body" />
        {/* Key Shaft */}
        <rect x="50" y="60" width="12" height="52" rx="4" className="fill-illus-sky" />
        {/* Key Teeth */}
        <rect x="62" y="84" width="16" height="10" rx="2" className="fill-illus-sky" />
        <rect x="62" y="100" width="16" height="10" rx="2" className="fill-illus-sky" />
      </g>

      {/* Hanging Tag */}
      <path d="M60 20 L90 20 L102 36 L90 52 L60 52 Z" className="fill-accent" />
      <circle cx="68" cy="36" r="4" className="fill-illus-body" />
      
      {/* Tag String */}
      <path d="M56 26 Q46 16 46 36" fill="none" strokeWidth="2.5" className="stroke-illus-detail" />
      
      {/* Check Mark inside Tag */}
      <path d="M74 36 L80 42 L92 28" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-illus-body" />

      {/* Sparkle */}
      <path d="M26 40 Q26 30 16 30 Q26 30 26 20 Q26 30 36 30 Q26 30 26 40 Z" className="fill-accent" />
    </svg>
  );
}
