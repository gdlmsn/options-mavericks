export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemDropDown extends NavItem {
  navItemTitle: string
  description: string
}
