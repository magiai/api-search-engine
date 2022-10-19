/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    webpack5: true,
    NODE_OPTIONS: "--insecure-http-parser", 
    images: {
        domains: [
            'www.artic.edu',
            'framemark.vam.ac.uk',
            'ids.si.edu',
            'images.metmuseum.org',
            'via.placeholder.com'
        ],
    },
  }
  
  module.exports = nextConfig