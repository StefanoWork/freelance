/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mep-agency/next-iubenda"],
  images: {
    domains: ["eu-central-1-shared-euc1-02.graphassets.com"],
  },
  async redirects() {
    return [
      {
        source: "/servizi/web",
        destination: "/servizi/web-design",
        permanent: true,
      },
      {
        source: "/servizi/social",
        destination: "/servizi/social-media",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
