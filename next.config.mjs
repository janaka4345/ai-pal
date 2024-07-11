/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/a/'
            },
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
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
                port: '',
            },
        ],
    },
}

export default nextConfig
