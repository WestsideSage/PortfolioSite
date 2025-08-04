/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@nova/config'],
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
