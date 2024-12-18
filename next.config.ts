import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    additionalData: `$var: red;`,
  },

};

export default nextConfig;
