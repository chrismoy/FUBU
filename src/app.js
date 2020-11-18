'use strict';

import dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
const AUTH = process.env.AUTH;

import callAndResponse from './actions/callAndResponse.js';
import randomPhoto from './actions/randomPhoto.js';

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
      callAndResponse(message, 'adamm', 'Adamm? good dude');
      callAndResponse(message, 'park', 'All Glory to Chester');

      randomPhoto(message, 'send dudes', true, 'dude');
    });
  }
}

export default App;
