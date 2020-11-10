// I hope Ross sees my super active public Github repos
require('dotenv').config();
const AUTH = process.env.AUTH;

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Do your jobs, love ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'send dudes') {
    const discordCacheBreaker = Math.random()
    const imgUrl = `https://source.unsplash.com/random?dude${discordCacheBreaker}`;

    const content = `${message.author}, this dude supports the JRA:`;
    const attachment = new MessageEmbed()
      .setImage(imgUrl);

    message.channel.send(content, attachment);
  } else if (message.content.toLowerCase().includes("park")) {
    message.channel.send("Park? All Glory to Chester");
  }
});

client.login(AUTH);
