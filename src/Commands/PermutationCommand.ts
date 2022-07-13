import { Message } from "discord.js";
import { ICommand } from "./ICommand";

export abstract class PermutationCommand extends ICommand {
    protected keywords: string[];

    constructor(keywords: string[]) {
        super();
        this.keywords = keywords;
    }
    protected getPermutation(array: string[]): string {
        if (array.length === 1) {
            return array[0]
        }
        return array[0] + " " + this.getPermutation(array.slice(1));
    }
    protected getPermutations(input: string): string[] {
        const words = input.split(" ");
        const permutations: string[] = [];
        for (let i = 0; i < words.length; i++) {
            const permutation = this.getPermutation(words.slice(0, i+1));
            permutations.push(permutation);
        }
        return permutations;
    }
    public match(content: string) {
        const permutations = this.getPermutations(content);
        
        for (const permutation of permutations) {
            if (this.keywords.includes(permutation))
                return true;
        }
        return false;
    }
    abstract execute(message: Message<boolean>)
}
    