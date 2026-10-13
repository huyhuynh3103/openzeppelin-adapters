import { NetworkArbitrumOne, NetworkBase, NetworkEthereum } from '@web3icons/react';
import {
  arbitrumSepolia as viemArbitrumSepolia,
  baseSepolia as viemBaseSepolia,
  riseTestnet as viemRiseTestnet,
  sepolia as viemSepolia,
} from 'viem/chains';

import type { TypedEvmNetworkConfig } from '@openzeppelin/adapter-evm-core';

export const ethereumSepolia: TypedEvmNetworkConfig = {
  id: 'ethereum-sepolia',
  exportConstName: 'ethereumSepolia',
  name: 'Sepolia',
  ecosystem: 'evm',
  network: 'ethereum',
  type: 'testnet',
  isTestnet: true,
  chainId: 11155111,
  rpcUrl: viemSepolia.rpcUrls.default.http[0],
  explorerUrl: 'https://sepolia.etherscan.io',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkEthereum,
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemSepolia,
  accessControlIndexerUrl: 'https://ethereum-sepolia.indexer.pasevin.com',
};

export const arbitrumSepolia: TypedEvmNetworkConfig = {
  id: 'arbitrum-sepolia',
  exportConstName: 'arbitrumSepolia',
  name: 'Arbitrum Sepolia',
  ecosystem: 'evm',
  network: 'arbitrum',
  type: 'testnet',
  isTestnet: true,
  chainId: 421614,
  rpcUrl: viemArbitrumSepolia.rpcUrls.default.http[0],
  explorerUrl: 'https://sepolia.arbiscan.io',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkArbitrumOne,
  nativeCurrency: {
    name: 'Arbitrum Sepolia Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemArbitrumSepolia,
  accessControlIndexerUrl: 'https://openzeppelin-arbitrum-sepolia.graphql.subquery.network',
};

export const baseSepolia: TypedEvmNetworkConfig = {
  id: 'base-sepolia',
  exportConstName: 'baseSepolia',
  name: 'Base Sepolia',
  ecosystem: 'evm',
  network: 'base',
  type: 'testnet',
  isTestnet: true,
  chainId: 84532,
  rpcUrl: viemBaseSepolia.rpcUrls.default.http[0],
  explorerUrl: 'https://sepolia.basescan.org',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkBase,
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemBaseSepolia,
  accessControlIndexerUrl: 'https://base-sepolia.indexer.pasevin.com',
};

export const riseTestnet: TypedEvmNetworkConfig = {
  id: 'rise-testnet',
  exportConstName: 'riseTestnet',
  name: 'RISE Testnet',
  ecosystem: 'evm',
  network: 'rise',
  type: 'testnet',
  isTestnet: true,
  chainId: 11155931,
  rpcUrl: viemRiseTestnet.rpcUrls.default.http[0],
  explorerUrl: 'https://explorer.testnet.riselabs.xyz',
  // Blockscout speaks the Etherscan V1 protocol on /api, and serves it without an API key.
  apiUrl: 'https://explorer.testnet.riselabs.xyz/api',
  primaryExplorerApiIdentifier: 'rise-testnet',
  supportsEtherscanV2: false,
  requiresExplorerApiKey: false,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemRiseTestnet,
};
