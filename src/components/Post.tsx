"use client"

import { useState } from "react"
import { Heart } from "@phosphor-icons/react"

export default function Post({ author, content, createdAt }: { author: string; content: string; createdAt: string }) {
  const [liked, setLiked] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Render a deterministic server-side timestamp (UTC) and switch to locale string after mount
  const serverTime = new Date(createdAt).toUTCString()
  const clientTime = mounted ? new Date(createdAt).toLocaleString() : serverTime

  return (
    <article className="bg-card p-4 rounded border border-border">
      <header className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">{author[0]}</div>
        <div>
          <div className="text-sm font-semibold">{author}</div>
          <div suppressHydrationWarning className="text-xs text-muted-foreground">{clientTime}</div>
        </div>
      </header>
      <div className="text-sm mb-3">{content}</div>
      <footer className="flex items-center gap-3">
        <button
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Heart size={16} weight={liked ? "fill" : "regular"} className={liked ? "text-destructive" : ""} />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>
      </footer>
    </article>
  )
}
