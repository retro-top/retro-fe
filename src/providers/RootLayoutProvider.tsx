"use client";

import React from "react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ToastProvider } from "@/components/basic/Toast";

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const wallets = [new PetraWallet()];

  return (
    <ToastProvider>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        {children}
      </AptosWalletAdapterProvider>
    </ToastProvider>
  );
};

export default RootLayoutProvider;
