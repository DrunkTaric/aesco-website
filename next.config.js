/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "aesco.com.sa"
            },
            {
                hostname: "aesco.sa.com"
            }
        ]
    }
}

module.exports = nextConfig
