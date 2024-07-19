"use client";

import React from "react";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";
import Main from "@/components/basic/Main";

const MOUNT_PER_BALL = "100000000000";
const NUM_OF_BALL = "10";
const GAME_ID = "plinko";

const Page = () => {
  const { triggerGame, reward, claimRewards } = usePlay(GAME_ID, [
    MOUNT_PER_BALL,
    NUM_OF_BALL,
  ]);

  const handleClaimRewards = async () => {
    const response = await claimRewards();
    console.log(response);
    // console.log(gameArguments)
  };

  return (
    <Main>
      <Game.Root game={GAME_ID}>
        <Game.Sidebar>
          {reward}
          <button onClick={() => triggerGame()}>Play</button>
          <button onClick={handleClaimRewards}>Claim Rewards</button>
        </Game.Sidebar>
        <Game.UI>Will Updated Soon</Game.UI>
      </Game.Root>
    </Main>
  );
};

export default Page;
