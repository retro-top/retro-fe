"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  icon?: React.ReactNode;
  name: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, name, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = () => icon;

  return (
    <div
      className={`rounded-lg transition ${
        isActive ? "text-secondary" : "md:hover:text-secondary-lighter"
      }`}
    >
      <motion.div
        whileHover={{ x: isActive ? 0 : 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href={href}>
          <div className="p-2 flex gap-2 items-center select-none md:text-base">
            <Icon />
            <span className="text-sm">{name}</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default React.memo(NavButton);
