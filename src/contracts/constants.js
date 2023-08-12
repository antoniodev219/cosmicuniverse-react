import { RPCProvider } from '../components/Web3';
import { ethers } from 'ethers';
import MAGIC from './magic';
import CosmicElvesTicketUpgradeableArtifact from '../assets/json/CosmicElvesTicketUpgradeable.json'

export const CONTRACT_ADDRESSES = {
  USDC: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
  TICKETS: '0xdC48cECc5443cC1982926060a89392c7dF1d4892'
}

export const CONTRACTS = {
  USDC: (provider = RPCProvider) => new ethers.Contract(CONTRACT_ADDRESSES.USDC, MAGIC.ABI, provider),
  TICKETS: (provider = RPCProvider) =>
    new ethers.Contract(CONTRACT_ADDRESSES.TICKETS, CosmicElvesTicketUpgradeableArtifact.abi, provider)
}