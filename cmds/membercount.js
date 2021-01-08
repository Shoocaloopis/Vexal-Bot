const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#005CFE")
    .setAuthor("Member Count", message.guild.iconURL())
    .setDescription(`${message.guild.memberCount} Members!`)
    message.channel.send(embed)
}
module.exports.help ={
    name: "membercount",
    aliases: ["membercount"]
}
