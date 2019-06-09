const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', async message => {
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}kick`)) {
    //message.channel.send("kick")

    let member = message.mentions.members.first();
    member.kick().then((member) => {
      message.channel.send(":wave: " + member.displayName + " has been yeeted out of the fucking universe!")
    })
  }

  if(message.content.startsWith(`${prefix}ban`)) {
    //message.channel.send("kick")

    let member = message.mentions.members.first();
    member.ban().then((member) => {
      message.channel.send(":wave: " + member.displayName + " has been yeeted out of the fucking universe and will never return!")
    })
  }
})

client.login(token);
