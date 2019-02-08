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




client.on('message', msg => {
var prefix = "*";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'cc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء شات كتابي اظغط علي الايموجي✏`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('✏').then(r=>{
                              
    
 let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;

 let tt  = message.createReactionCollector(Text, { time: 60000 });

tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});




client.on('message', msg => {
var prefix = "*";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'ve')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('🎤').then(r=>{
                              
    
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

 let ve  = message.createReactionCollector(Voice, { time: 60000 });

ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});




 
 
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 
 
const bot = require('discord.js-musicbot-addon');

bot.start(client, {
  youtubeKey: "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8",
  musichelp : "*help",
 botPrefix : "*"
});






 













client.login(process.env.TOKEN); 
