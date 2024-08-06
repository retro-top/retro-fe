"use client";

import React from "react";
import Image from "next/image";
import WalletConnector from "../WalletConnector";
import { useDailyClaimModalStore } from "@/providers/RootLayoutProvider";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import CasinoSports from "./CasinoSports";

const TopNavBar = () => {
  const { openDailyClaimModal } = useDailyClaimModalStore();
  const { connected } = useWallet();

  const LOGO_SIZE = 140;

  return (
    <nav className="px-4 md:gap-14 bg-primary-light flex items-center border border-x-0 border-gray-800 h-16">
      <CasinoSports />
      <div className="flex items-center justify-between w-full">
        <Image
          height={LOGO_SIZE}
          width={LOGO_SIZE}
          alt="logo"
          src={"/logo.webp"}
        />
        <div className="flex gap-2">
          {connected && (
            <button
              className="bg-orange-600 hover:bg-orange-500 hidden md:block"
              onClick={openDailyClaimModal}
            >
              Daily Claim
            </button>
          )}
          <WalletConnector />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
