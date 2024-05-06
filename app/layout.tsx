import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PRAGmadic",
  description: "Pragmatic digital nomadism in Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${inter.variable} ${GeistSans.variable}`}
      >
        <Providers>
          <Navbar />
          <div className="container max-w-6xl min-h-screen mx-auto space-y-10">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
