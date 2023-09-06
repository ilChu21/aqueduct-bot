import { TELEGRAM_API_KEY } from '../utils/env-vars';
import TelegramBot from 'node-telegram-bot-api';

const token: string = TELEGRAM_API_KEY;
export const bot: TelegramBot = new TelegramBot(token, { polling: false });
