"use client";

import React from "react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ToastProvider } from "@/components/basic/Toast";
import { create } from "zustand";
import Modal from "@/components/basic/Modal";
import DailyClaim from "@/components/DailyClaim";
interface ModalStore {
  isDailyClaimModalOpen: boolean;
  openDailyClaimModal: () => void;
  closeDailyClaimModal: () => void;
}

export const useDailyClaimModalStore = create<ModalStore>((set) => ({
  isDailyClaimModalOpen: false,
  openDailyClaimModal: () => set({ isDailyClaimModalOpen: true }),
  closeDailyClaimModal: () => set({ isDailyClaimModalOpen: false }),
}));

const DailyClaimModal = () => {
  const { isDailyClaimModalOpen, closeDailyClaimModal } =
    useDailyClaimModalStore();

  return (
    <Modal isOpen={isDailyClaimModalOpen} onClose={closeDailyClaimModal}>
      <DailyClaim />
    </Modal>
  );
};

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const wallets = [new PetraWallet()];

  return (
    <ToastProvider>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        {children}
        <DailyClaimModal />
      </AptosWalletAdapterProvider>
    </ToastProvider>
  );
};

export default RootLayoutProvider;
