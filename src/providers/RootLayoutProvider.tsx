"use client";

import React from "react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ToastProvider } from "@/components/basic/Toast";
import { create } from "zustand";

type NavStore = {
  count: number;
  inc: () => void;
};

export const useNavStore = create<NavStore>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

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
