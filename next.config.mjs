/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.dev.to",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "dev-to-uploads.s3.amazonaws.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "img.daisyui.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
