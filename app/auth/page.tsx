"use client";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { KeyRound } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const params = useSearchParams();
  const next = params.get("next");
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + next, // equal to localhost:3000 in dev or your domain in prod
      },
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative w-96 space-y-5 rounded-3xl border bg-slate-900 p-5">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p className="text-sm text-gray-300">Register/Sign In 🤥</p>

        <div className="flex flex-col gap-4">
          <Button
            className="flex w-full items-center gap-2"
            variant={"outline"}
            onClick={() => handleLoginWithOAuth("github")}
          >
            <FaGithub />
            GitHub
          </Button>
          <Button
            className="flex w-full items-center gap-2"
            variant={"outline"}
            onClick={() => handleLoginWithOAuth("google")}
          >
            <FcGoogle /> Google
          </Button>
        </div>
        <div className="glowBox -z-10"></div>
      </div>
    </div>
  );
}
