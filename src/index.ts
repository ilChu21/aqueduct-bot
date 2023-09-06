import 'dotenv/config';
import cron from 'node-cron';
import { exec } from 'child_process';

console.log('AFP listener started...');
exec('node dist/listener/afp-transfer-in.js', (error, stdout, stderr) => {
  if (error) {
    console.error('Error executing afp-transfer-in.js:', error.message);
    return;
  }
  if (stderr) {
    console.error('Error executing afp-transfer-in.js:', stderr);
    return;
  }
});

console.log('Cron job started...');
cron.schedule('* * * * *', () => {
  exec('node dist/cron/pig-pen-balance.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing pig-pen-balance.js:', error.message);
      return;
    }
    if (stderr) {
      console.error('Error executing pig-pen-balance.js:', stderr);
      return;
    }
  });
});
