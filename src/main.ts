import { Client } from 'discord.js';
import { token } from '../config.json';

const client = new Client({
	intents: []
});

client.once('ready', () => {
	console.log('Ready!');
});


client.login(token);
