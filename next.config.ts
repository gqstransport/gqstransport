import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

function getBackendUrl(): string {
  return (
    process.env.API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:4000"
  ).replace(/\/$/, "");
}

function uploadRemotePatterns() {
  const patterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
    {
      protocol: "http",
      hostname: "localhost",
      port: "4000",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "www.murphylogistics.com",
    },
    {
      protocol: "https",
      hostname: "user-images.githubusercontent.com",
    },
    {
      protocol: "https",
      hostname: "placehold.co",
    },
  ];

  try {
    const u = new URL(getBackendUrl());
    const protocol = u.protocol.replace(":", "") as "http" | "https";
    if (u.hostname !== "localhost" || u.port !== "4000") {
      patterns.push({
        protocol,
        hostname: u.hostname,
        ...(u.port ? { port: u.port } : {}),
        pathname: "/uploads/**",
      });
    }
  } catch {
    /* ignore */
  }

  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: uploadRemotePatterns(),
  },
  async rewrites() {
    const backend = getBackendUrl();
    return [
      {
        source: "/uploads/:path*",
        destination: `${backend}/uploads/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
