'use strict';

import dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
const AUTH = process.env.AUTH;

import MessageProcessor from './helpers/MessageProcessor.js';

class App {
  constructor() {
    this.client = new Client();
    this.client.on('ready', () => {
      console.log(`"Trap or Die"\n-Jeezy\n\nLove, ${this.client.user.tag}!`);
    });

    this.initCallAndResponse()

    this.client.login(AUTH);
  }

  initCallAndResponse() {
    this.client.on('message', message => {
      const processor = new MessageProcessor(message);

      processor.callAndRespond('adamm', 'Adammmm? good dude');
      processor.callAndRespond('park', 'All Glory to Chester');

      processor.randomPhoto('send dudes', 'dude', true);
    });
  }
}

export default App;
