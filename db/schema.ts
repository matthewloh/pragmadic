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
    .primaryKey()
    .notNull()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  email: text("email"),
  display_name: varchar("display_name", { length: 256 }),
  image_url: text("image_url"),
});

export type User = typeof user.$inferSelect;
