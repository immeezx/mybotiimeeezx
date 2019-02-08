 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!a!'

client.on('ready', () => {
    console.log("connected as " + client.user.tag)
})






client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('لا');
  }
});




 













client.login(process.env.TOKEN); 