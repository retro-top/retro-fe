import { ResourceType } from "@/constants/resource";
import useAptosPlay from "./aptos";
import { useState } from "react";
import { Transaction } from "@/interface/response.interface";

const usePlay = <T>(game: ResourceType, defaultArguments?: any[]) => {
  const [gameArguments, setGameArguments] = useState<any[]>(
    defaultArguments || []
  );
  const { configData, accountHasList, playGame } = useAptosPlay<T>(game);

  const triggerGame = async () => {
    const data = (await playGame(gameArguments)) as Transaction;

    return data;
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
