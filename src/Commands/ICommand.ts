import { Message } from "discord.js";
import { injectable } from "inversify";

@injectable()
export abstract class ICommand {
    public abstract match(content: string): boolean;
    public abstract execute(message: Message<boolean>): void;
}
