"use client";

import React from "react";
import { motion } from "framer-motion";
import { GameData } from "@/constants/games";
import SizedImage from "./basic/SizedImage";
import Link from "next/link";

interface Props {
  game: GameData;
}
//useless

const GameCard = ({ game }: Props) => {
  return (
    <Link href={game.href} key={game.href}>
      <div className="w-full">
        <SizedImage alt={game.name} src={game.poster} noCorner />
      </div>
    </Link>
  );
};

export default GameCard;
