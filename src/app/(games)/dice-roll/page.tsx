"use client";

import Game from "@/components/Game";
import DiceRoll from "@/components/game/Diceroll";
import usePlay from "@/hooks/game";

const BET_TYPE = 1;
const SIDE = true;
const BET_AMOUNNT_EVEN_ODD = 100000000000;
const ARR = [
  "0", // bet for sum 2
  "0", // bet for sum 3
  "0", // bet for sum 4
  "0", // bet for sum 5
  "0", // bet for sum 6
  "0", // bet for sum 7
  "0", // bet for sum 8
  "0", // bet for sum 9
  "0", // bet for sum 10
  "0", // bet for sum 11
  "1000", // bet for sum 12
];

const NUMBER_OF_TIME_USER_WANT_TO_PLAY = 9;

const Page = () => {
  const { triggerGame } = usePlay("dice_roll", [
    BET_TYPE,
    ARR,
    SIDE,
    BET_AMOUNNT_EVEN_ODD,
    NUMBER_OF_TIME_USER_WANT_TO_PLAY,
  ]);

  const handleRollComplete = (results: [number, number]) => {
    console.log(`Dice roll results: ${results[0]} and ${results[1]}`);
    // Handle betting logic here
  };

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
          <button onClick={triggerGame}>Play</button>
        </Game.Sidebar>
        <Game.UI>
          <DiceRoll onRollComplete={handleRollComplete} />
        </Game.UI>
      </Game.Root>
    </main>
  );
};

export default Page;
