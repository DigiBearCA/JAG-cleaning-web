import type { SVGProps } from "react";

export function ManagerArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Background anchor */}
      <rect x="24" y="110" width="80" height="4" className="fill-illus-body" />
      
      {/* Clipboard Board */}
      <rect x="32" y="24" width="64" height="84" rx="4" className="fill-primary" />
      
      {/* Clipboard Paper */}
      <rect x="40" y="32" width="48" height="72" rx="2" className="fill-white" />
      {/* Clip */}
      <rect x="52" y="16" width="24" height="12" rx="2" className="fill-illus-detail" />
      <rect x="60" y="12" width="8" height="4" className="fill-primary" />

      {/* Paper Details (Building Icon) */}
      <rect x="48" y="44" width="12" height="24" className="fill-illus-detail" />
      <rect x="64" y="52" width="16" height="16" className="fill-illus-detail opacity-50" />
      <rect x="48" y="76" width="32" height="4" className="fill-illus-detail" />
      
      {/* Overlapping Key */}
      <g transform="translate(10, 8)">
        {/* Key Head */}
        <circle cx="82" cy="72" r="16" className="fill-accent" />
        <circle cx="82" cy="72" r="6" className="fill-white" />
        {/* Key Shaft */}
        <rect x="46" y="68" width="36" height="8" className="fill-accent" />
        {/* Key Teeth */}
        <rect x="50" y="76" width="8" height="10" rx="1" className="fill-accent" />
        <rect x="62" y="76" width="6" height="6" rx="1" className="fill-accent" />
      </g>

      {/* Sparkle */}
      <path d="M24 36 Q24 28 16 28 Q24 28 24 20 Q24 28 32 28 Q24 28 24 36 Z" className="fill-accent" />
    </svg>
  );
}
