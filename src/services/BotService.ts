import { HadesBotService, singleton } from "hades";

@singleton(BotService)
export class BotService extends HadesBotService {

    async onReady() {
        console.log(`Logged in as ${this.client.user.username}.`);
    }
}