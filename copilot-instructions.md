# Copilot Instructions for social-media

## Build, Test & Lint

- **Development**: `npm run dev` - starts Next.js dev server on port 3000
- **Production build**: `npm run build` followed by `npm start`
- **Linting**: `npm run lint` - runs ESLint on the codebase (uses next/core-web-vitals and next/typescript configs)
- **Database migrations**: Use `drizzle-kit` (installed) for schema changes

## Database Setup

- **Type**: PostgreSQL (required, not optional)
- **Tool**: Drizzle ORM (next-generation TypeScript ORM)
- **Local setup**: `docker-compose up` starts PostgreSQL container configured with `.env` credentials
- **Database location**: `src/db/db.ts` (currently a stub, will contain Drizzle client setup)
- **Port**: 5432 (default PostgreSQL port)

## High-Level Architecture

This is a Twitter-like social media platform with the following core entities:

```
users — follows — users
  |
  +— posts — likes
  |         — comments
```

**API endpoints** (from README planning):

- Auth: `/api/auth/{login,register,signout}`
- Feed: `/api/feed/:userid` (global + followed users)
- Social: `/api/follow/:userid`, `/api/unfollow/:userid`
- Content: `/api/post/:userid` (create), `/api/profile` (update picture)

**Key tables**:

- `users`: profile data (image, bio, location, gender, timestamps)
- `posts`: text content (max 250 chars), created by user
- `comments`: nested comments (can reply to comments)
- `likes`: post likes (user-to-post association)
- `follows`: follower/followee relationships

**Current structure**:

- `/src/app` — Next.js App Router pages & API routes
- `/src/components` — React components (shadcn UI + custom)
- `/src/db` — Drizzle ORM schema & queries
- `/src/lib` — Utilities (e.g., `cn()` for Tailwind class merging)

## Key Conventions

### TypeScript

- Strict mode enabled globally
- App Router (not Pages Router) for all routing
- Exported `Metadata` in layout.tsx for SEO

### UI & Styling

- **Tailwind CSS 4** with CSS variables
- **shadcn UI** components (configured with base-lyra style)
- **Component aliases**: `@/components`, `@/ui` (shadcn), `@/lib` (utilities), `@/hooks` (custom hooks)
- **Icons**: Phosphor Icons library (`@phosphor-icons/react`)
- **Utility function**: `cn()` from `@/lib/utils` for combining Tailwind classes (uses `clsx` + `tailwind-merge`)

### Authentication

- **JWT** with `jsonwebtoken` package
- **Password hashing**: `bcrypt` (bcrypt 6.0.0)
- Store JWT in cookies or localStorage (standard pattern)

### Database

- Use **Drizzle ORM** exclusively (no raw SQL outside migrations)
- Keep database queries in `src/db/` directory
- Define schemas and relationships clearly

### Project Philosophy

From README: **"no ai just brain"** — This means:

- Avoid over-engineering
- Document architectural decisions
- Keep patterns simple and explicit
- No placeholder boilerplate

## Dependency Notes

- **Next.js 16.2.10** — Check node_modules/next/dist/docs/ for breaking changes from earlier versions
- **React 19.2.4** — May have API changes; consult docs if unsure
- **Tailwind CSS 4** — Different from v3; config is minimal
- **Drizzle ORM 0.45.2** — Relatively new version; prefer Drizzle patterns over raw SQL

## Testing

The project includes testing dependencies (`vitest`, `supertest`) but no tests are currently written. When writing tests:

- Use `vitest` for unit/integration tests
- Use `supertest` for API route testing
- Place tests next to source files or in a `__tests__` directory
