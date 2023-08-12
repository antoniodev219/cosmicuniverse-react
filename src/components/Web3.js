import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

import Toast from "./Toasts";

export const RPC_URL = 'https://api.avax.network/ext/bc/C/rpc';
export const RPCProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const StrBigNumber = (v, d = 18) => Number(ethers.utils.formatUnits(v, d)).toLocaleString()

export const WalletCheck = async () => {
    try {
        const detected = await detectEthereumProvider();
        if (detected) {
            const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
            let accounts = await web3Provider.listAccounts()
            if (accounts.length > 0) {
                return await ConnectWallet()
            }
        } else {
            Toast.Warn("Install the metamask extension first!");
        }
    } catch (e) {
        Toast.Warn("Ensure that you are connecting the correct wallet address with Metamask");
    }
}

export const ConnectWallet = async () => {
    try {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []);
        const accounts = await web3Provider.listAccounts()
        Toast.Success("Wallet connected")
        return {account: accounts[0], signer: web3Provider.getSigner()}
    } catch (e) {
        Toast.Warn(e.message)
    }
}

