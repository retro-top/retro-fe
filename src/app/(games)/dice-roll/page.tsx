"use client";

import { useRef, useState } from "react";
import Game from "@/components/Game";
import DiceRoll, { type DiceRollRef } from "@/components/game/Diceroll";
import usePlay from "@/hooks/game";
import Dropdown from "@/components/basic/Dropdown";
import { dice_roll_arguments } from "@/constants/default_value";
import Main from "@/components/basic/Main";
import Input from "@/components/basic/Input";
import { validateNumberString } from "@/utils/alert";
import { useToast } from "@/components/basic/Toast";

const CHANCES_OPTIONS = Array.from({ length: 10 }, (_, i) =>
  (i + 1).toString()
);
const GAME_ID = "dice_roll";

const Page = () => {
  const { addToast } = useToast();
  const [alert, setAlert] = useState<string>("");
  const dicerollRef = useRef<DiceRollRef>(null);
  const {
    configData,
    gameArguments,
    changeGameArguments,
    triggerGame,
    reward,
    claimRewards,
  } = usePlay(GAME_ID, dice_roll_arguments);

  const handlePlayClick = async () => {
    if (!configData) {
      addToast("Game is Not Started", "error");
      return;
    }
    const validate = validateNumberString(
      parseInt(gameArguments[1]),
      configData?.min_bet_amount as string,
      configData?.max_bet_amount as string
    );

    if (validate.error) {
      addToast(validate.error, "error");
      return;
    }

    if (validate.warning) {
      setAlert(validate.warning);
      return;
    }

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

  const handleClaimRewards = async () => {
    const response = await claimRewards();
    console.log(response);
    // console.log(gameArguments)
  };

  return (
    <Main>
      <Game.Root game={GAME_ID}>
        <Game.Sidebar>
          <Input
            value={gameArguments[3]}
            onChange={(e) => changeGameArguments(e.target.value, 3)}
            type="number"
            placeholder="Enter the Amount"
            label="Amount"
            about="Amount to bet"
          />
          <Dropdown
            options={CHANCES_OPTIONS}
            onSelect={(opt) => {
              changeGameArguments(opt, 4);
            }}
            defaultSelectedOption={0}
            label="Chances"
            about="Number of chances to win"
          />
          <button onClick={handlePlayClick}>Play</button>
          <p>{reward?.rewards_balance.value}</p>
          <button onClick={handleClaimRewards}>Claim Rewards</button>
        </Game.Sidebar>
        <Game.UI>
          <DiceRoll ref={dicerollRef} />
        </Game.UI>
      </Game.Root>
    </Main>
  );
};

export default Page;
