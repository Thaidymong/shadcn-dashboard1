import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    // dirs: ['src/__generated__'],
  },
  experimental: {
    // authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '21accec-space.moc.gov.kh',
      },
      {
        protocol: 'https',
        hostname: '21accec-space.moc.gov.kh',
      },
      {
        protocol: 'https',
        hostname: 's3.moc.gov.kh',
      },
      {
        protocol: 'http',
        hostname: 's3.moc.gov.kh',
      },
    ],
  },
};

export default nextConfig;
