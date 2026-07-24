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
  async redirects() {
    return [
      {
        source: '/download',
        destination: '/apk/application-c392f9a0-dd24-4cb5-a2e0-b620e4fa734b.apk',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/apk/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="travel-go.apk"',
          },
        ],
      },
    ]
  },
}

export default nextConfig
