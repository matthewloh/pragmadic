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
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 rounded-3xl border p-5 space-y-5 relative bg-slate-900">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold ">Next + Supabase</h1>
        </div>
        <p className="text-sm text-gray-300">Register/Sign In 🤥</p>

        <div className="flex flex-col gap-4">
          <Button
            className="w-full flex items-center gap-2"
            variant={"outline"}
            onClick={() => handleLoginWithOAuth("github")}
          >
            <FaGithub />
            GitHub
          </Button>
          <Button
            className="w-full flex items-center gap-2"
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