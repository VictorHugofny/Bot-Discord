const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '*******';

bot.login(token);
bot.on('ready',() =>{
    bot.user.setActivity('!comandos bot 0.1');
    console.log('estou pronto para ser usado');
});

bot.on('message',message =>{
prefixo = "!"

let responseObject = {
    "bom dia" :"Boomm diaa",
    "oi" :"tudo bem?",
    "tudo": "nicee!",
    "tudo bom" : "fodaa",
    "hugo" : "sou eu mesmo",
    "opa" : "opaaaa!!",
    "!foto" : "https://i.ibb.co/pJ2CYZw/hugo-nova.png",
    "!random" : "https://giphy.com/explore/random",
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
                "name": "!oi",
                "value": "e receba uma mensagem de boas vindas"
              },
              {
                "name": "!sobre",
                "value": "Informações sobre o bot"
              },
              {
                "name": "!comandos",
                "value": "Para ver os comandos"
              },
              {
                "name": "instagram",
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
if (responseObject[message.content.toLowerCase()]){
    try{
        message.channel.send(responseObject[message.content.toLowerCase()]);
    }
    catch(error){
        message.channel.send("ERROR!!!"+error)
    }
}
if (message.content.startsWith("!roleta")){
    message.reply("Roleta Russa, 6 a 1, se você pegar o 1 morre")
    randomNumber = Math.floor(Math.random()* (6 - 1) + 1);
    if (randomNumber== 1){
        message.reply("Morreu, você tirou 1");
    }
    else{
        message.reply("Sobriviveu");
    }
}
});
