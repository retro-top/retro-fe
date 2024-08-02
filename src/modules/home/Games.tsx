"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import games from "@/constants/games";

interface Game {
  name: string;
  poster: string;
  href: string;
}

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = React.memo(({ game, onClick }) => (
  <motion.div
    className="relative w-full overflow-hidden rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -5 }}
    onClick={onClick}
  >
    <Image
      alt={game.name}
      src={game.poster}
      className="w-full h-auto"
      height={120}
      width={120}
      quality={85}
      priority
    />
  </motion.div>
));

GameCard.displayName = "GameCard";

const Game = ({
  dailyRewards = true,
  heading,
}: {
  dailyRewards?: boolean;
  heading: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section>
      <h3>{heading}</h3>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
      >
        {dailyRewards && (
          <GameCard
            game={{
              name: "Daily Rewards",
              poster: "/posters/daily-rewards.webp",
              href: "",
            }}
            onClick={() => {}}
          />
        )}
        {games.map(
          (game) =>
            pathname !== game.href && (
              <GameCard
                key={game.href}
                game={game}
                onClick={() => router.push(game.href)}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Game;
