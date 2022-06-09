/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    webpack5: true, 
    // experimental: { modern: true, esmExternals: true, }, reactStrictMode: true,
    images: {
        domains: [
            'www.artic.edu'
        ],
    },
  }
  
  module.exports = nextConfig