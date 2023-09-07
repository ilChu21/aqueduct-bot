import { CHAT_ID } from '../utils/env-vars';
import { bot } from '../connections/telegram';
import { aqueductAddress } from '../contracts/aqueduct';
import { numFor, abbreviateAddress } from '../utils/format';

export async function sendPigPenBalanceMsg(afp: number): Promise<void> {
  try {
    const image =
      'https://cdn.discordapp.com/attachments/1001892605551988886/1148965179955097660/image.png';

    const msg: string = `

🐷 Pig Pen Balance: *${numFor.format(afp)}*

\`${aqueductAddress}\`

[View Wallet](https://bscscan.com/address/${aqueductAddress}) | [Join Discussions](https://t.me/ProjectAqueduct)
`;

    await bot.sendPhoto(CHAT_ID, image, {
      caption: msg,
      parse_mode: 'Markdown',
    });
  } catch (error) {
    console.error('❌ sendPigPenBalanceMsg() error!', error);
    throw error;
  }
}

export async function sendAfpInMsg(
  from: string,
  amount: number,
  txHash: string
): Promise<void> {
  try {
    const gifUrl = 'https://tenor.com/view/maiteperroni-roma-gif-18832717';

    const msg: string = `
Thank you, *${abbreviateAddress(
      from
    )}* for your *${amount}* AFP donation to Project Aqueduct! 🐷💧

[View Tx](https://bscscan.com/tx/${txHash}) | [Join Discussions](https://t.me/ProjectAqueduct)

`;

    await bot.sendDocument(CHAT_ID, gifUrl, {
      caption: msg,
      parse_mode: 'Markdown',
    });
  } catch (error) {
    console.error('❌ sendAfpInMsg() error!', error);
    throw error;
  }
}
