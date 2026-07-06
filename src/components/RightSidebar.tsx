"use client"

export default function RightSidebar() {
  return (
    <aside className="w-80 p-4 border-l border-muted hidden lg:block">
      <div className="mb-4">
        <input placeholder="Search" className="w-full rounded border border-input p-2 bg-transparent" />
      </div>

      <div className="mb-4 bg-card p-3 rounded">
        <h3 className="text-sm font-semibold mb-2">Who to follow</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">A</div>
              <div>
                <div className="text-sm">Dev A</div>
                <div className="text-xs text-muted-foreground">@deva</div>
              </div>
            </div>
            <button className="text-sm text-primary">Follow</button>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">B</div>
              <div>
                <div className="text-sm">Dev B</div>
                <div className="text-xs text-muted-foreground">@devb</div>
              </div>
            </div>
            <button className="text-sm text-primary">Follow</button>
          </li>
        </ul>
      </div>

      <div className="bg-card p-3 rounded">
        <h3 className="text-sm font-semibold mb-2">Trends for you</h3>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>#webdev</li>
          <li>#nextjs</li>
          <li>#drizzle</li>
        </ul>
      </div>
    </aside>
  )
}
