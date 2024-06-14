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

export const chats = pgTable("chats", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {
  id: integer("id").notNull().primaryKey(),
  chatId: uuid("chat_id")
    .notNull()
    .defaultRandom()
    .references(() => chats.id),
  role: text("role", { enum: ["user", "assistant"] }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof user.$inferSelect;
export type Chat = typeof chats.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type DerantauHub = typeof derantau_hub.$inferSelect;
