import { MessageEmbed } from 'discord.js';
import { equals } from './equality.js';

const randomPhoto = (message, call, match = false, searchTerm = '') => {
    if (!equals(message, call, match)) return;

    const cacheBreaker = Math.random()
    const imgUrl = `https://source.unsplash.com/random?${searchTerm}${cacheBreaker}`;

    const content = `${message.author}, this dude supports the JRA:`;
    const attachment = new MessageEmbed()
      .setImage(imgUrl);

    message.channel.send(content, attachment);
}

export default randomPhoto;
