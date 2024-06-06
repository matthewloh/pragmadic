"use client";
import { MotionProps, motion } from "framer-motion";
import PragmadicLogo from "./pragmadic-logo";
import { twMerge } from "tailwind-merge";
import { supabaseBrowser } from "@/lib/supabase/browser";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { FaGithub, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import {
  ChefHatIcon,
  ClipboardPen,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  PersonStanding,
} from "lucide-react";

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className,
      )}
      {...rest}
    />
  );
};

const WelcomeBlock = () => {
  const { isFetching, data } = useUser();
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <Block className="col-span-10 row-span-8 md:col-span-6" whileHover={{}}>
      <div className="flex flex-col items-start justify-start">
        <Image
          src={data?.image_url || ""}
          width={30}
          height={30}
          alt="Profile picture"
          className="mb-4 animate-spin cursor-pointer self-center rounded-full ring-2 ring-zinc-700"
        />
        <h1 className="mb-2 font-inter text-4xl font-medium leading-tight">
          Welcome to PRAGmadic,{" "}
          <span className="overflow-auto font-sans text-zinc-300 underline underline-offset-auto">
            {data?.display_name ? `${data.display_name}` : ""}
          </span>
        </h1>
        <p className="font-sans text-2xl">A platform for DE Rantau</p>
      </div>
    </Block>
  );
};

const DashboardBlock = () => {
  return (
    <Block
      className="col-span-6 row-span-6 text-left font-inter"
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <Link
        href="/dashboard"
        className="grid h-full place-content-center text-3xl text-zinc-300"
      >
        <LayoutDashboard className="size-12" />
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-lg">Your dashboard is empty</p>
      </Link>
    </Block>
  );
};

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <Link
        href="/derantau-nomad/apply"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <ClipboardPen className="mx-auto size-8" />
        <h1 className="text-center text-xl font-semibold">Apply</h1>
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="/derantau-nomad/onboarding"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <PersonStanding className="mx-auto size-8" />
        <h1 className="text-center text-xl font-semibold">Onboarding</h1>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <Link
        href="/chat"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <MessageCircle className="mx-auto size-8 text-black" />
        <h1 className="text-center text-xl font-semibold text-black">Chat</h1>
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="/derantau-partner/apply"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I&apos;ve made
        over a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <MapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <Mail /> Join the list
      </button>
    </form>
  </Block>
);

export default function BentoHome() {
  return (
    <div className="container h-screen w-screen bg-zinc-200 dark:bg-zinc-900 p-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid h-full max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <WelcomeBlock />
        <DashboardBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
}
