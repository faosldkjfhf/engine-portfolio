/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faosldkjfhf.github.io",
        port: "",
        pathname: "/engine-portfolio/*",
      },
    ],
  },
};

export default nextConfig;
