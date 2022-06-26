import "reflect-metadata";

import { HadesContainer } from "hades";
import { installTextCommands } from "hades/dist/text-commands";

import { BotService } from "./services/BotService";

const container = new HadesContainer();
const bot = container.get(BotService);
bot.login();