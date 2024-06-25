import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const getNetwork = () => {
  let network = "devnet";
  if (process.env.NEXT_PUBLIC_APTOS_NETWORK !== undefined) {
    network = process.env.NEXT_PUBLIC_APTOS_NETWORK;
  }
  let selectedNetwork = Network.DEVNET;
  const lowercaseNetwork = network.toLowerCase();
  switch (lowercaseNetwork) {
    case "testnet":
      selectedNetwork = Network.TESTNET;
      break;
    case "mainnet":
      selectedNetwork = Network.MAINNET;
      break;
    case "local":
      selectedNetwork = Network.LOCAL;
      break;
  }
  return selectedNetwork;
};

export default getNetwork;
