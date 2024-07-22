"use client";

import games from "@/constants/games";
import React, { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import { useWindowWidth } from "@react-hook/window-size";
import useEmblaCarousel from "embla-carousel-react";

const Game = () => {
  const width = useWindowWidth();
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  return (
    <div className="overflow-auto space-y-2" ref={emblaRef}>
      <h3>Our Games</h3>
      <div className="embla__container">
        {games.map((game) => (
          <div
            key={game.href}
            className="embla__slide"
            style={{
              flex: `0 0 ${20000 / width}%`,
            }}
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
