import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'randomtrip.net',
      },
      {
        protocol: 'https',
        hostname: 'www.novo-monde.com',
      },
      {
        protocol: 'https',
        hostname: 'cyclingdestination.cc',
      },
      {
        protocol: 'https',
        hostname: 'www.senditur.com',
      },
      {
        protocol: 'https',
        hostname: 'www.montblanc-experience.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'adventurebase--live.s3.eu-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thebestviewpoints.com',
      },
      {
        protocol: 'https',
        hostname: '57hours.com',
      }
    ],
  },
};

export default nextConfig;
