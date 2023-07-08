import * as React from "react"

import { cn } from "@/lib/utils"

interface DashboardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardWrapper({
  children,
  className,
  ...props
}: DashboardWrapperProps) {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  )
}
