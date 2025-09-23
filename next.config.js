const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    turbopack: {
      root: __dirname, // same value
    },
  },
};

module.exports = nextConfig;


