import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function PragmadicLogo() {
  return (
    <div className="p-2 bg-accent bg-logo dark:bg-logo rounded-md flex justify-center items-center gap-2 m-auto">
      <Image
        src="/pragmadicicon.svg"
        width="36"
        height="36"
        alt="PRAGmadic Logo"
      />
      <div className={`${inter.className}`}>
        <span className="text-sky-500 text-2xl font-bold font-sans uppercase leading-6">
          PRAG
        </span>
        <span className="text-amber-300 text-2xl font-bold font-sans uppercase leading-6">
          MADIC
        </span>
      </div>
    </div>
  );
}
