"use client";

import React from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";
import usePlay from "@/lib/aptos";

const WheelOfFortunePage: React.FC = () => {
  return (
    <div className="min-h-screen md:min-h-[60vh] flex flex-col items-center md:justify-center">
      <WheelOfFortune />
    </div>
  );
};

export default WheelOfFortunePage;
