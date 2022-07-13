import { Client, Intents } from "discord.js";
import { Container } from "inversify";
import { Bot } from "./Bot";
import { CommandHandler } from "./CommandHandler/CommandHandler";
import { ICommandHandler } from "./CommandHandler/ICommandHandler";

const C = new Container();

C.bind(Bot)
    .toSelf()

C.bind(Client)
    .toConstantValue(new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
    }));

C.bind(ICommandHandler)
    .to(CommandHandler)


export default C;
