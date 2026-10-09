import type { SVGProps } from "react";
import { ArtTile } from "./ArtTile";

export function HomeArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      <ArtTile>
        {/* House body */}
        <path d="M34 106 V64 L64 40 L94 64 V106 Z" className="fill-illus-body" />
        
        {/* Roof overhang */}
        <path d="M28 66 L64 36 L100 66 L94 70 L64 44 L34 70 Z" className="fill-illus-detail" />
        
        {/* Chimney */}
        <rect x="76" y="30" width="12" height="24" className="fill-illus-detail" />
        
        {/* Door */}
        <rect x="52" y="80" width="24" height="26" rx="4" className="fill-illus-detail" />
        
        {/* Round lit window */}
        <circle cx="64" cy="62" r="8" className="fill-accent" />
        
        {/* Sparkle by the roof (four-point) */}
        <path d="M96 28 Q96 20 88 20 Q96 20 96 12 Q96 20 104 20 Q96 20 96 28 Z" className="fill-illus-detail" />
      </ArtTile>
    </svg>
  );
}

