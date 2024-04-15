"use client";
import React from "react";
import Profile from "./Profile";
import Link from "next/link";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/browser";
import useUser from "@/app/hook/useUser";
import { NotebookPenIcon, ScanSearchIcon } from "lucide-react";
export default function Navbar() {
  const supabase = supabaseBrowser();
  const { isFetching, data } = useUser();
  const isLoggedIn = !!data?.id;

  return (
    <header className="relative z-10 flex justify-between items-center bg-gray-100 dark:bg-gray-900 py-2">
      <div className="container flex items-center justify-between w-full bg-red-500">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-xl hover:underline font-mono"
        >
          <Image
            src={"/icon.png"}
            width="50"
            height="50"
            alt="Dev Finder Logo"
          />
          PRAGmadic 
        </Link>
        <nav className="flex gap-4">
          {isLoggedIn && (
            <>
              <ScanSearchIcon />
              <NotebookPenIcon />
            </>
          )}
        </nav>
        <Profile />
      </div>
    </header>
  );
}
