"use client";

import usePlay from "@/lib/aptos";

const Page = () => {
  const { playGame } = usePlay("plinko");
  const MOUNT_PER_BALL = "100000000000";
  const NUM_OF_BALL = "10";
  return (
    <main>
      <button onClick={() => playGame([MOUNT_PER_BALL, NUM_OF_BALL])}>
        Play
      </button>
    </main>
  );
};

export default Page;
