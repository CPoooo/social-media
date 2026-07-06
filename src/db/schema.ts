import { pgTable, serial, varchar, text, timestamp, integer, uniqueIndex } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  username: varchar("username", { length: 100 }).notNull(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  bio: varchar("bio", { length: 100 }),
  profile_image_url: text("profile_image_url"),
  location: varchar("location", { length: 100 }),
  gender: varchar("gender", { length: 50 }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
}, (users) => ({
  emailIndex: uniqueIndex("users_email_idx").on(users.email),
  usernameIndex: uniqueIndex("users_username_idx").on(users.username),
}))

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull(),
  content: varchar("content", { length: 250 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
})

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull(),
  post_id: integer("post_id"),
  comment_id: integer("comment_id"),
  content: varchar("content", { length: 250 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
})

export const likes = pgTable("likes", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").notNull(),
  post_id: integer("post_id").notNull(),
  created_at: timestamp("created_at").defaultNow(),
}, (likes) => ({
  userPostIdx: uniqueIndex("likes_user_post_idx").on(likes.user_id, likes.post_id),
}))

export const follows = pgTable("follows", {
  id: serial("id").primaryKey(),
  follower_id: integer("follower_id").notNull(),
  followee_id: integer("followee_id").notNull(),
  created_at: timestamp("created_at").defaultNow(),
}, (follows) => ({
  followUnique: uniqueIndex("follows_unique_idx").on(follows.follower_id, follows.followee_id),
}))
