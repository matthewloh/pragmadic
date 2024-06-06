import Profile from "./Profile";
import Link from "next/link";
import PragmadicLogo from "./pragmadic-logo";
import { ModeToggle } from "./mode-toggle";
import { supabaseServer } from "@/lib/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export default async function Navbar() {
  const supabase = supabaseServer();
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center border-b-2 border-gray-200 bg-white py-2 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-900">
      <div className="container m-auto flex w-full items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-mono text-xl hover:underline"
        >
          <PragmadicLogo />
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Profile />
        </div>
      </div>
    </header>
  );
}
