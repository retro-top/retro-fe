"use client";

import React, { forwardRef, useState, useImperativeHandle } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoTriangleSharp } from "react-icons/io5";
import usePlay from "@/lib/aptos";

const WheelOfFortune = forwardRef((props, ref) => {
  const { configData, accountHasList, playGame } = usePlay("fortune_wheel");
  const [rotation, setRotation] = useState(0);

  useImperativeHandle(ref, () => ({
    wheelRotate: handleClick,
  }));

  const handleClick = async () => {
    // const play = await playGame([7]);
    // console.log(play);
    setRotation((prev) => prev + 810); // Increment to continue rotation
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
    </div>
  );
});

WheelOfFortune.displayName = "WheelOfFortune";

export default WheelOfFortune;