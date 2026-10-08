import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

/*
 * Social preview image. Raw hex is allowed in this file only (ImageResponse cannot read CSS variables).
 * Colours are palette A: bg #F7F9FA, primary #12403A, accent #F2A93B, ink #1F2B2E, alt-bg #D8ECEE.
 */

import { BrandLogo } from "@/components/icons/BrandLogo";

export const alt = `${SITE.name}, serving ${SITE.serviceArea}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const dmSansData = await fetch(
    new URL("https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTWfxZGI.woff")
  ).then((res) => res.arrayBuffer());

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
        fontFamily: '"DM Sans"',
      }}
    >
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <BrandLogo style={{ width: 650, color: "#12403A" }} />
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
          Free quotes · Insured · Edmonton-based · Year-round service
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "DM Sans",
          data: dmSansData,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
