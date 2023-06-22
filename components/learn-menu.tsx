"use client"

import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { NavItemDropDown } from "@/types/nav"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

interface LearnMenuProps {
  items?: NavItemDropDown[]
}

const LearnMenu = ({ items }: LearnMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent>
        {items?.length ? (
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {items?.map(
              (item) =>
                item.href && (
                  <Link key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </Link>
                )
            )}
          </ul>
        ) : null}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default LearnMenu
