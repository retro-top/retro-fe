import React from "react";
import { GameData } from "@/constants/games";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  const router = useRouter();
  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onClick={() => router.push(game.href)}
    >
      <Image
        alt={game.name}
        src={game.poster}
        className="w-full h-auto"
        height={120}
        width={120}
      />
    </motion.div>
  );
};

export default GameCard;
