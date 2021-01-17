const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '*******';

bot.login(token);
bot.on('ready',() =>{
    bot.user.setActivity('!comandos bot 0.1');
    console.log('estou pronto para ser usado');
});

bot.on('message',message =>{ 
let responseObject = {
    "!oi" : "Bem vindo",
    "!sobre" : "Sou um Bot criado para estudos por Victorhugofny",
    "!comandos" : {
        "embed": {
            "title": "COMANDOS DO BOT (ABAIXO)",
            "description": "Bem vindo, meu [Github](https://github.com/VictorHugofny) meu canal no [Youtube](https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw)",
            "url": "https://github.com/VictorHugofny",
            "color": 116755,
            "footer": {
              "icon_url": "https://i.ibb.co/pJ2CYZw/hugo-nova.png",
              "text": "contato: victorhugofny@gmail.com "
            },
            "thumbnail": {
              "url": "https://i.ibb.co/pJ2CYZw/hugo-nova.png"
            },
            "image": {
              "url": "https://media.discordapp.net/attachments/471386977216757771/800086978027978762/ezgif-7-5989282d1d73.gif?width=473&height=473"
            },
            "author": {
              "name": "Victorhugofny 💻",
              "url": "https://i.ibb.co/pJ2CYZw/hugo-nova.png",
              "icon_url": "https://yt3.ggpht.com/ytc/AAUvwniDaB3tae_Xk071c2z8bc_TE4gtVFGnaA8wVzOmsQ=s900-c-k-c0x00ffffff-no-rj"
            },
            "fields": [
              {
                "name": "!Oi",
                "value": "e receba uma mensagem de boas vindas"
              },
              {
                "name": "!Sobre",
                "value": "Informações sobre o bot"
              },
              {
                "name": "!Comandos",
                "value": "Para ver os comandos"
              },
              {
                "name": "Instagram",
                "value":"@victorhugofny",
                "inline": true
                
              },
              {
                "name": "💻",
                "value": "Bot version 0.1",
                "inline": true
            }
          ]
        }
      }}
if (responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}
});
