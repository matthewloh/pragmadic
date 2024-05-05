"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { db } from "@/db";
import { balls } from "@/db/schema";

export async function searchForThings() {
  const supabase = supabaseServer();
  const session = await supabase.auth.getUser();

  if (!session) {
    throw new Error("You must be logged in to search for things.");
  }

  const rooms = await db?.select().from(balls);
  return rooms;
}
