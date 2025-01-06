/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENVIRONMENT !== "production" ? false : true
const nextConfig = {
  basePath: process.env.NODE_ENVIRONMENT !== "production" ? undefined : "/Portfolio",
  assetPrefix: process.env.NODE_ENVIRONMENT !== "production" ? undefined : "/Portfolio/",
  output: process.env.NODE_ENVIRONMENT !== "production" ? undefined : "export",
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
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;