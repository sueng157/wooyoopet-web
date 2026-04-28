import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wooyoopet-web",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
