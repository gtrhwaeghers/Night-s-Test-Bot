const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () =>{
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});


client.log(process.env.BOT_TOKEN);
