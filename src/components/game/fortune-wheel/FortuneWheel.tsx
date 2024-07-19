"use client";

import React, { forwardRef, useState, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { IoTriangleSharp } from "react-icons/io5";
import Wheel from "./Wheel";

const colors = [
  "#D03A3A", // Red
  "#808080", // Gray
  "#008000", // Green
  "#D03A3A", // Red
  "#808080", // Gray
  "#008000", // Green
  "#D03A3A", // Red
  "#808080", // Gray
  "#008000", // Green
  "#D03A3A", // Red
  "#808080", // Gray
  "#008000", // Green
  "#4B0082", // Indigo
];

const WheelOfFortune = forwardRef((props, ref) => {
  const [rotation, setRotation] = useState(0);

  useImperativeHandle(ref, () => ({
    wheelRotate: handleClick,
  }));

  const handleClick = async () => {
    setRotation((prev) => prev + 810);
  };

  return (
    <div className="relative">
      <motion.div
        className="flex items-center justify-center text-white font-bold"
        initial={{ rotate: 0 }}
        animate={{ rotate: rotation }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <Wheel colors={colors} size={300} />
      </motion.div>
    </div>
  );
});

WheelOfFortune.displayName = "WheelOfFortune";

export default WheelOfFortune;
