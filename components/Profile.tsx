"use client";
import useUser from "@/app/hook/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { ModeToggle } from "./mode-toggle";
export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  if (isFetching) return <div>Loading...</div>;

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
                {/* {data?.image_url ? (
                  <div className="flex flex-row justify-center gap-4">
                    <Image
                      src={`${data.image_url || ""}`}
                      alt={`Profile picture of ${data?.display_name || ""}`}
                      width={40}
                      height={40}
                      className="rounded-full animate-spin ring-2 cursor-pointer mr-2"
                      onClick={handleLogout}
                    />
                  </div>
                ) : (
                  <div className="h-[50px] w-[50px] flex items-center justify-center ring-2 rounded-full text-2xl font-bold cursor-pointer">
                    <h1>{data.email[0]}</h1>
                  </div>
                )} */}
                <Avatar className="mr-2 animate-spin ring-2 ring-red-400">
                  <AvatarImage src={data.image_url ?? ""} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Logged in as: {data.display_name}
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
          <ModeToggle />
        </div>
      )}
    </div>
  );
}
