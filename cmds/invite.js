const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#005CFE")
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
    .setTitle("Team Vexal Invite")
    .setURL("https://discord.gg/bSVDugfub8")

    message.channel.send(embed)
}
module.exports.help = {
    name: "invite",
    aliases: ["invite"]
}