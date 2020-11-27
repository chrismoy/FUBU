'use strict';

import { MessageEmbed } from 'discord.js';
import { equals } from 'utils/equality.js';

export default class MessageProcessor {
  constructor(message) {
    this.message = message;
  }

  async sendMessage(content, attachment = null) {
    console.log("SWAG");
    try {
      await this.message.channel.send(content, attachment);
    } catch (error) {
      console.error(error)
    }
  }

  buildAttachment(searchTerm) {
    const cacheBreaker = Math.random()
    const imgUrl = `https://source.unsplash.com/random?${searchTerm}${cacheBreaker}`;
    const attachment = new MessageEmbed()
    attachment.setImage(imgUrl);

    return attachment;
  }

  callAndRespond(call, content, match = false) {
    const message = this.message;
    if (!equals(message, call, match)) return;

    this.sendMessage(content);
  }

  randomPhoto(call, searchTerm = '', match = false) {
    const message = this.message;
    if (!equals(message, call, match)) return;

    const content = `${message.author}, this dude supports the JRA:`;
    const attachment = this.buildAttachment(searchTerm);

    this.sendMessage(content, attachment);
  }
}
