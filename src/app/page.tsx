"use client";

import SizedImage from "@/components/basic/SizedImage";
import GameCard from "@/components/GameCard";
import games from "@/constants/games";
import React, { useState, useMemo } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = useMemo(() => {
    return games.filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const flagshipGames = [
    { name: "Flagship Game 1", description: "Exciting new game", startDate: "2024-07-01", endDate: "2024-08-01" },
    { name: "Flagship Game 2", description: "Another exciting game", startDate: "2024-06-15", endDate: "2024-07-15" }
  ];

  return (
    <main className="space-y-6 bg-gray-900 text-white">
      <div className="flex space-x-4 justify-center mt-4">
        <button className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-md">
          Playstation
        </button>
        <button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-lg shadow-md">
          Daily Claim
        </button>
      </div>
      <div className="relative flex space-x-4">
        <div className="w-1/2">
          <SizedImage
            alt="Cover Photo"
            src="https://unsplash.com/photos/Mf23RF8xArY/download?w=1920"
            className="min-h-[30rem] shadow-xl"
          />
          <div className="absolute space-y-8 ml-4 top-5">
            <p className="uppercase bg-gradient-to-r from-lime-300 to-lime-600 w-fit rounded-sm text-sm px-2 font-bold text-white">Daily</p>
            <p className="text-4xl font-bold max-w-xs">Log In everyday and collect points</p>
            <div className="flex space-x-2 text-center">
              <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md">
                <div id="hours" className="text-4xl font-bold">
                  02
                </div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div className="flex flex-col text-white items-center justify-center text-4xl font-bold">
                :
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md">
                <div id="minutes" className="text-4xl font-bold">
                  45
                </div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="flex flex-col text-white items-center justify-center text-4xl font-bold">
                :
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md">
                <div id="seconds" className="text-4xl font-bold">
                  12
                </div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-200 to-purple-500 shadow-xl shadow-gray-700 py-2 px-4 rounded-lg">Collect</button>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Flagship and Newly Added Games</h2>
          {flagshipGames.map((game, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">{game.name}</h3>
              <p className="text-sm mb-2">{game.description}</p>
              <p className="text-sm mb-2">Start Date: {game.startDate}</p>
              <p className="text-sm mb-2">End Date: {game.endDate}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl">Explore Our Games</h1>
          <FaAngleRight />
        </div>
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className={`p-4 bg-gray-800 rounded-lg shadow-lg relative h-48 ${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}
            >
              <h2 className="text-lg font-bold mb-2">{game.name}</h2>
              <p className="text-sm mb-4">Start Date: {game.startDate}</p>
              <p className="text-sm mb-4">End Date: {game.endDate}</p>
              <button className="absolute bottom-4 left-4 bg-purple-500 text-white py-2 px-4 rounded-md">Join Giveaway</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
