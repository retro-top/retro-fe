"use client";

import usePlay from "@/lib/aptos";

const Page = () => {
  const { playGame } = usePlay("dice_roll");

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

  const NUMBER_OF_TIME_USER_WANT_TO_PLAY = 10;

  return (
    <div>
      <button
        onClick={() =>
          playGame([
            BET_TYPE,
            ARR,
            SIDE,
            BET_AMOUNNT_EVEN_ODD,
            NUMBER_OF_TIME_USER_WANT_TO_PLAY,
          ])
        }
      >
        Play
      </button>
    </div>
  );
};

export default Page;
