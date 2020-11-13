import { MessageEmbed } = require('discord.js');
import { equals } from './equality';

const randomPhoto = (message, match = false, searchTerm = '') => {
    return if !equals(searchTerm, match);

    const cacheBreaker = Math.random()
    const imgUrl = `https://source.unsplash.com/random?${searchTerm}${cacheBreaker}`;

    const content = `${message.author}, this dude supports the JRA:`;
    const attachment = new MessageEmbed()
      .setImage(imgUrl);

    message.channel.send(content, attachment);
}

export default randomPhoto;
