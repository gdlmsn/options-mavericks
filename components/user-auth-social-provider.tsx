import React, { useEffect, useMemo, useState } from "react"
import { Icon } from "lucide-react"
import Discord from "next-auth/providers/discord"
import { getProviders, signIn } from "next-auth/react"
import {
  BsDiscord,
  BsFill1CircleFill,
  BsGithub,
  BsGoogle,
} from "react-icons/bs"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"

type Provider = {
  id: string
  name: string
  type: string
  signInUrl?: string
  callbackUrl: string
  signInUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useMemo(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      console.log(res)
      setProviders(res)
    }
    fetchProviders()
  }, [])

  if (providers) {
    return (
      <div className="grid gap-2">
        {Object.values(providers).map((provider: Provider, index) => (
          <button
            type="button"
            key={index}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            onClick={() => {
              setIsLoading(true)
              signIn(provider?.id)
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                {provider.name === "GitHub" && (
                  <BsGithub className="mr-2 h-4 w-4" />
                )}
                {provider.name === "Google" && (
                  <BsGoogle className="mr-2 h-4 w-4" />
                )}
                {provider.name === "Discord" && (
                  <BsDiscord className="mr-2 h-4 w-4" />
                )}
              </>
            )}
            {provider.name}
          </button>
        ))}
      </div>
    )
  }
}

export default AuthProviders
