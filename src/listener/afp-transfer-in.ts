import { ethers } from 'ethers';
import { provider } from '../connections/bsc';
import { AFP_ADDR, AFP_ABI } from '../contracts/afp';
import { aqueductAddress } from '../contracts/aqueduct';
import { sendAfpInMsg } from '../telegram/aqueduct';

(async function watchAfpAqueductTransfers() {
  const contract = new ethers.Contract(AFP_ADDR, AFP_ABI, provider);

  contract.on('Transfer', (from, to, _value, event) => {
    if (to === aqueductAddress) {
      const value = parseFloat(ethers.utils.formatEther(_value));
      const txHash = event.transactionHash;
      sendAfpInMsg(from, value, txHash);
    }
  });
})();
