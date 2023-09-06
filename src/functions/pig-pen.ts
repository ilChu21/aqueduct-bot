import { ethers } from 'ethers';
import { provider } from '../connections/bsc';
import { PIG_PEN_ADDR, PIG_PEN_ABI } from '../contracts/pig-pen';

export async function pigPenBalance(address: string): Promise<number> {
  try {
    const contract = new ethers.Contract(PIG_PEN_ADDR, PIG_PEN_ABI, provider);
    const stakedAFP = await contract.userInfo(address);

    return parseFloat(ethers.utils.formatEther(stakedAFP[0]));
  } catch (error) {
    console.error('❌ pigPenBalance() error!', error);
    return NaN;
  }
}
