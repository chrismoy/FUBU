'use strict';

import dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
const DISCORD_AUTH = process.env.DISCORD_AUTH;

import MessageProcessor from './helpers/MessageProcessor.js';
import TwitterProcessor from './helpers/TwitterProcessor.js';

class App {
  constructor() {
    this.client = new Client();
    this.client.on('ready', () => {
      console.log(`"Trap or Die"\n-Jeezy\n\nLove, ${this.client.user.tag}!`);
    });

    this.client.login(DISCORD_AUTH);

    this.initCallAndRespond();
    this.initSocialMedia();
  }

  initCallAndRespond() {
    this.client.on('message', message => {
      const processor = new MessageProcessor(message);

      processor.callAndRespond('adamm', 'Good dude');
      processor.callAndRespond('park', 'All Glory to Chester');

      processor.randomPhoto('send dudes', 'dude', true);
    });
  }

  initSocialMedia() {
    this.client.on('message', message => {
      const processor = new TwitterProcessor(message);

      processor.getTweets();
    });
  }
}

export default App;
