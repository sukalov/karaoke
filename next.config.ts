import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.BRANCH_NAME === "songbook" ? "/songbook" : "",
  assetPrefix: process.env.BRANCH_NAME === "songbook" ? "/songbook" : "",
};

export default nextConfig;
