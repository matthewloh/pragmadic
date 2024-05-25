import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function PragmadicLogo() {
  return (
    <div className="m-auto flex items-center justify-center gap-2 rounded-md bg-accent bg-logo p-2 dark:bg-logo">
      <Image
        src="/pragmadicicon.svg"
        width="36"
        height="36"
        alt="PRAGmadic Logo"
      />
      <div className={`${inter.className}`}>
        <span className="font-sans text-2xl font-bold uppercase leading-6 text-sky-500">
          PRAG
        </span>
        <span className="font-sans text-2xl font-bold uppercase leading-6 text-amber-300">
          MADIC
        </span>
      </div>
    </div>
  );
}
