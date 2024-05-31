/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  experimental: {
    ppr: true,
      reactCompiler: true,
  },
  
}

module.exports = nextConfig
