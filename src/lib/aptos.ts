import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import resource, { ResourceType } from "@/constants/resource";
import testnet_data from "@/constants/testnet_data";
import { useEffect, useState } from "react";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import getNetwork from "./network";

const useAptosPlay = (game: ResourceType) => {
  const network = getNetwork();
  const config = new AptosConfig({ network });
  const aptos = new Aptos(config);

  const [configData, setConfigData] = useState<any>();
  const [accountHasList, setAccountHasList] = useState(false);

  const { wallet, signAndSubmitTransaction } = useWallet();

  // constant definination
  const MODULE_ADDRESS = (
    network === Network.MAINNET
      ? wallet?.url
      : testnet_data[game].module_address
  ) as string;

  const RESOURCE_ADDRESS = testnet_data[game].resource_address;
  const SUPPORTED_COIN = testnet_data[game].supported_coins[0].coin_address;

  const playGame = async (gameArguments: any[]) => {
    const transaction: InputTransactionData = {
      data: {
        function: resource[game].play(MODULE_ADDRESS),
        typeArguments: [SUPPORTED_COIN],
        functionArguments: [...gameArguments],
        // type: "entry_function_payload",
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });

      setAccountHasList(true);
      // console.log(response);
      return response;
    } catch (error) {
      console.error("Sign And Submit Error", error);
    }
  };

  useEffect(() => {
    const fetchAccountResource = async (
      account_address: string,
      module_address: string,
      coin_address: string
    ) => {
      const accountAddress = account_address;
      const resourceType = resource[game].config(module_address, coin_address);
      const accountResource = await aptos.getAccountResource({
        accountAddress,
        resourceType,
      });

      setConfigData(accountResource);
    };

    // fetchAccountResource(RESOURCE_ADDRESS, MODULE_ADDRESS, SUPPORTED_COIN);
  }, [RESOURCE_ADDRESS, MODULE_ADDRESS, SUPPORTED_COIN]);

  return { configData, accountHasList, playGame };
};

export default useAptosPlay;
