import type { ReactNode } from "react";

export function ArtTile({ children }: { readonly children: ReactNode }) {
  return (
    <>
      <rect
        x="20"
        y="16"
        width="88"
        height="112"
        rx="24"
        className="fill-alt"
      />
      <pattern
        id="dot-grid"
        x="20"
        y="16"
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.5" className="fill-illus-detail opacity-20" />
      </pattern>
      <rect
        x="20"
        y="16"
        width="88"
        height="112"
        rx="24"
        fill="url(#dot-grid)"
      />
      <ellipse
        cx="64"
        cy="110"
        rx="24"
        ry="6"
        className="fill-illus-ground"
      />
      {children}
    </>
  );
}
