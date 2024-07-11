"use client";

import React, { useEffect, useRef } from "react";
import CoinToss from "@/components/game/Cointoss/Coin";
import GameLayout from "@/components/game-controller/GameLayout";
import Dropdown from "@/components/basic/Dropdown";
import Gamepad from "@/components/game-controller/Gamepad";
import usePlay from "@/lib/game";
import GameWrapper from "@/components/game-controller/GameWrapper";

type Answer = 0 | 1;

const BET_AMOUNT = "100000000000";
const CHANCES = "1";
const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const Page = () => {
  const { gameArguments, setGameArguments, changeGameArguments } =
    usePlay("coin_flip");

  useEffect(() => {
    setGameArguments(["0", BET_AMOUNT, CHANCES]);
  }, [setGameArguments]);

  const coinTossRef = useRef<{ flipCoins: () => void }>(null);

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
          <Dropdown
            options={["APTOS", "GUI", "ZAAP"]}
            onSelect={() => {}}
            defaultSelectedOption={0}
          />
          <button onClick={() => coinTossRef.current?.flipCoins()}>
            Flip Coin
          </button>
        </Gamepad>
        <GameWrapper>
          <CoinToss
            answers={
              Array.from({ length: parseInt(gameArguments[2]) }, () =>
                Math.floor(Math.random() * 3)
              ) as Answer[]
            }
            onTossComplete={() => {}}
            totalCoins={parseInt(gameArguments[2])}
            ref={coinTossRef}
          />
        </GameWrapper>
      </GameLayout>
    </main>
  );
};

export default Page;
