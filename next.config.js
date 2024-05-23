module.exports = {
  // reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compress: false,
  swcMinify: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSETS_PREFIX || '',
  async headers() {
    // we're serving only public details, so adding public to all responses
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'cache-control',
            value: 'public, s-maxage=600',
          },
        ],
      },
    ]
  },
};
