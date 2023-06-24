import type { Icon } from "lucide-react"
import { boolean } from "zod"

import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  hasSubmenu: boolean
  subMenu?: subItems[]
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items?: NavLink[]
    }
)

export type subItems = {
  title: string
  href: string
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
