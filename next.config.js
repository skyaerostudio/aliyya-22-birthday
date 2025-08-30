/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Explicitly set empty assetPrefix for Netlify
  assetPrefix: '',
  // Ensure proper static file handling
  generateEtags: false,
  poweredByHeader: false
}

module.exports = nextConfig
