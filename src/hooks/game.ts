import { ResourceType } from "@/constants/resource";
import useAptosPlay from "./aptos";
import { useState } from "react";
import { Transaction } from "@/interface/response.interface";
import { useToast } from "@/components/basic/Toast";

const usePlay = <T>(game: ResourceType, defaultArguments?: any[]) => {
  const { addToast } = useToast();
  const [gameArguments, setGameArguments] = useState<any[]>(
    defaultArguments || []
  );
  const { configData, accountHasList, playGame } = useAptosPlay<T>(game);

  const triggerGame = async () => {
    if (!configData) {
      addToast("No Config Data Found", "error");
    }

    const data = (await playGame(gameArguments)) as Transaction;

    return data;
  };

  const changeGameArguments = (newElemValue: any, index: number) => {
    setGameArguments((prevArgs) => {
      if (prevArgs[index] === newElemValue) return prevArgs;
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
