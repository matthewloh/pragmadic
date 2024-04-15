import { user } from "@/db/schema";
import { db } from "@/db";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = supabaseServer();
  const loggedInUser = await supabase.auth.getUser();
  const email = (loggedInUser.data.user?.email as string) ?? "nothing";
  // const data = await db
  //   .select({})
  //   .from(user)
  //   .where(eq(user.email, "matthewloh256@gmail.com"));
  const data =
    (await db?.query.user.findFirst({
      columns: {
        display_name: true,
        email: true,
        id: true,
        image_url: true,
      },
      where: eq(user.email, email),
    })) ?? undefined;
  return (
    <>
      <div className="divide-y-4 flex flex-col">
        <div className="bg-primary p-6">
          <p>{`${email}`}</p>
          <Link href="/dashboard">/dashboard</Link>
          <Link href="/profile">/profile</Link>
        </div>
        {data && (
          <div className="flex flex-col gap-4  my-6 bg-secondary">
            <h1>{`Profile of ${data.display_name?.toUpperCase()}`}</h1>
            <h2>{`Email: ${data.email}`}</h2>
            <h3>{`User ID: ${data.id}`}</h3>
            <Image
              src={data!.image_url ?? ""}
              width="40"
              height="40"
              alt="user profile picture"
              className="rounded-full animate-spin ring-2 cursor-pointer mr-2 self-center size-max"
            />
          </div>
        )}
      </div>
    </>
  );
}
