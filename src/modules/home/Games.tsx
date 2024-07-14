import games from "@/constants/games";
import React from "react";
import GameCard from "@/components/GameCard";

const Games = () => {
  return (
    <section>
      <h3>Our Games</h3>
      <div className="flex gap-4">
        {games.map((item) => (
          <GameCard game={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Games;
