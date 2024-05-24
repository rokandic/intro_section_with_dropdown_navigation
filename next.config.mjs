/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

let nextConfig = {
  basePath: process.env.BASE_PATH,
  assetPrefix: `${process.env.BASE_PATH}/`,
};

if (isProduction) {
  nextConfig = {
    ...nextConfig,
    output: "export",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  };
}

export default nextConfig;
