'use strict';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// I hope Ross sees my super active public Github repos
require('dotenv').config();
const AUTH = process.env.AUTH;

const { Client } = require('discord.js');

import callAndResponse from './actions/callAndResponse.js';
// import randomPhoto from './actions/randomPhoto';

class App {
  constructor() {
    this.client = new Client();
    this.client.on('ready', () => {
      console.log(`Do your jobs, love ${this.client.user.tag}!`);
    });

    this.initCallAndResponse()

    this.client.login(AUTH);
  }

  initCallAndResponse() {
    this.client.on('message', message => {
      callAndResponse(message, 'adamm', 'Adamm? good dude');
      callAndResponse(message, 'park', 'Park? All Glory to Chester');

      randomPhoto(message, true, 'dude');
    });
  }
}

const app = new App
