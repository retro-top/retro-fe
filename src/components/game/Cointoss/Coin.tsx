"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Answer = 0 | 1;

interface CoinTossProps {
  answers: Answer[];
  onTossComplete: (results: string[]) => void;
  totalCoins: number;
}

const CoinToss: React.FC<CoinTossProps> = ({
  answers,
  onTossComplete,
  totalCoins,
}) => {
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
    <div className="h-fit flex items-center justify-center">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {Array.from({ length: totalCoins }).map((_, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
            animate={controls}
          >
            {results[index] ? results[index].toUpperCase() : "?"}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoinToss;
