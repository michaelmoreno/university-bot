import { Client, Message } from "discord.js";
import { injectable, inject } from "inversify";
import { ICommandHandler } from "./CommandHandler/ICommandHandler";

@injectable()
export class Bot {
    protected client: Client;
    protected commandHandler: ICommandHandler;

    constructor(
        @inject(Client) client: Client,
        @inject(ICommandHandler) commandHandler: ICommandHandler
    ) {
        this.client = client;
        this.commandHandler = commandHandler;
    }
    start(token: string): void {
        this.client.on("ready", () => console.log("Bot ready"));
        this.client.login(token)
            .then(res => console.log('Login Successful'))
            .catch(err => { console.log(err) });
        this.client.on("message", this.handleMessage.bind(this));
    }
    handleMessage(message: Message<boolean>): void {
        if (message.author.bot) 
            return;
        if (!message.mentions.has(this.client.user!))
            return;
        this.commandHandler.handleCommand(message.content)
    }
}
