import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"], // 許可する外部画像のドメイン
  },
};

export default nextConfig;
