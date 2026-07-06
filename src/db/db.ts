import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

// Read DATABASE_URL from environment. Ensure it's set in your .env or deployment environment.
const DATABASE_URL = process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Please set it in .env or your environment variables.')
}

// postgres-js client
const sql = postgres(DATABASE_URL, {
  transform: {
    // default: don't transform identifiers
  },
})

export const db = drizzle(sql)

export type Database = typeof db
