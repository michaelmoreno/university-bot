import { Message } from "discord.js";
import { injectable } from "inversify";

@injectable()
export abstract class ICommandHandler {
    public abstract handleCommand(message: Message<boolean>): void;
}
