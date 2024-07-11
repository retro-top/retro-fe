"use client";

import React from "react";
import usePlay from "@/hooks/game";
import Game from "@/components/Game";

const MOUNT_PER_BALL = "100000000000";
const NUM_OF_BALL = "10";

const Page = () => {
  const { triggerGame } = usePlay("plinko", [MOUNT_PER_BALL, NUM_OF_BALL]);

  return (
    <main>
      <Game.Root>
        <Game.Sidebar>
          <button onClick={() => triggerGame()}>Play</button>
        </Game.Sidebar>
        <Game.UI>Will Updated Soon</Game.UI>
      </Game.Root>
    </main>
  );
};

export default Page;
