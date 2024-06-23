import SizedImage from "@/components/basic/SizedImage";
import GameCard from "@/components/GameCard";
import games from "@/constants/games";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Page = () => {
  return (
    <main className="space-y-6">
      <div>
        <SizedImage
          alt="Cover Photo"
          src={"/cover.png"}
          className="min-h-[30rem] shadow-xl"
        />
      </div>
      <div>
        <div className="flex justify-between text-white">
          <h1 className="font-semibold text-2xl">Explore Our Games</h1>
          <FaAngleRight />
        </div>
        <div className="flex flex-wrap gap-4 py-4 w-full">
          {games.map((game, index) => {
            return <GameCard key={index} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
