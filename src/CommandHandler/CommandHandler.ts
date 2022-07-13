import { injectable } from "inversify";
import { ICommandHandler } from "./ICommandHandler";

@injectable()
export class CommandHandler extends ICommandHandler {
    public handleCommand(command: string) {
        // ...
        return "";
    }
}
