const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor('#005CFE')
    .setDescription("You need permission to ban members to use this command")
    .setAuthor("Error")
    const args22 = message.content.split(' ').slice(1);
    const args222 = message.content.split(' ').slice(2);
    const target = message.mentions.members.first();

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(needperms);
    if (target) {
        if (args222) {
            target.ban();
            const banembed = new Discord.MessageEmbed()
                .setColor("#005CFE")
                .setDescription(`:white_check_mark: Successfully banned ${target.user.tag}`)
                message.channel.send(banembed)
        }
    }
}
module.exports.help = {
    name: "ban",
    aliases: ["ban"]
}