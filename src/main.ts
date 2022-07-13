import "reflect-metadata";
import { token } from '../config.json';
import { Bot } from './Bot';

import C from './inversify.config';

const bot = C.get(Bot);

bot.start(token);
