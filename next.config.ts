import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: "",
                pathname: "/150/**",
            },
        ],
    },
};

export default nextConfig;
