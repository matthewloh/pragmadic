import type { Metadata } from "next";
import { Inter, Solway } from "next/font/google";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const solway = Solway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-solway",
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
        className={`${GeistSans.className} ${inter.variable} ${GeistSans.variable} ${solway.variable}`}
      >
        <Providers>
          <Navbar />
          <NextTopLoader />
          <div className="flex min-h-screen flex-col space-y-6">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
