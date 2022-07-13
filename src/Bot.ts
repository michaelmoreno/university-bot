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
    protected sanitize(message: Message<boolean>): Message<boolean> {
        message.content = message.content.replace(`<@${this.client.user!.id}>`, "").trim();
        return message
    }
    handleMessage(message: Message<boolean>): void {
        if (message.author.bot)
            return;
        if (!message.mentions.has(this.client.user!))
            return;
        
        const sanitized = this.sanitize(message);
        this.commandHandler.handleCommand(sanitized);
    }
}
