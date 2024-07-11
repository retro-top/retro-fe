"use client";

import React, { useRef } from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";
import Dropdown from "@/components/basic/Dropdown";

const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const WheelOfFortunePage: React.FC = () => {
  const { gameArguments, changeGameArguments, triggerGame } = usePlay(
    "fortune_wheel",
    ["1"]
  );
  const wheelRef = useRef<{ wheelRotate: () => void }>(null);

  const handlePlayClick = () => {
    // wheelRef.current?.wheelRotate()
    triggerGame();
  };

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
          <Dropdown
            options={CHANCES_OPTIONS}
            onSelect={(opt) => {
              changeGameArguments(CHANCES_OPTIONS[opt], 0);
              console.log(gameArguments);
            }}
            defaultSelectedOption={0}
          />
          <button onClick={handlePlayClick}>Spin</button>
        </Game.Sidebar>
        <Game.UI>
          <WheelOfFortune ref={wheelRef} />
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default WheelOfFortunePage;
