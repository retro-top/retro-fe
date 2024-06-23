"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  icon: React.ReactNode;
  name: string;
  href: string;
}

const NavButton = (game: NavButtonProps) => {
  const Icon = () => game.icon;
  const samePath = usePathname() === game.href;
  return (
    <div
      className={`rounded-lg ${
        samePath ? "bg-emerald-900" : "hover:bg-emerald-900"
      }`}
    >
      <Link href={game.href}>
        <motion.div
          className={`p-2 flex gap-2 items-center select-none text-sm md:text-base`}
          whileHover={{ x: 5, z: 50 }}
          transition={{ delay: 0.1 }}
        >
          <Icon />
          {game.name}
        </motion.div>
      </Link>
    </div>
  );
};

export default NavButton;
