/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/react-overlay',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
