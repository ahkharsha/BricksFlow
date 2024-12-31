import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0x88A7e7Ad5D4Aeac40e03b0921Add5453b8Fe422c";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "6913532cb8a350b6dbb3";
export const PINATA_SECRET_KEY = "0c93e6871fd49b760c5aa1461e5fb4c86e6bd3e6bdf61c3220efdc0aee4020b4";

// NETWORK
const networks = {
  flow_mainnet: {
    chainId: `0x${Number(747).toString(16)}`,
    chainName: "Flow Mainnet",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.evm.nodes.onflow.org/"],
    blockExplorerUrls: ["https://evm.flowscan.io/"],
  },
  flow_testnet: {
    chainId: `0x${Number(545).toString(16)}`,
    chainName: "Flow Testnet",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.evm.nodes.onflow.org/"],
    blockExplorerUrls: ["https://evm-testnet.flowscan.io/"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://evm-testnet.flowscan.io/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "flow_testnet";

export const handleNetworkSwitch = async () => {
  const networkName = "flow_testnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};