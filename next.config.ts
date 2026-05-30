import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75],
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.phucmyson.vn",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
