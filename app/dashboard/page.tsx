import { db } from "@/db";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";

export default async function Dashboard() {
  const supabase = supabaseServer();
  const loggedInUser = await supabase.auth.getUser();
  return (
    <div>
      <h1>{`Dashboard of ${loggedInUser.data.user?.email}`}</h1>
      <h2>{`User ID: ${loggedInUser.data.user?.id}`}</h2>
    </div>
  );
}
