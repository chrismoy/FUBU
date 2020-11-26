'use strict';

import { MessageEmbed } from 'discord.js';
import { equals } from '../utils/equality.js';

export default class MessageProcessor {
  constructor(message) {
    this.message = message;
  }

  callAndResponse(call, content, match = false) {
    const message = this.message;
    if (!equals(message, call, match)) return;

    message.channel.send(content);
  }

  randomPhoto(call, searchTerm = '', match = false) {
    const message = this.message;
    if (!equals(message, call, match)) return;

    const cacheBreaker = Math.random()
    const imgUrl = `https://source.unsplash.com/random?${searchTerm}${cacheBreaker}`;

    const content = `${message.author}, this dude supports the JRA:`;
    const attachment = new MessageEmbed()
    attachment.setImage(imgUrl);

    message.channel.send(content, attachment);
  }
}
