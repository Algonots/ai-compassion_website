/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://compassionai.io",
  generateRobotsTxt: true,
  exclude: ["/admin", "/api", "/server-scripts"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin", "/api", "/server-scripts"],
      },
    ],
  },
};

export default config;
