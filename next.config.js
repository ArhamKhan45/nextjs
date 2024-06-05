/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
