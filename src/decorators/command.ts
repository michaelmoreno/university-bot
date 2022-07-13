import { ICommand } from "../Commands/ICommand";
import { Ctor } from "../types";

export function command(target: Ctor<ICommand>) {
    const commands = Reflect.getMetadata("commands", Reflect) || [];
    commands.push(target);
    Reflect.defineMetadata("commands", commands, Reflect);
}
