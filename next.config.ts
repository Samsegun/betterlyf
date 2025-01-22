import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gwtifxkrflaidsnhryyy.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/specialists-images/**",
            },
        ],
    },
};

export default nextConfig;
