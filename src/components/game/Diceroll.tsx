import React, { useRef, useImperativeHandle, forwardRef } from "react";
import Dice from "react-dice-roll";

const DICE_SIZE = 100;

export interface DiceRollRef {
  updateDiceValues: (value1: number, value2: number) => void;
}

interface DiceRef {
  rollDice: (value?: number) => void;
}

const Diceroll = forwardRef<DiceRollRef, {}>((props, ref) => {
  const dice1Ref = useRef<DiceRef>(null);
  const dice2Ref = useRef<DiceRef>(null);

  useImperativeHandle(ref, () => ({
    updateDiceValues: (value1: number, value2: number) => {
      dice1Ref.current?.rollDice(value1);
      dice2Ref.current?.rollDice(value2);
    },
  }));

  return (
    <div className="flex gap-8">
      <Dice size={DICE_SIZE} ref={dice1Ref} />
      <Dice size={DICE_SIZE} ref={dice2Ref} />
    </div>
  );
});

Diceroll.displayName = "Diceroll";

export default Diceroll;
