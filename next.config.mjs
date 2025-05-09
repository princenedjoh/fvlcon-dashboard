/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            fs: false,
            encoding : false,
          };
        }
        return config;
    },
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
    images: {
      unoptimized : true,
        remotePatterns: [
            {
              protocol: "https",
              hostname: "facialdetectionstack-face-images.s3.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-detected-faces-bucket.s3.us-east-1.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-detected-faces-bucket.s3.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "facialdetectionstack-face-images.s3.us-east-1.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-number-plate-capture-bucket.s3.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-number-plate-capture-bucket.s3.us-east-1.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "fvlconized-images-bucket.s3.us-east-1.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-face-images.s3.amazonaws.com",
            },
            {
              protocol: "https",
              hostname: "sam-app-3-face-images.s3.us-east-1.amazonaws.com",
            },
          ]
      },
};

export default nextConfig;
