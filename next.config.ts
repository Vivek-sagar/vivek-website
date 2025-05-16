import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/vivek-website",
  assetPrefix: "/vivek-website/",
  images: {
    unoptimized: true,
    path: "/vivek-website",
  },
  /* config options here */
};

export default nextConfig;
