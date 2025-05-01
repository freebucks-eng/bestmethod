"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isAppPage = pathname.startsWith("/app/");

  return (
    <header className="flex justify-center items-center py-8 bg-[#252b31] w-full">
      <div className="w-full max-w-5xl flex items-center justify-center relative px-4">
        {isAppPage && (
          <Link href="/" className="absolute left-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        )}

        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/app-sneak-logo.png"
            alt="AppSneak Logo"
            width={100}
            height={100}
            className="mb-2"
          />
          <h1 className="text-white text-4xl font-black">AppSneak</h1>
        </Link>
      </div>
    </header>
  );
}
