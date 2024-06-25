"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Dropdown from "@/components/basic/Dropdown";

interface CoinTossProps {
  answers: number[];
  onTossComplete: (results: string[]) => void;
}

const CoinToss: React.FC<CoinTossProps> = ({ answers, onTossComplete }) => {
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>([]);
  const controls = useAnimation();

  const flipCoins = () => {
    setIsFlipping(true);
    setResults([]);
    controls.start({
      rotateX: [0, 720, 1440],
      rotateY: [0, 720, 1440],
      rotateZ: [0, 720, 1440],
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    setTimeout(() => {
      setIsFlipping(false);
      const newResults = answers.map((item) =>
        item === 0 ? "heads" : "tails"
      );
      setResults(newResults);
      onTossComplete(newResults);
    }, 1500);
  };

  useEffect(() => {
    if (results.length > 0) {
      controls.stop();
      controls.set({ rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 });
    }
  }, [results, controls]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex space-x-4">
        {answers.map((_, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
            animate={controls}
          >
            {results[index] ? results[index].toUpperCase() : "?"}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-2 shadow bg-white rounded">
        
        <Dropdown options={['0', '1', '2', '3']} onSelect={() => {}}/>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={flipCoins}
            disabled={isFlipping}
          >
            {isFlipping ? "Flipping..." : "Flip Coins"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinToss;
