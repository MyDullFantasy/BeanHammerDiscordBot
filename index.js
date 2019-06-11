const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('The bot is ready and fired up for use!!')
})

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'with my code',
          type: "PLAYING",
          url: "https://www.twitch.tv/MutedOreo"
      }
  });
});

client.on('message', async message => {

  if(message.member.hasPermission(["MANAGE_NICKNAMES"])){
    if(message.content.startsWith(`${prefix}nickset`)){
      member.displayName.replace(message.content.replace`${prefix}nickset`, ''.trim());
    }
  }

  if(message.member.hasPermission(["SEND_MESSAGES"])){
    if(message.content.startsWith(`${prefix}sobble`)){
      message.channel.send('More information about who made the bot is soon to follow.');
    }
  }

    //Moderation & Fun Commands

  if(message.member.hasPermission(["SEND_MESSAGES"])){

    //if(message.content.startsWith(`${prefix}cat`)){
      //message.channel.send('https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn');
      //}

    if(message.content.startsWith(`${prefix}help`)){
      message.channel.send('This is currently being worked on at this very moment.');
      message.channel.send('But these are the current commands: e!sub [subreddit], e!invite, e!github, e!say [insert text], e!hidesay [insert text], e!kick [@ member], e!ban [@ member] & e!sobble.')
      }

    if(message.content.startsWith(`${prefix}sub`)){
      message.channel.send('Have fun on this subreddit!  https://www.reddit.com/r/' + message.content.replace(`${[prefix]}sub`, '').trim());
      }

    if(message.content.startsWith(`${prefix}invite`)){
      message.channel.send('You can invite me to other servers using this link: https://bit.ly/2F2R4VP');
      }
    
    if(message.content.startsWith(`${prefix}github`)){
      message.channel.send('This is the github repo: https://github.com/Spyrincho/BeanHammerDiscordBot ');
      }
      
    if(message.content.startsWith(`${prefix}say`)){
      message.channel.sendMessage(`<@`+message.author.id+`>` + " said: " + '"' + message.content.replace(`${prefix}say`,'').trim() + '"');
      }

    if(message.content.startsWith(`${prefix}hidesay`)){
    message.delete();
    message.channel.sendMessage(`Anonymous` + " said: " + '"' + message.content.replace(`${prefix}hidesay`,'').trim() + '"');
      }
  }

  //Kick & Ban Function 

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
