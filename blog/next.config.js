/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    assetPrefix: '.',
}

module.exports = nextConfig
