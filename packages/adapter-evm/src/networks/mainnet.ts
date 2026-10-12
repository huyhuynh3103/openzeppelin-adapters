import { NetworkArbitrumOne, NetworkBase, NetworkEthereum } from '@web3icons/react';
import {
  arbitrum as viemArbitrum,
  base as viemBase,
  mainnet as viemMainnet,
  rise as viemRise,
} from 'viem/chains';

import type { TypedEvmNetworkConfig } from '@openzeppelin/adapter-evm-core';

// The builder runs in a browser, so an RPC is only usable here if it answers a CORS preflight.
// `archive.rpc.risechain.com` holds the full history but answers 405 with no CORS headers, so
// mainnet defaults to the public endpoint; point `rpcEndpoints['rise-mainnet']` at the archive
// node once it allows browser origins.
const RISE_MAINNET_RPC_URL = 'https://rpc.risechain.com';

// Neither shadow fork sends CORS headers today, so both are browser-blocked until they do.
const RISE_STAGING_RPC_URL = 'https://shadow-fork-l2.riselabs.xyz';
const RISE_SHADOW_RPC_URL = 'https://shadow-rpc.riselabs.xyz';

export const ethereumMainnet: TypedEvmNetworkConfig = {
  id: 'ethereum-mainnet',
  exportConstName: 'ethereumMainnet',
  name: 'Ethereum',
  ecosystem: 'evm',
  network: 'ethereum',
  type: 'mainnet',
  isTestnet: false,
  chainId: 1,
  // Keyless, CORS-friendly public endpoint (verified: eth_chainId → 0x1, and a browser preflight
  // returns `access-control-allow-origin: *` with POST allowed). viem's default mainnet transport
  // is not a dependable browser default, so we pin an explicit one here. This same value is the
  // last-resort fallback for the ENS v2 L1 path (see `resolveMainnetRpcUrl` in profiles/shared.ts),
  // so browser mainnet resolution and cross-chain ENS both get a CORS-safe default.
  rpcUrl: 'https://ethereum-rpc.publicnode.com',
  explorerUrl: 'https://etherscan.io',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkEthereum,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemMainnet,
  accessControlIndexerUrl: 'https://ethereum.indexer.pasevin.com',
};

export const arbitrumMainnet: TypedEvmNetworkConfig = {
  id: 'arbitrum-mainnet',
  exportConstName: 'arbitrumMainnet',
  name: 'Arbitrum One',
  ecosystem: 'evm',
  network: 'arbitrum',
  type: 'mainnet',
  isTestnet: false,
  chainId: 42161,
  rpcUrl: viemArbitrum.rpcUrls.default.http[0],
  explorerUrl: 'https://arbiscan.io',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkArbitrumOne,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemArbitrum,
  accessControlIndexerUrl: 'https://openzeppelin-arbitrum-mainnet.graphql.subquery.network',
};

export const baseMainnet: TypedEvmNetworkConfig = {
  id: 'base-mainnet',
  exportConstName: 'baseMainnet',
  name: 'Base',
  ecosystem: 'evm',
  network: 'base',
  type: 'mainnet',
  isTestnet: false,
  chainId: 8453,
  rpcUrl: viemBase.rpcUrls.default.http[0],
  explorerUrl: 'https://basescan.org',
  apiUrl: 'https://api.etherscan.io/v2/api',
  primaryExplorerApiIdentifier: 'etherscan-v2',
  supportsEtherscanV2: true,
  iconComponent: NetworkBase,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: viemBase,
  accessControlIndexerUrl: 'https://openzeppelin-base-mainnet.graphql.subquery.network',
};

export const riseMainnet: TypedEvmNetworkConfig = {
  id: 'rise-mainnet',
  exportConstName: 'riseMainnet',
  name: 'RISE',
  ecosystem: 'evm',
  network: 'rise',
  type: 'mainnet',
  isTestnet: false,
  chainId: 4153,
  rpcUrl: RISE_MAINNET_RPC_URL,
  explorerUrl: 'https://explorer.risechain.com',
  // Blockscout speaks the Etherscan V1 protocol on /api, and serves it without an API key.
  apiUrl: 'https://explorer.risechain.com/api',
  primaryExplorerApiIdentifier: 'rise-mainnet',
  supportsEtherscanV2: false,
  requiresExplorerApiKey: false,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  viemChain: { ...viemRise, rpcUrls: { default: { http: [RISE_MAINNET_RPC_URL] } } },
};

/**
 * Staging and shadow are mainnet: same chain id, same deployed addresses, reached over a
 * different RPC. The chain id stays 4153 because it is part of the signature domain, so wagmi
 * dedupes all three down to the single `riseMainnet` chain entry. `type: 'devnet'` is what keeps
 * them out of the Mainnet group in the network picker.
 */
export const riseStaging: TypedEvmNetworkConfig = {
  ...riseMainnet,
  id: 'rise-staging',
  exportConstName: 'riseStaging',
  name: 'RISE Staging',
  type: 'devnet',
  rpcUrl: RISE_STAGING_RPC_URL,
  primaryExplorerApiIdentifier: 'rise-staging',
  viemChain: {
    ...viemRise,
    name: 'RISE Staging',
    rpcUrls: { default: { http: [RISE_STAGING_RPC_URL] } },
  },
};

export const riseShadow: TypedEvmNetworkConfig = {
  ...riseMainnet,
  id: 'rise-shadow',
  exportConstName: 'riseShadow',
  name: 'RISE Shadow',
  type: 'devnet',
  rpcUrl: RISE_SHADOW_RPC_URL,
  primaryExplorerApiIdentifier: 'rise-shadow',
  viemChain: {
    ...viemRise,
    name: 'RISE Shadow',
    rpcUrls: { default: { http: [RISE_SHADOW_RPC_URL] } },
  },
};
