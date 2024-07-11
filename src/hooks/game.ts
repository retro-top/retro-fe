import { ResourceType } from "@/constants/resource";
import useAptosPlay from "./aptos";
import { useState } from "react";

const usePlay = (game: ResourceType, defaultArguments?: any[]) => {
  const [gameArguments, setGameArguments] = useState<any[]>(
    defaultArguments || []
  );
  const { configData, accountHasList, playGame } = useAptosPlay(game);

  const triggerGame = async () => {
    const data = await playGame(gameArguments);
    console.log(data);
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
