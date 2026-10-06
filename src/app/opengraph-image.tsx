import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

/*
 * Social preview image. Raw hex is allowed in this file only (ImageResponse cannot read CSS variables).
 * Colours are palette A: bg #F7F9FA, primary #12403A, accent #F2A93B, ink #1F2B2E, alt-bg #D8ECEE.
 */

export const alt = `${SITE.name}, serving ${SITE.serviceArea}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F7F9FA",
        padding: "72px 80px",
        color: "#1F2B2E",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 20,
            backgroundColor: "#12403A",
            color: "#F7F9FA",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          J
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#12403A",
            letterSpacing: 1,
          }}
        >
          {SITE.descriptor}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 168,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
            color: "#12403A",
          }}
        >
          {SITE.shortName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Cleaning &amp; Snow Removal in Edmonton, AB
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            width: 96,
            height: 12,
            borderRadius: 999,
            backgroundColor: "#F2A93B",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 48,
            height: 12,
            borderRadius: 999,
            backgroundColor: "#D8ECEE",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#4A5A5D",
            marginLeft: 8,
          }}
        >
          Free quotes · Insured · We bring our own supplies
        </div>
      </div>
    </div>,
    size,
  );
}
