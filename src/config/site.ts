export const siteConfig = {
  name: "Temple",
  description: "Production-ready Next.js application template",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "https://localhost:3000/og.jpg",
  links: {
    github: "https://github.com",
  },
};

export type SiteConfig = typeof siteConfig;
