/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
