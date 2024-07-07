"use client";

import React from "react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <nav className="flex items-center justify-between p-2 px-4 border border-gray-800">
      <Image height={50} width={50} alt="logo" src={"/logo.png"} />
      <WalletSelector />
    </nav>
  );
};

export default TopNavBar;
