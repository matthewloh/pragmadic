import QueryProvider from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { AI } from "./(chat)/chat/actions";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AI>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AI>
    </QueryProvider>
  );
}
