/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com','jgec.ac.in']
  }
}

module.exports = nextConfig
