'use client';

import React from "react";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <nav className="bg-primary-light flex items-center justify-between px-4 border border-x-0 border-gray-800 h-14">
      <Image height={50} width={50} alt="logo" src={"/logo.svg"} />
      <WalletConnector />
    </nav>
  );
};

export default TopNavBar;
