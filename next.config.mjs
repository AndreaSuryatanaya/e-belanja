/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "eyvgxnhfzdawvfbgssyn.supabase.co",
            },
        ],
    },
};

export default nextConfig;
