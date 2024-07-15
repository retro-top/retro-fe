"use client";

import Game from "@/components/Game";
import DiceRoll from "@/components/game/Diceroll";
import usePlay from "@/hooks/game";
import Dropdown from "@/components/basic/Dropdown";
import { dice_roll } from "@/constants/testnet_data";
import { DiceRollResponse, TransactionEvent } from "@/interface/response.interface";

const CHANCES_OPTIONS = Array.from({ length: 10 }, (_, i) =>
  (i + 1).toString()
);

const BET_TYPE = 0;
const SIDE = true;
const BET_AMOUNT_EVEN_ODD = 10000000;
const ARR = [
  "0", // bet for sum 2
  "0", // bet for sum 3
  "0", // bet for sum 4
  "0", // bet for sum 5
  "10000000", // bet for sum 6
  "0", // bet for sum 7
  "0", // bet for sum 8
  "0", // bet for sum 9
  "0", // bet for sum 10
  "0", // bet for sum 11
  "0", // bet for sum 12
];

const NUMBER_OF_TIME_USER_WANT_TO_PLAY = 1;

const Page = () => {
  const { configData, gameArguments, changeGameArguments, triggerGame } =
    usePlay("dice_roll", [
      BET_TYPE,
      ARR,
      SIDE,
      BET_AMOUNT_EVEN_ODD,
      NUMBER_OF_TIME_USER_WANT_TO_PLAY,
    ]);

  const handleRollComplete = (results: [number, number]) => {
  };

  console.log("Config", configData);

  const handlePlayClick = async () => {
    const gameResponse = await triggerGame();

    console.log(gameResponse);
  };

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
          <input
            value={gameArguments[3]}
            onChange={(e) => changeGameArguments(e.target.value, 3)}
            type="number"
            placeholder="Enter the Amount"
          />
          <Dropdown
            options={CHANCES_OPTIONS}
            onSelect={(opt) => {
              changeGameArguments(opt, 4);
            }}
            defaultSelectedOption={0}
          />
          <button onClick={handlePlayClick}>Play</button>
        </Game.Sidebar>
        <Game.UI>
          <DiceRoll onRollComplete={handleRollComplete} />
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default Page;
