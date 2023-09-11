import 'dotenv/config';
import cron from 'node-cron';
import { callPigPenBalance } from './cron/pig-pen-balance';
import { watchAfpAqueductTransfers } from './listener/afp-transfer-in';

(async function main() {
  await watchAfpAqueductTransfers();
  console.log('AFP listener started...');

  cron.schedule('0 11 * * *', async () => {
    await callPigPenBalance();
  });
  console.log('Cron job started...');
})();
