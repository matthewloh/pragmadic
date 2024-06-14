import { db } from "@/db";
import { user } from "@/db/schema/users";
import { eq } from "drizzle-orm";

export async function getUserByName(name: string) {
  return await db.query.user.findFirst({
    where: eq(user.display_name, name),
  });
}
