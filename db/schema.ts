import { sql } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uuid,
  varchar,
  pgSchema,
} from "drizzle-orm/pg-core";
// Workaround for supabase auth user table and drizzle
export const authSchema = pgSchema("auth");

export const authUsers = authSchema.table("users", {
  id: uuid("id").primaryKey().notNull(),
});

export const user = pgTable("user", {
  createdAt: timestamp("created_at").defaultNow(),
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey()
    .notNull()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  email: text("email"),
  display_name: varchar("display_name", { length: 256 }),
  image_url: text("image_url"),
});

export const derantau_hub = pgTable("derantau_hub", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  hub_id: uuid("hub_id")
    .defaultRandom()
    .notNull()
    .references(() => user.id),
});

export const balls = pgTable("balls", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  user_id: uuid("user_id")
    .notNull()
    .references(() => user.id)
    .default(sql`gen_random_uuid()`),
});

export type User = typeof user.$inferSelect;
