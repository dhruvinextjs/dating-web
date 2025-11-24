// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,       // Turbopack OFF
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  swcMinify: false,
};

export default nextConfig;
