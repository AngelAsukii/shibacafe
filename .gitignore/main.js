const Discord = require('discord.js');
const fs = require("fs");
var bot = new Discord.Client();
var prefix = ("//");
const reponse = JSON.parse(fs.readFileSync('./reponse.json', "utf8"));
const blague = JSON.parse(fs.readFileSync('./blague.json', "utf8"));
const ytdl = require('ytdl-core');
const queue = new Map();
const rainbowrole = require('./rainbowrole.json');
const randomColour = require("randomcolor");
const size    = rainbowrole.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/4); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/4); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/4); // 240 deg

  rainbow[i] = '#'+ blue + green + red;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 3 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = rainbowrole.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    bot.guilds.get(servers[index]).roles.find('name', rainbowrole.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(rainbowrole.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on('ready', () => {
    bot.user.setActivity("//help | Nage dans sa tasse de thé");
    bot.user.setStatus("dnd");
    setInterval(changeColor, rainbowrole.speed);
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', async message => {

    //Commande help
    if (message.content.startsWith(prefix + "help")) {
        var help_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle("Mes Commandes")
            .setThumbnail("https://i.imgur.com/iHE4asj.png")
            .addField("Préfix", "``/``")
            .addField("Fun", "`hug` `kiss` `slap` `blush` `8ball` `joke`")
            .setFooter("Create by Tσhʀυ | Ληɢεł~Sαмα#1111 (Maître Suprême des Nekos :3)")

        message.channel.sendEmbed(help_embed);
        console.log("On a demandé mes commandes !");
    }

    //--------------------------------------------------------FUN--------------------------------------------------

    //Commande joke
    if (message.content.startsWith(prefix + "joke")) {

        var blague_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField('Voici la blague: ', blague[Math.round(Math.random() * blague.length)])
            .setFooter("Tro dro le mdrr")
        message.channel.send(blague_embed);
    }

    //Commande 8ball
    if (message.content.startsWith(prefix + "8ball")) {

        var args = message.content.split(' ').join(' ').slice(7);

        if (!args) return message.channel.send("Tu dois me poser une question")

        var ball_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(':8ball: 8Ball')
            .addField('Question :', `${args}`)
            .addField('Réponse :', reponse[Math.round(Math.random() * reponse.length)])
            .setFooter('Je suis un voyant')
        message.channel.send(ball_embed);
    }
  
    //Commande pat
    if (message.content.startsWith(prefix + "pat")) {

        let user = message.mentions.members.first() || message.guild.members.get(args.join(" "))

        var caresse = [

            "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif",
            "https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
            "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
            "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
            "https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif",
            "https://i.imgur.com/2HXcamA.gif",
            "https://i.imgur.com/S9ekaOA.gif",
            "https://i.imgur.com/x1VhFPJ.gif",
            "https://i.imgur.com/1ZxMrDT.gif",
            "https://i.imgur.com/9l1C8IF.gif",
            "https://i.imgur.com/D2Nl5QO.gif",
            "https://i.imgur.com/tnfoE9T.gif",
            "https://i.imgur.com/QCqMTH0.gif",
            "https://i.imgur.com/NF5dP54.gif",
            "https://i.imgur.com/mIbrDU4.gif",
            "https://i.imgur.com/bv5FtHi.gif"
        ];

        var gif = caresse[Math.floor(Math.random() * caresse.length)];

        var caresse_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(message.author.username + " **caresse** " + `${user.displayName}`)
            .setImage(gif)
        message.channel.send(caresse_embed);

    }

    //Commande slap
    if (message.content.startsWith(prefix + "slap")) {

        let user = message.mentions.members.first() || message.guild.members.get(args.join(" "))

        var slap = [

            "https://i.imgur.com/sthDe8t.gif",
            "https://i.imgur.com/ZvbBcVc.gif",
            "https://i.imgur.com/MlkdXOR.gif",
            "https://i.imgur.com/CrkSE0l.gif",
            "https://i.imgur.com/0PSlGZP.gif",
            "https://i.imgur.com/p9GPpZn.gif",
            "https://i.imgur.com/jU4cAa0.gif",
            "https://i.imgur.com/IpOAdn8.gif",
            "https://i.imgur.com/io19Vx2.gif",
            "https://i.imgur.com/bvRs1kQ.gif",
            "https://i.imgur.com/HoGjLHX.gif",
            "https://i.imgur.com/a1OSgl0.gif",
            "https://i.imgur.com/02C8v5v.gif",
            "https://i.imgur.com/Uq1HIxg.gif",
            "https://i.imgur.com/Srl5f51.gif",
            "https://i.imgur.com/V0wFSyX.gif"
        ];

        var gif2 = slap[Math.floor(Math.random() * slap.length)];

        var slap_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(message.author.username + " **gifle** " + `${user.displayName}`)
            .setImage(gif2)
        message.channel.send(slap_embed);

    }    

    //Commande blush
    if (message.content.startsWith(prefix + "blush")) {

        let user = message.mentions.members.first() || message.guild.members.get(args.join(" "))
    
        var blush = [
    
            "https://i.imgur.com/YyM2whQ.gif",
            "https://i.imgur.com/Kl8RnqS.gif",
            "https://i.imgur.com/O3uIxuA.gif",
            "https://i.imgur.com/tvcTwcB.gif",
            "https://i.imgur.com/yZocuLo.gif",
            "https://i.imgur.com/nibyFww.gif",
            "https://i.imgur.com/GyywX99.gif",
            "https://i.imgur.com/XrO9L45.gif",
            "https://i.imgur.com/Wx6yaI8.gif",
            "https://i.imgur.com/VYuF5DK.gif",
            "https://i.imgur.com/0EAZa3M.gif",
            "https://i.imgur.com/A3tQ4Hu.gif",
            "https://i.imgur.com/dvZjH5h.gif",
            "https://i.imgur.com/FnC2jKP.gif",
            "https://i.imgur.com/XF9zDgS.gif",
            "https://i.imgur.com/RU8Pc5C.gif"
        ];
    
        var gif3 = blush[Math.floor(Math.random() * blush.length)];
    
        var blush_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(message.author.username + " **rougis devant** " + `${user.displayName}`)
            .setImage(gif3)
        message.channel.send(blush_embed);
    
    }
    
    //Commande hug
    if (message.content.startsWith(prefix + "hug")) {

        let user = message.mentions.members.first() || message.guild.members.get(args.join(" "))
    
        var hug = [
    
            "https://i.imgur.com/PYU0Xk4.gif",
            "https://i.imgur.com/eP7jsqf.gif",
            "https://i.imgur.com/y1COLET.gif",
            "https://i.imgur.com/NyWH1gO.gif",
            "https://i.imgur.com/DG0Y5vE.gif",
            "https://i.imgur.com/eXmuDmr.gif",
            "https://i.imgur.com/bvLgHQ1.gif",
            "https://i.imgur.com/D08rOUy.gif",
            "https://i.imgur.com/68h1ttA.gif",
            "https://i.imgur.com/udY1oAn.gif",
            "https://i.imgur.com/72PAbP6.gif",
            "https://i.imgur.com/teHmXQ9.gif",
            "https://i.imgur.com/tMv9XoT.gif",
            "https://i.imgur.com/r0zDDwy.gif",
            "https://i.imgur.com/L7Z4pZ3.gif",
            "https://i.imgur.com/SEfGh4g.gif"
        ];
    
        var gif4 = hug[Math.floor(Math.random() * hug.length)];
    
        var hug_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(message.author.username + " **fait un câlin à** " + `${user.displayName}`)
            .setImage(gif4)
        message.channel.send(hug_embed);

    }

    //Commande kiss
    if (message.content.startsWith(prefix + "kiss")) {

        let user = message.mentions.members.first() || message.guild.members.get(args.join(" "))
    
        var kiss = [
    
            "https://i.imgur.com/lruPKA5.gif",
            "https://i.imgur.com/lRD2tvs.gif",
            "https://i.imgur.com/uPdxbOK.gif",
            "https://i.imgur.com/sc1YO9a.gif",
            "https://i.imgur.com/TaESXIF.gif",
            "https://i.imgur.com/obYWvuG.gif",
            "https://i.imgur.com/OjyEdXh.gif",
            "https://i.imgur.com/dTulb0E.gif",
            "https://i.imgur.com/Od3cgFq.gif",
            "https://i.imgur.com/rXESKLy.gif",
            "https://i.imgur.com/uG4urvn.gif",
            "https://i.imgur.com/ncyrwBa.gif",
            "https://i.imgur.com/xkp819H.gif",
            "https://i.imgur.com/mPnJNLw.gif",
            "https://i.imgur.com/n5gGwfE.gif",
            "https://i.imgur.com/x4dUXqH.gif",
            "https://i.imgur.com/K0O6Hoy.gif",
            "https://i.imgur.com/FEMYT16.gif",
            "https://i.imgur.com/v0ixj6W.gif",
            "https://i.imgur.com/aKhWgXw.gif",
            "https://i.imgur.com/LZnq1P2.gif"
        ];
    
        var gif5 = kiss[Math.floor(Math.random() * kiss.length)];
    
        var kiss_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(message.author.username + " **embrasse** " + `${user.displayName}`)
            .setImage(gif5)
        message.channel.send(kiss_embed);

}})
