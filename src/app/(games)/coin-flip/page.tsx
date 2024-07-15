"use client";

import React, { useRef } from "react";
import CoinToss from "@/components/game/coin-toss/Coin";
import Dropdown from "@/components/basic/Dropdown";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";
import { coin_flip } from "@/constants/testnet_data";
import { CoinFlipConfig } from "@/interface/game.interface";
import Select from "@/components/basic/Select";
import {
  CoinFlipResponse,
  TransactionEvent,
} from "@/interface/response.interface";

type Answer = 0 | 1;

const BET_AMOUNT = "100000000000";
const HEAD_TAIL = "1"; // 0-> heads /gui, 1-> tails / fomo
const CHANCES = "1";
const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const Page = () => {
  const { configData, gameArguments, changeGameArguments, triggerGame } =
    usePlay<CoinFlipConfig>("coin_flip", [HEAD_TAIL, BET_AMOUNT, CHANCES]);

  const coinTossRef = useRef<{ flipCoins: () => void }>(null);

  const handlePlayClick = async () => {
    const gameResponse = await triggerGame();
    const acceptedResponse = gameResponse.events.filter((item) =>
      item.type.includes(coin_flip.module_address)
    )[0] as TransactionEvent<CoinFlipResponse>;

    console.log(acceptedResponse.data);
  };

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
          <input
            value={gameArguments[1]}
            onChange={(e) => changeGameArguments(e.target.value, 1)}
            type="number"
            placeholder="Enter the Amount"
          />
          <Dropdown
            options={CHANCES_OPTIONS}
            onSelect={(opt) => {
              changeGameArguments(CHANCES_OPTIONS[opt], 2);
              console.log(gameArguments);
            }}
            defaultSelectedOption={gameArguments[2]}
          />
          <Select
            options={["GUI", "ZAAP"]}
            onSelect={(opt) => {
              changeGameArguments(opt, 0);
            }}
            defaultSelectedOption={gameArguments[0]}
          />
          <button onClick={handlePlayClick}>Flip Coin</button>
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
