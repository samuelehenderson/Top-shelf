/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@topshelf/design", "@topshelf/flavor-graph"],
  experimental: {
    typedRoutes: false,
  },
}

export default nextConfig
