"use client";

import React from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";
import usePlay from "@/lib/aptos";

const WheelOfFortunePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center md:justify-center">
      <div className="bg-primary-light h-full w-full rounded flex items-center justify-center">
        <WheelOfFortune />
      </div>
    </main>
  );
};

export default WheelOfFortunePage;
