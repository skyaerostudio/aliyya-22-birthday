/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/aliyya-22-birthday' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
