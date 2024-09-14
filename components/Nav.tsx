"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}) {
  const links = [
    { path: "/", name: "home" },
    { path: "/works", name: "works" },
    { path: "/posts", name: "posts" },
  ];
  const path = usePathname();
  return (
    <nav>
      <ul className={`${containerStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index} className={`capitalize ${linkStyles}`}>
              <a href={link.path}>
                {link.path === path && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ tyoe: "tween" }}
                    layoutId="underlien"
                    className={`${underlineStyles}`}
                  />
                )}
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
