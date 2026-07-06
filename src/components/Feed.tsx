"use client"

import { useState } from "react"
import Post from "@/components/Post"
import { Button } from "@/components/ui/button"

type PostItem = { id: string; author: string; content: string; createdAt: string }

export default function Feed() {
  const [posts, setPosts] = useState<PostItem[]>([
    { id: "1", author: "Alice", content: "Hello world — first post!", createdAt: new Date().toISOString() },
    { id: "2", author: "Bob", content: "Second post — excited to be here.", createdAt: new Date().toISOString() },
  ])
  const [text, setText] = useState("")

  function handlePost() {
    if (!text.trim()) return
    const p: PostItem = { id: String(Date.now()), author: "You", content: text.trim(), createdAt: new Date().toISOString() }
    setPosts([p, ...posts])
    setText("")
  }

  return (
    <main className="flex-1 max-w-2xl mx-auto p-4">
      <section className="mb-4 bg-card p-4 rounded">
        <textarea
          aria-label="Write a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[80px] resize-none rounded border border-input p-2 bg-transparent"
        />
        <div className="mt-2 flex justify-end">
          <Button onClick={handlePost}>Post</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {posts.map((p) => (
          <Post key={p.id} author={p.author} content={p.content} createdAt={p.createdAt} />
        ))}
      </section>
    </main>
  )
}
