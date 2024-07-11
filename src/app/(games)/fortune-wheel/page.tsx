"use client";

import React, { useRef, useEffect } from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";
import usePlay from "@/lib/game";
import GameLayout from "@/components/game-controller/GameLayout";
import GameWrapper from "@/components/game-controller/GameWrapper";
import Gamepad from "@/components/game-controller/Gamepad";
import Dropdown from "@/components/basic/Dropdown";

const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const WheelOfFortunePage: React.FC = () => {
  const { gameArguments, setGameArguments, changeGameArguments, triggerGame } =
    usePlay("fortune_wheel");
  const wheelRef = useRef<{ wheelRotate: () => void }>(null);

  useEffect(() => {
    setGameArguments(["1"]);
  }, [setGameArguments]);

  const handlePlayClick = () => {
    wheelRef.current?.wheelRotate()
    // triggerGame();
  }

  return (
    <main>
      <GameLayout>
        <Gamepad>
          <Dropdown
            options={CHANCES_OPTIONS}
            onSelect={(opt) => {
              changeGameArguments(CHANCES_OPTIONS[opt], 2);
              console.log(gameArguments);
            }}
            defaultSelectedOption={0}
          />
          <button onClick={handlePlayClick}>Spin</button>
        </Gamepad>
        <GameWrapper>
          <WheelOfFortune ref={wheelRef} />
        </GameWrapper>
      </GameLayout>
    </main>
  );
};

export default WheelOfFortunePage;
