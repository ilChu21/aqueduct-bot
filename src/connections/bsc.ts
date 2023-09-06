import { ethers } from 'ethers';
import { POKT_KEY } from '../utils/env-vars';

const rpcUrls: string[] = [
  'https://bscrpc.com/',
  `https://bsc-mainnet.gateway.pokt.network/v1/lb/${POKT_KEY}`,
];

function createProvider(): ethers.providers.JsonRpcProvider {
  let provider: ethers.providers.JsonRpcProvider | null = null;

  for (const url of rpcUrls) {
    try {
      provider = new ethers.providers.JsonRpcProvider(url);
      break;
    } catch (error) {
      console.error(`Error creating provider with url '${url}':`, error);
    }
  }

  if (!provider) {
    throw new Error(
      'Failed to create a JsonRpcProvider with all the available rpcUrls.'
    );
  }
  return provider;
}

export const provider: ethers.providers.JsonRpcProvider = createProvider();
