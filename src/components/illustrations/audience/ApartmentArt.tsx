import type { SVGProps } from "react";

export function ApartmentArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Background anchor */}
      <rect x="16" y="112" width="96" height="4" className="fill-primary" />

      {/* Tall Building (Background) */}
      <rect x="56" y="24" width="48" height="88" className="fill-illus-detail" />
      {/* Shadow block for depth */}
      <rect x="88" y="24" width="16" height="88" className="fill-primary opacity-20" />
      
      {/* Window Grid for Tall Building */}
      <g className="fill-primary">
        <rect x="64" y="32" width="6" height="8" rx="1" />
        <rect x="76" y="32" width="6" height="8" rx="1" />
        <rect x="64" y="46" width="6" height="8" rx="1" />
        <rect x="76" y="46" width="6" height="8" rx="1" />
        <rect x="64" y="60" width="6" height="8" rx="1" />
        <rect x="76" y="60" width="6" height="8" rx="1" />
        <rect x="64" y="74" width="6" height="8" rx="1" />
        <rect x="76" y="74" width="6" height="8" rx="1" />
        <rect x="64" y="88" width="6" height="8" rx="1" />
        <rect x="76" y="88" width="6" height="8" rx="1" />
      </g>
      
      {/* Short Building (Foreground) */}
      <rect x="24" y="56" width="48" height="56" className="fill-primary" />
      {/* Roof trim */}
      <rect x="20" y="52" width="56" height="6" className="fill-accent" />
      
      {/* Foreground building bright windows */}
      <rect x="32" y="66" width="12" height="16" rx="1" className="fill-accent" />
      <rect x="34" y="68" width="4" height="12" className="fill-white" />
      
      <rect x="52" y="66" width="12" height="16" rx="1" className="fill-illus-detail" />
      <rect x="32" y="88" width="12" height="16" rx="1" className="fill-illus-detail" />
      <rect x="52" y="88" width="12" height="16" rx="1" className="fill-white opacity-20" />

      {/* Main Entrance Door */}
      <rect x="40" y="104" width="16" height="8" className="fill-white" />
      <rect x="42" y="104" width="12" height="8" className="fill-primary" />

      {/* Sparkle */}
      <path d="M104 24 Q104 16 96 16 Q104 16 104 8 Q104 16 112 16 Q104 16 104 24 Z" className="fill-accent" />
    </svg>
  );
}
