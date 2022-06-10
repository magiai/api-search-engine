/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    webpack5: true, 
    images: {
        domains: [
            'www.artic.edu',
            'framemark.vam.ac.uk',
            'ids.si.edu',
        ],
    },
  }
  
  module.exports = nextConfig