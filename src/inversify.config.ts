import { Client, Intents } from "discord.js";
import { Container } from "inversify";
import { Bot } from "./Bot";
import { ICommandHandler, CommandHandler } from "./CommandHandler";
import { ICommand, HelpCommand } from "./Commands/";
const commands = Reflect.getMetadata("commands", Reflect) || [];

const C = new Container();

C.bind(Bot)
    .toSelf()

C.bind(Client)
    .toConstantValue(new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
    }));

C.bind(ICommandHandler)
    .to(CommandHandler)

for (const command of commands) {
    C.bind(ICommand)
        .to(command)
}

C.bind('Keywords')
    .toConstantValue(['help','help me'])
    .whenTargetNamed('HelpCommand');

export default C;
