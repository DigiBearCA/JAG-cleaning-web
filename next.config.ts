import type { NextConfig } from "next";

/**
 * Baseline security headers. No strict CSP on purpose: the Contact page embeds a Google Maps iframe.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    // Read the file as text to avoid TS dynamic import issues at config build time.
    let snowEnabled = false;
    try {
      const fs = require("fs");
      const path = require("path");
      const content = fs.readFileSync(path.join(process.cwd(), "src/content/services.ts"), "utf-8");
      // Find the block for snow-removal and extract its enabled value
      const match = content.match(/slug:\s*["']snow-removal["'][\s\S]*?enabled:\s*(true|false)/);
      if (match && match[1] === "true") {
        snowEnabled = true;
      }
    } catch (e) {
      // Ignore
    }

    return [
      {
        source: "/services/residential-cleaning",
        destination: "/services#residential-cleaning",
        permanent: true,
      },
      {
        source: "/services/commercial-cleaning",
        destination: "/services#office-cleaning",
        permanent: true,
      },
      {
        source: "/services/snow-removal",
        destination: snowEnabled ? "/services#snow-removal" : "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

