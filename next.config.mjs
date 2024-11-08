/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd9hhrg4mnvzow.cloudfront.net',
        pathname: '/**', 
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/substitute-teacher',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;