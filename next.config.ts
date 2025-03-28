/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
  basePath: process.env.NODE_ENV !== "production" ? undefined : "/Portfolio",
  assetPrefix: process.env.NODE_ENV !== "production" ? undefined : "/Portfolio/",
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: envImageUnoptimize,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
console.log(process.env.NODE_ENV)

module.exports = nextConfig;