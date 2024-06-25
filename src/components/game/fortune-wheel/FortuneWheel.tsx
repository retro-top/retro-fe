"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";

interface Prize {
  label: string;
  color: string;
}

interface WheelOfFortuneProps {
  prizes: Prize[];
  stoppingAngle: number;
}

const WheelOfFortune: React.FC<WheelOfFortuneProps> = ({
  prizes,
  stoppingAngle,
}) => {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation(360 * 10 + stoppingAngle);
  };

  return (
    <div className="relative w-80 h-80">
      <motion.div
        className="flex items-center justify-center text-white font-bold"
        initial={{ rotate: 0 }}
        animate={{ rotate: rotation }}
        transition={{ duration: 5, ease: "easeInOut",  }}
      >
        <Image
          src="/wheel.png"
          alt="Wheel of Fortune"
          width={500}
          height={500}
        />
      </motion.div>
      <button
        onClick={handleRotate}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
      >
        Spin
      </button>
    </div>
  );
};

export default WheelOfFortune;
