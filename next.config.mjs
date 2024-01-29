/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/tutcan/image/upload/v1706476067/meditainment/**",
      },
    ],
  },
};

export default nextConfig;
