"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoTriangleSharp } from "react-icons/io5";
import usePlay from "@/lib/aptos";

const WheelOfFortune = () => {
  const { configData, accountHasList, playGame } = usePlay("fortune_wheel");

  const [rotation, setRotation] = useState(0);

  const handleClick = async () => {
    const play = await playGame([7]);
    console.log(play)
  };


  return (
    <div className="relative w-80 h-80">
      <div className="rounded-full relative">
        <motion.div
          className="flex items-center justify-center text-white font-bold"
          initial={{ rotate: 0 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          <Image
            src="/wheel.png"
            alt="Wheel of Fortune"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="absolute bottom-6 left-[9.5rem]">
          <IoTriangleSharp color="#FF0000" />
        </div>
      </div>

      <button
        onClick={handleClick}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2"
      >
        Spin
      </button>
    </div>
  );
};

export default WheelOfFortune;
