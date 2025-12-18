const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable React Strict Mode for better performance insights
  reactStrictMode: true,
  // Enable SWC minification for better performance
  swcMinify: true,
  // Compress output
  compress: true,
  // Production source maps for debugging
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig);