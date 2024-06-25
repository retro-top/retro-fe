"use client";

import usePlay from "@/lib/aptos";

const Page = () => {
  const { playGame } = usePlay("coin_flip");
  const BET_AMOUNT = "100000000000";
  const CHANCES = "2"; // chances

  return (
    <div>
      <button onClick={() => playGame(["0", BET_AMOUNT, CHANCES])}>Play</button>
    </div>
  );
};

export default Page;
