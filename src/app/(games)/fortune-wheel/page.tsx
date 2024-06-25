"use client";

import React, { useState } from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";

const prizes = [
  { label: "10% OFF", color: "#FF6B6B" },
  { label: "20% OFF", color: "#4ECDC4" },
  { label: "30% OFF", color: "#45B7D1" },
  { label: "40% OFF", color: "#F7D065" },
  { label: "50% OFF", color: "#E27D60" },
  { label: "FREE GIFT", color: "#C38D9E" },
];

const WheelOfFortunePage: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  // In a real application, you might fetch this from an API or determine it based on user data
  const predefinedResult = "30% OFF";

  const handleSpinEnd = (winningPrize: string) => {
    setResult(winningPrize);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <WheelOfFortune prizes={prizes} stoppingAngle={360} />
      {result && (
        <div className="mt-8 text-xl font-semibold">
          Congratulations! You won: {result}
        </div>
      )}
    </div>
  );
};

export default WheelOfFortunePage;
