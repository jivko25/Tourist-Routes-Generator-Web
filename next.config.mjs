/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // No redirect + no custom APK headers:
  // Android Chrome often fails large downloads when Content-Disposition
  // or redirects interfere with byte-range requests.
}

export default nextConfig
