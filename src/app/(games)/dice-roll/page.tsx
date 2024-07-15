"use client";
import { useRef } from "react";
import Game from "@/components/Game";
import DiceRoll, { type DiceRollRef } from "@/components/game/Diceroll";
import usePlay from "@/hooks/game";
import Dropdown from "@/components/basic/Dropdown";
import { dice_roll_arguments } from "@/constants/default_value";

const CHANCES_OPTIONS = Array.from({ length: 10 }, (_, i) =>
  (i + 1).toString()
);

const Page = () => {
  const dicerollRef = useRef<DiceRollRef>(null);
  const { configData, gameArguments, changeGameArguments, triggerGame } =
    usePlay("dice_roll", dice_roll_arguments);

  const handlePlayClick = async () => {
    const gameResponse = await triggerGame();

    console.log("Game Response", gameResponse);

    if (gameResponse.length > 0 && gameResponse[0].data) {
      const result = gameResponse[0].data;

      dicerollRef.current?.updateDiceValues(
        parseInt(result.dice_one_value),
        parseInt(result.dice_two_value)
      );
    }
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
          <DiceRoll ref={dicerollRef} />
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default Page;
