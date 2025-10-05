import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Local images under /public are optimized by default; domains for remote images can be added later
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Keep default if unused; can enable future features explicitly here
  },
};

export default nextConfig;
