import { ethers } from 'ethers';
import { provider } from '../connections/bsc';
import { AFP_ADDR, AFP_ABI } from '../contracts/afp';
import { newAqueductAddress, oldAqueductAddress } from '../contracts/aqueduct';
import { PIG_PEN_ADDR } from '../contracts/pig-pen';
import { sendAfpInMsg } from '../telegram/aqueduct';

export async function watchAfpAqueductTransfers() {
  const contract = new ethers.Contract(AFP_ADDR, AFP_ABI, provider);

  contract.on('Transfer', (from, to, _value, event) => {
    if (
      from !== PIG_PEN_ADDR &&
      (to === newAqueductAddress || to === oldAqueductAddress)
    ) {
      const value = parseFloat(ethers.utils.formatEther(_value));
      const txHash = event.transactionHash;
      sendAfpInMsg(from, value, txHash);
    }
  });
}
