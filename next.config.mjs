/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/job-tracker-app",
  assetPrefix: "/job-tracker-app/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;