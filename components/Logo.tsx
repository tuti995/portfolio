"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.png"
        width={110}
        height={50}
        priority
        alt="logo"
      />
    </Link>
  );
}
