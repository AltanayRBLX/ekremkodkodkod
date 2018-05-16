const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var avatarkullanıcı = message.mentions.members.first()
    const avatar = new Discord.RichEmbed()
    
      .setImage(avatarkullanıcı.user.displayAvatarURL)
     message.channel.sendEmbed(avatar)
     if(!avatarkullanıcı){
message.channel.send("Lütfen kimin avatarını görmek istediğinide yaz")
     }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'İstediğiniz kişinin avatarını gösterir',
  usage: 'avatar [Avatarını görmek istediğiniz kullanıcı]'
};