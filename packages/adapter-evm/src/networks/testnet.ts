import { riseTestnet as viemRiseTestnet } from 'viem/chains';

import type { TypedEvmNetworkConfig } from '@openzeppelin/adapter-evm-core';

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
