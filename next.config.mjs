/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

let nextConfig = {};

if (isProduction) {
  nextConfig = {
    basePath: "/intro_section_with_dropdown_navigation",
    assetPrefix: "/intro_section_with_dropdown_navigation/",
    output: "export",
    reactStrictMode: true,
  };
}

export default nextConfig;
