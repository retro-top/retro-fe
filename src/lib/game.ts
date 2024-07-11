import resource, { ResourceType } from "@/constants/resource";
import useAptosPlay from "./aptos";
import { useState } from "react";

const usePlay = (game: ResourceType) => {
  const [gameArguments, setGameArguments] = useState<any[]>([]);
  const { configData, accountHasList, playGame } = useAptosPlay(game);

  const triggerGame = () => {
    playGame(gameArguments);
  };

  const changeGameArguments = (newElemValue: any, index: number) => {
    setGameArguments((prevArgs) => {
      const newArgs = [...prevArgs];
      newArgs[index] = newElemValue;
      return newArgs;
    });
  };

  return {
    gameArguments,
    setGameArguments,
    changeGameArguments,
    configData,
    accountHasList,
    triggerGame,
  };
};

export default usePlay;
