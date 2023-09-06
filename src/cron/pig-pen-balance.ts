import { aqueductAddress } from '../contracts/aqueduct';
import { pigPenBalance } from '../functions/pig-pen';
import { sendPigPenBalanceMsg } from '../telegram/aqueduct';

(async (): Promise<void> => {
  const stakedAFP = await pigPenBalance(aqueductAddress);
  await sendPigPenBalanceMsg(stakedAFP);
})();
