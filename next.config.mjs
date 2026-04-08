/**
 * Next.js Configuration
 * 
 * Configuration file for Next.js framework.
 * Currently using default settings, but can be extended for:
 * - Image optimization settings
 * - Environment variables
 * - Webpack customization
 * - Output settings
 * - Experimental features
 * 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
