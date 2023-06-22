export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Solutions",
      href: "/solutions",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Marketplace",
      href: "/marketplace",
    },
    {
      title: "Learn",
      href: "/learn",
    },
    {
      title: "Company",
      href: "/company",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    docs: "",
  },
}
