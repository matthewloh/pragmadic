"use client";
import useUser from "@/app/hook/useUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { protectedPaths } from "@/lib/constants";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { DeleteIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  if (isFetching) {
    return <></>;
  }
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    if (protectedPaths.includes(pathname)) {
      router.replace("/auth?next=" + pathname);
    }
  };
  return (
    <>
      <div>
        {!data?.id ? (
          <Link href="/auth" className="animate-fade">
            <Button variant={"outline"}>Sign In</Button>
          </Link>
        ) : (
          <div className="justify flex flex-row gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"link"}>
                  {data?.image_url ? (
                    <div className="relative right-2 flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={`${data.image_url || ""}`}
                        alt={`Profile picture of ${data?.display_name || ""}`}
                        width={40}
                        height={40}
                        className="mr-2 cursor-pointer rounded-full ring-2"
                        onClick={handleLogout}
                      />
                    </div>
                  ) : (
                    <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full text-2xl font-bold ring-2">
                      <h1>{data!.email}</h1>
                    </div>
                  )}
                  <div className="font-sans">
                    Logged in as: {data.display_name}
                  </div>
                  <div className="font-inter">
                    Logged in as: {data.display_name}
                  </div>
                  <div className="font-overused">
                    Logged in as: {data.display_name}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOutIcon className="mr-2" />
                  Sign Out
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {}}>
                  <DeleteIcon className="mr-2" />
                  Delete Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className=""></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </>
  );
}
