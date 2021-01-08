const Discod = require('discord.js')

module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
    const target = message.mentions.users.first()

    if(target){
    const embed = new Discord.MessageEmbed()
    .setColor("#005CFE")

    .addFields(
        {name: "Username", value: `${target.tag}`},
        {name: "Id", value: `${target.id}`},
        {name: "Account created", value: `${target.createdAt}`},
        {name: "Joined At", value: `${target.joinedAt}`}
    )


    .setImage(target.displayAvatarURL())
    message.channel.send(embed)
    }
}
module.exports.help = {
    name: "whois",
    aliases: ["whois"]
}