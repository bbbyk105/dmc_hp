import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/api/search-image/**",
      },
    ],
  },
};

export default nextConfig;
