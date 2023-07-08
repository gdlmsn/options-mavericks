import React from "react"
import { redirect } from "next/navigation"

import db from "@/lib/prismadb"
import { authOptions, getCurrentUser } from "@/lib/session"

const PortfolioPage = async () => {
  const { user } = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const portfolio = await db.portfolio.findMany({
    where: {
      id: user.id,
    },
    select: {
      id: true,
      name: true,
      account: true,
      baseCurrency: true,
    },
  })

  return (
    <div>
      {portfolio?.length ? (
        <>
          {portfolio.map((p) => (
            <>
              <div>{p.id}</div>
              <div>{p.name}</div>
              <div>{p.account}</div>
              <div>{p.baseCurrency}</div>
            </>
          ))}
        </>
      ) : (
        <span>no portfolios available</span>
      )}
    </div>
  )
}

export default PortfolioPage
