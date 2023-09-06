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
    const msg: string = `
Thank you, <b>${abbreviateAddress(
      from
    )}</b> for your <b>${amount}</b> AFP donation! 🐷💧

<a href="https://bscscan.com/tx/${txHash}">View Tx</a>
`;

    await bot.sendMessage(CHAT_ID, msg, {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error('❌ sendAfpInMsg() error!', error);
    throw error;
  }
}
