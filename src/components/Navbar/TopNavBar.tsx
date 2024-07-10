"use client";

import React from "react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <nav className="bg-primary-light flex items-center justify-between px-4 border border-gray-800 h-14">
      <Image height={120} width={120} alt="logo" src={"/logo.svg"} />
      <WalletSelector />
    </nav>
  );
};

export default TopNavBar;
