/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/vivek-website",
  assetPrefix: "/vivek-website",
};

export default nextConfig;
