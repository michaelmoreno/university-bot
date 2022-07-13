import { Message } from "discord.js";
import { injectable, multiInject } from "inversify";
import { ICommand } from "../Commands/ICommand";
import { ICommandHandler } from "./ICommandHandler";

@injectable()
export class CommandHandler extends ICommandHandler {
    protected commands: ICommand[]

    constructor(
        @multiInject(ICommand) commands: ICommand[]
    ) {
        super();
        this.commands = commands;
    }
    public handleCommand(message: Message<boolean>) {
        const command = this.commands.find(command => command.match(message.content));
        if (command)
            command.execute(message);
    }
}
