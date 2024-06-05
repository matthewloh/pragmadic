import { user } from "@/db/schema";
import { db } from "@/db";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { MotionProps, motion } from "framer-motion";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";
import BentoHome from "@/components/BentoHome";

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
    <div className="bg-secondary">
      <BentoHome />
      <div className="flex flex-col divide-y-4">
        {/* <div className="flex flex-col space-y-2 bg-inherit p-6 text-center dark:bg-inherit">
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
                className="mr-2 size-max animate-spin cursor-pointer self-center rounded-full ring-2"
              />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
