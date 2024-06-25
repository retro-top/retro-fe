"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavButtonProps {
  icon: React.ReactNode;
  name: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, name, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = () => icon

  return (
    <motion.div
      className={`rounded-lg ${
        isActive ? "bg-emerald-900" : "hover:bg-emerald-900"
      }`}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={href}>
        <div className="p-2 flex gap-2 items-center select-none text-sm md:text-base">
          <Icon />
          <span>{name}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default React.memo(NavButton);