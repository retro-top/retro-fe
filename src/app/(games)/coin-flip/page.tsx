"use client";

import React, { useRef } from "react";
import CoinToss from "@/components/game/Cointoss/Coin";
import Dropdown from "@/components/basic/Dropdown";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";

type Answer = 0 | 1;

const BET_AMOUNT = "100000000000";
const CHANCES = "1";
const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const Page = () => {
  const { gameArguments, changeGameArguments } = usePlay("coin_flip", [
    "0",
    BET_AMOUNT,
    CHANCES,
  ]);

  const coinTossRef = useRef<{ flipCoins: () => void }>(null);

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
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
        </Game.Sidebar>
        <Game.UI>
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
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default Page;
