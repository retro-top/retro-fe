"use client";

import React, { useRef } from "react";
import WheelOfFortune from "@/components/game/fortune-wheel/FortuneWheel";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";
import Dropdown from "@/components/basic/Dropdown";
import { FortuneWheelConfig } from "@/interface/game.interface";
import { useToast } from "@/components/basic/Toast";
import { fortune_wheel } from "@/constants/testnet_data";
import {
  FortuneWheelResponse,
  TransactionEvent,
} from "@/interface/response.interface";

const CHANCES_OPTIONS = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const WheelOfFortunePage: React.FC = () => {
  const { addToast } = useToast();
  const { gameArguments, changeGameArguments, configData, triggerGame } =
    usePlay<FortuneWheelConfig>("fortune_wheel", ["1"]);
  const wheelRef = useRef<{ wheelRotate: () => void }>(null);

  const handlePlayClick = async () => {
    if (!configData) {
      addToast("No Config Data Found", "error");
    }

    const gameResponse = await triggerGame();
    const acceptedResponse = gameResponse.events.filter((item) =>
      item.type.includes(fortune_wheel.module_address)
    )[0] as TransactionEvent<FortuneWheelResponse>;

    console.log(acceptedResponse.data.reward_tier);
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
          <button onClick={handlePlayClick} disabled={!configData?.active}>
            Spin
          </button>
        </Game.Sidebar>
        <Game.UI>
          <WheelOfFortune ref={wheelRef} />
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default WheelOfFortunePage;
