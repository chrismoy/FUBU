// I hope Ross sees my super active public Github repos

require('dotenv').config();

const AUTH = process.env.AUTH;

const Discord = require('discord.js');
const bot = new Discord.Client();
const imgUrl = 'https://source.unsplash.com/featured/?{dude},{man},{bro}';

bot.on('ready', () => {
  console.log(`Do your jobs, love ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.toLowerCase() === 'send dudes') {
    const attachment = new MessageAttachment(imgUrl);
    const content = `${msg.author}, this dude supports the JRA:`;

    msg.channel.send(content, attachment);
  }
});

bot.login(AUTH);
