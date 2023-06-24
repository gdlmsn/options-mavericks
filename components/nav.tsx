"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "types"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface DashboardNavProps {
  items: SidebarNavItem[]
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"]
        return (
          item.href &&
          (!item.hasSubmenu ? (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          ) : (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="py-0">
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.subMenu?.map((subItem, subIndex) => (
                    <Link key={`${subIndex}-${index}`} href={subItem.href}>
                      <span
                        className={cn(
                          "items-right group flex rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          path === item.href ? "bg-accent" : "transparent",
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
        )
      })}
    </nav>
  )
}
