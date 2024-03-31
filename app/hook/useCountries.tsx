"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQuery } from "@tanstack/react-query";

const initCountry = {
  created_at: "",
  author: "",
  name: "",
};

export default function useCountriesOfUser() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const supabase = supabaseBrowser();
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        // fetch user information from profiles table
        const { data: country } = await supabase
          .from("countries")
          .select("*")
          .eq("author", data.session.user.id);
        return country;
      }
      return initCountry; // else return empty user object
    },
  });
}
