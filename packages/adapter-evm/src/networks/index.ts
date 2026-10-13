import type { TypedEvmNetworkConfig } from '@openzeppelin/adapter-evm-core';

import {
  arbitrumMainnet,
  baseMainnet,
  ethereumMainnet,
  riseMainnet,
  riseShadow,
  riseStaging,
} from './mainnet';
import { arbitrumSepolia, baseSepolia, ethereumSepolia, riseTestnet } from './testnet';

// All mainnet networks.
// `riseMainnet` must precede `riseStaging`/`riseShadow`: all three are chain 4153, and the wagmi
// integration dedupes `viemChain` by id keeping the first, so mainnet is the entry wallets see.
export const evmMainnetNetworks: TypedEvmNetworkConfig[] = [
  ethereumMainnet,
  arbitrumMainnet,
  baseMainnet,
  riseMainnet,
  riseStaging,
  riseShadow,
];

// All testnet networks
export const evmTestnetNetworks: TypedEvmNetworkConfig[] = [
  ethereumSepolia,
  arbitrumSepolia,
  baseSepolia,
  riseTestnet,
];

// All EVM networks
// NOTE: The wagmi integration automatically uses all networks defined here that have a `viemChain` property.
// This ensures that adding a new network to mainnet.ts or testnet.ts automatically makes it available to wagmi.
export const evmNetworks: TypedEvmNetworkConfig[] = [...evmMainnetNetworks, ...evmTestnetNetworks];

// Export individual networks for direct import
export {
  // Mainnet networks
  ethereumMainnet,
  arbitrumMainnet,
  baseMainnet,
  riseMainnet,
  riseStaging,
  riseShadow,
  // Testnet networks
  ethereumSepolia,
  arbitrumSepolia,
  baseSepolia,
  riseTestnet,
};
