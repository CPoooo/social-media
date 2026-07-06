"use client"

import Link from "next/link"
import { House, Hash, BellSimple, Envelope, User, Gear, Sun, Moon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function LeftSidebar() {
  const nav = [
    { href: "/", label: "Home", icon: House },
    { href: "/explore", label: "Explore", icon: Hash },
    { href: "/notifications", label: "Notifications", icon: BellSimple },
    { href: "/messages", label: "Messages", icon: Envelope },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Gear },
  ]

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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
      </nav>

      <div className="mt-4">
        <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
          {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </aside>
  )
}
