import { Message } from "discord.js";
import { inject, named } from "inversify";
import { command } from "../decorators/command";
import { PermutationCommand } from "./PermutationCommand";

@command
export class HelpCommand extends PermutationCommand {
    constructor(
        @inject('Keywords') @named("HelpCommand") keywords: string[]
    ) {
        super(keywords);
    }
    public execute(message: Message<boolean>) {
        message.reply("This is a help command.");
    }
}
