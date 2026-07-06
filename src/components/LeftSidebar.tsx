"use client"

import Link from "next/link"
import { HouseIcon, HashIcon, EnvelopeIcon, BellSimpleIcon, UserIcon, GearIcon, SunIcon, MoonIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function LeftSidebar() {
  const nav = [
    { href: "/", label: "Home", icon: HouseIcon },
    { href: "/explore", label: "Explore", icon: HashIcon },
    { href: "/notifications", label: "Notifications", icon: BellSimpleIcon },
    { href: "/messages", label: "Messages", icon: EnvelopeIcon },
    { href: "/profile", label: "Profile", icon: UserIcon },
    { href: "/settings", label: "Settings", icon: GearIcon },
  ]

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-muted bg-background p-4 flex flex-col justify-between">
      <nav className="flex flex-col gap-2">
        {nav.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Icon size={20} />
                <span className="text-sm">{item.label}</span>
              </Button>
            </Link>
          )
        })}
        <div className="mt-4">
          <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>


    </aside>
  )
}
