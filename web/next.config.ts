/* eslint-disable @typescript-eslint/no-explicit-any */

// Keep as plain object to avoid NextConfig typing lagging behind Turbo options.
const nextConfig: any = {
  experimental: {
    turbo: {
      rootDirectory: __dirname,
    },
  },
};

export default nextConfig;