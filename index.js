const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('The bot is ready and fired up for use!!')
})

client.on('message', async message => {

  if (message.content === `${prefix}ping`) {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  }

  if(message.member.hasPermission(["SEND_MESSAGES"])){
      
    if(message.content.startsWith(`${prefix}help`))
      message.channel.send('This is currently being worked on at this very moment.');

    if(message.content.startsWith(`${prefix}invitebot`))
      message.channel.send('You can invite me to other servers using this link: https://bit.ly/2I81tBL');
    
    if(message.content.startsWith(`${prefix}github`))
      message.channel.send('This is the github repo: https://github.com/Spyrincho/BeanHammerDiscordBot ');
      
    if(message.content.startsWith(`${prefix}say`))
      message.channel.sendMessage(`<@`+message.author.id+`>` + " said: " + '"' + message.content.replace(`${[prefix]}say`,'').trim() + '"');
    
  }

  if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

      //console.log(message.content);

  if(message.content.startsWith(`${prefix}kick`)) {
    //message.channel.send("kick")

    let member = message.mentions.members.first();
    member.kick().then((member) => {
      message.channel.send(":wave: " + member.displayName + " has been yeeted out of the fucking universe!")
    })
  }

    if(message.content.startsWith(`${prefix}ban`)) {
      //message.channel.send("ban")
  
      let member = message.mentions.members.first();
      member.ban().then((member) => {
        message.channel.send(":wave: " + member.displayName + " has been yeeted out of the fucking universe and will never return!")
      })
    }
  

  }
  
})

client.login(token);
