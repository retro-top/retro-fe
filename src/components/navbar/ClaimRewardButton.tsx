"use client";

import { useNavStore } from "@/providers/RootLayoutProvider";
import React from "react";

const ClaimRewardButton = () => {
  const store = useNavStore();

  return (
    <div className="border border-gray-800 p-1 px-2 rounded flex gap-3 items-center justify-center">
      <span>{store.count}</span>
      <button className="p-1 text-xs px-2 rounded-sm">Claim Reward</button>
    </div>
  );
};

export default ClaimRewardButton;
