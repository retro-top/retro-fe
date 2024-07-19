"use client";

import React from "react";
import Game from "@/components/Game";
import { useToast } from "@/components/basic/Toast";
import Main from "@/components/basic/Main";

const GAME_ID = 'nft_spin';

const Page = () => {
  const { addToast } = useToast();

  return (
    <Main>
      <Game.Root>
        <Game.Sidebar>
          <button onClick={() => addToast("this success is msg", "success")}>
            Show Success Toast
          </button>
          <button onClick={() => addToast("this error is msg", "error")}>
            Show Error Toast
          </button>
          <button onClick={() => addToast("this info is msg", "info")}>
            Show Info Toast
          </button>
        </Game.Sidebar>
        <Game.UI>Will Updated Soon</Game.UI>
      </Game.Root>
    </Main>
  );
};

export default Page;
