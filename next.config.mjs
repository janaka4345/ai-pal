/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'replicate.delivery',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                port: '',
            },
        ],
    },
}

export default nextConfig;
