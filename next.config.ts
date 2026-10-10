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
  images: {
    qualities: [75, 85],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  // The About page was removed (the client is not providing one); keep old links working.
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
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
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

