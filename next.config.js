/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/about",
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
