/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/Resolutions",
  assetPrefix: "/Resolutions/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
