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
        <div className="bg-inherit dark:bg-inherit p-6 flex flex-col text-center space-y-2">
          <p>{`${email}`}</p>
          <Link className={`font-sans`} href="/dashboard">
            /dashboard
          </Link>
          <Link className={`font-inter`} href="/profile">
            /profile
          </Link>
          <Link href="/derantau-nomad/apply">
            page for de rantau nomad applicants
          </Link>
          <Link href="/derantau-nomad/onboarding">
            page for de rantau nomad verified
          </Link>
          <Link href="/derantau-partner/apply">
            page for de rantau nomad partner applicant
          </Link>
          <Link href="/derantau-partner/apply">
            page for de rantau nomad partner verified
          </Link>
          {data && (
            <div className="flex flex-col">
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
      </div>
    </>
  );
}
