import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

export const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: { 42: "https://2FViL2qsE1D44dA1JD9BDvXKOFs:807fb709960828bfad4646781cd68a87@eth2-beacon-mainnet.infura.io" },
        }
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "ai-generated-nft", // Required
            infuraId: "2FViL2qsE1D44dA1JD9BDvXKOFs", // Required
            chainId: 1, // Optional. It defaults to 1 if not provided
            darkMode: true // Optional. Use dark theme, defaults to false
        }
    },
    binancechainwallet: {
        package: true
    },
    opera: {
        package: true
    },
    bitkeep: {
        package: true
    }

};

