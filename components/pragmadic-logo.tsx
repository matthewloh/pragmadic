import { Inter, Solway } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const solway = Solway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-solway",
});
export default function PragmadicLogo() {
  return (
    <div className="m-auto flex items-center justify-center gap-2 rounded-md bg-accent bg-logo p-2 dark:bg-logo">
      <Image src="/pragmadic.svg" width="36" height="36" alt="PRAGmadic Logo" />
      <div className={``}>
        <span className="text-center font-solway text-2xl font-normal leading-normal text-amber-700">
          pragmadic
        </span>
      </div>
    </div>
  );
}
