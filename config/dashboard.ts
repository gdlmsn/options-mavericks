import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      hasSubmenu: false,
    },
    {
      title: "Portfolio",
      href: "/dashboard/portfolio",
      icon: "badgePercent",
      hasSubmenu: false,
    },
    {
      title: "Watchlists",
      href: "/watchlists",
      icon: "gem",
      hasSubmenu: true,
      subMenu: [
        {
          title: "Earnings",
          href: "/watchlists/earnings",
        },
        {
          title: "Futures",
          href: "/watchlists/futures",
        },
      ],
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
      hasSubmenu: false,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      hasSubmenu: false,
    },
  ],
}
