"use client";

import games from "@/constants/games";
import React from "react";
import GameCard from "@/components/GameCard";

const Game = () => {
  return (
    <div>
      <h3>Our Games</h3>
      <div
        className={`grid gap-3`}
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
      >
        {games.map((game) => (
          <div key={game.href}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
