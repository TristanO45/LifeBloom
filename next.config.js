const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = {
  ...nextConfig,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};
