/** @type {import('next').NextConfig} */

const path = require('path');
const rehypeSlug = import('rehype-slug');
const remarkGfm = import('remark-gfm');
const nextMDX = require('@next/mdx');

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm],
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  basePath: '/react-overlay',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.resolve.alias['@react-overlay/overlays'] = path.resolve(
      __dirname,
      '../dist'
    );
    return config;
  },
};

module.exports = withMDX(nextConfig);
