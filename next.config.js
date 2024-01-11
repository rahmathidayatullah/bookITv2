/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI:
      "mongodb+srv://rahmathidayatullah996:4fBHgJMmvrvPxlxB@bookitv2database.vqrwmxe.mongodb.net/?retryWrites=true&w=majority",
    DB_URI:
      "mongodb+srv://rahmathidayatullah996:4fBHgJMmvrvPxlxB@bookitv2database.vqrwmxe.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
