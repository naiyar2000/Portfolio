/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
  basePath: process.env.NODE_ENV !== "production" ? undefined : "/Portfolio",
  assetPrefix: process.env.NODE_ENV !== "production" ? undefined : "/Portfolio/",
  output: process.env.NODE_ENV === "production" ? undefined : "export",
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
console.log(process.env.NODE_ENV)

module.exports = nextConfig;