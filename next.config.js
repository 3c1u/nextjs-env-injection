const APP_ENV_TEST = process.env.APP_ENV_TEST;

const kNextConfigCheckIfEnvIsDefined = false;

if (kNextConfigCheckIfEnvIsDefined && !APP_ENV_TEST) {
  throw new Error('APP_ENV_TEST is not defined');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
  env: {
    APP_ENV_TEST,
  },
};

module.exports = nextConfig;
