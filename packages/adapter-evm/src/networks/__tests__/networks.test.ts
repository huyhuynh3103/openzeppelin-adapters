import { describe, expect, it } from 'vitest';

import { evmMainnetNetworks, evmNetworks, evmTestnetNetworks } from '../index';

describe('evm networks', () => {
  it('exposes exactly the supported set, with unique ids and export names', () => {
    expect(evmNetworks.map((n) => n.id)).toEqual([
      'ethereum-mainnet',
      'arbitrum-mainnet',
      'base-mainnet',
      'rise-mainnet',
      'rise-staging',
      'rise-shadow',
      'ethereum-sepolia',
      'arbitrum-sepolia',
      'base-sepolia',
      'rise-testnet',
    ]);
    expect(new Set(evmNetworks.map((n) => n.exportConstName)).size).toBe(evmNetworks.length);
    expect([...evmMainnetNetworks, ...evmTestnetNetworks]).toEqual(evmNetworks);
  });

  it('gives the three RISE environments the same chain but distinct RPCs', () => {
    const shared = evmNetworks.filter((n) => n.chainId === 4153);
    expect(shared.map((n) => n.id)).toEqual(['rise-mainnet', 'rise-staging', 'rise-shadow']);
    expect(new Set(shared.map((n) => n.rpcUrl)).size).toBe(3);
    // wagmi dedupes viemChain by id and keeps the first, so mainnet must lead.
    expect(shared[0].id).toBe('rise-mainnet');
  });

  it('carries a viemChain on every network so wagmi picks it up', () => {
    expect(evmNetworks.every((n) => n.viemChain)).toBe(true);
  });
});
