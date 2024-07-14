import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import resource, { ResourceType } from "@/constants/resource";
import testnet_data from "@/constants/testnet_data";
import { useEffect, useState } from "react";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import getNetwork from "../lib/network";
import { useToast } from "@/components/basic/Toast";

const useAptosPlay = <T>(game: ResourceType) => {
  const { addToast } = useToast();

  const network = getNetwork();
  const config = new AptosConfig({ network });
  const aptos = new Aptos(config);

  const [configData, setConfigData] = useState<T>();
  const [accountHasList, setAccountHasList] = useState(false);

  const { wallet, connected, signAndSubmitTransaction } = useWallet();

  // constant definination
  const MODULE_ADDRESS = (
    network === Network.MAINNET
      ? wallet?.url
      : testnet_data[game].module_address
  ) as string;

  const RESOURCE_ADDRESS = testnet_data[game].resource_address;
  const SUPPORTED_COINS = testnet_data[game].supported_coins.map(
    (coins) => coins.coin_address
  );

  const playGame = async (gameArguments: any[]) => {
    if (!connected) {
      addToast("Please Connect the Wallet", "error");
    }
    const transaction: InputTransactionData = {
      data: {
        function: resource[game].play(MODULE_ADDRESS),
        typeArguments: [...SUPPORTED_COINS],
        functionArguments: [...gameArguments],
        // type: "entry_function_payload",
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);
      const transactionResponse = await aptos.waitForTransaction({
        transactionHash: response.hash,
      });

      if (transactionResponse.success) setAccountHasList(true);
      
      return transactionResponse;
    } catch (error) {
      console.error("Sign And Submit Error", error);
    }
  };

  useEffect(() => {
    const fetchAccountResource = async (
      account_address: string,
      module_address: string,
      coin_addresses: string[]
    ) => {
      const accountAddress = account_address;
      const resourceType = resource[game].config(
        module_address,
        coin_addresses[0]
      );
      const accountResource = await aptos.getAccountResource({
        accountAddress,
        resourceType,
      });

      setConfigData(accountResource);
    };

    fetchAccountResource(RESOURCE_ADDRESS, MODULE_ADDRESS, SUPPORTED_COINS);
  }, []);

  return { configData, accountHasList, playGame };
};

export default useAptosPlay;
