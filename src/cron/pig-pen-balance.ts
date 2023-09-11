import { oldAqueductAddress, newAqueductAddress } from '../contracts/aqueduct';
import { pigPenBalance } from '../functions/pig-pen';
import { sendPigPenBalanceMsg } from '../telegram/aqueduct';

export async function callPigPenBalance(): Promise<void> {
  const oldStakedAFP: number = await pigPenBalance(oldAqueductAddress);
  const newStakedAFP: number = await pigPenBalance(newAqueductAddress);
  const staked: number = oldStakedAFP + newStakedAFP;
  await sendPigPenBalanceMsg(staked);
}
