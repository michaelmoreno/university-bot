import { injectable } from "inversify";

@injectable()
export abstract class ICommandHandler {
    public abstract handleCommand(command: string): void;
}
