/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ['nourishyou.in'], // ✅ Add any external image domains here
  },
};

export default nextConfig;
