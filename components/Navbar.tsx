import Profile from "./Profile";
import Link from "next/link";
import PragmadicLogo from "./pragmadic-logo";
import { ModeToggle } from "./mode-toggle";
import { supabaseServer } from "@/lib/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export default async function Navbar() {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <header className="relative z-10 flex items-center justify-between bg-gray-100 py-2 dark:bg-gray-900">
      <div className="container m-auto flex w-full items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-mono text-xl hover:underline"
        >
          <PragmadicLogo />
        </Link>
        <div className="flex items-center gap-4">
          <Profile />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
