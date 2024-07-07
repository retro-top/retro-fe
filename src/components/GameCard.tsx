"use client";

import React from "react";
import { motion } from "framer-motion";
import SizedImage from "./basic/SizedImage";
import { FaCirclePlay } from "react-icons/fa6";
import { GameData } from "@/constants/games";

interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <motion.div
      initial={{ y: 6 }}
      whileHover={{ y: 0 }}
      transition={{ delay: 0 }}
      className="rounded-md relative h-60 w-full text-white group overflow-hidden cursor-pointer shadow-lg"
    >
      <SizedImage
        src={game.poster || "/sample.avif"}
        alt={game.id}
        className="h-full w-full"
        noCorner
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition">
        <FaCirclePlay size={80} />
      </div> */}
    </motion.div>
  );
};

export default GameCard;
