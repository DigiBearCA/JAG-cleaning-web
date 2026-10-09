import type { SVGProps } from "react";

export function WinterArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {/* Ground shadow */}
      <ellipse cx="64" cy="116" rx="52" ry="8" className="fill-primary opacity-10" />

      {/* Mound of Snow */}
      <path d="M20 114 Q48 74 88 100 Q106 114 116 114 Z" className="fill-illus-body" />

      {/* Snow Shovel */}
      <g transform="translate(10, -4)">
        {/* Shovel Blade */}
        <rect x="52" y="70" width="36" height="36" rx="4" transform="rotate(-15 70 88)" className="fill-illus-sky" />
        {/* Shovel Shaft */}
        <rect x="66" y="24" width="8" height="52" rx="2" transform="rotate(-15 70 50)" className="fill-illus-sky" />
        {/* Shovel Handle */}
        <rect x="54" y="16" width="32" height="12" rx="4" transform="rotate(-15 70 22)" className="fill-accent" />
      </g>

      {/* Large Snowflake */}
      <g transform="translate(36, 44)">
        <rect x="-3" y="-18" width="6" height="36" rx="3" className="fill-illus-sky" />
        <rect x="-3" y="-18" width="6" height="36" rx="3" transform="rotate(60)" className="fill-illus-sky" />
        <rect x="-3" y="-18" width="6" height="36" rx="3" transform="rotate(120)" className="fill-illus-sky" />
      </g>
    </svg>
  );
}
