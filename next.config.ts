import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
