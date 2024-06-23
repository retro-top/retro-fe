"use client";

import React from "react";
import { motion } from "framer-motion";
import SizedImage from "./basic/SizedImage";
import { FaCirclePlay } from "react-icons/fa6";

const GameCard = () => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{delay: 0.1}}
      className="rounded-md relative h-40 w-60 text-white group overflow-hidden cursor-pointer shadow-lg"
    >
      <SizedImage
        src={"/sample.avif"}
        alt="sample"
        className="h-full w-full"
        noCorner
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition">
        <FaCirclePlay size={80} />
      </div>
    </motion.div>
  );
};

export default GameCard;