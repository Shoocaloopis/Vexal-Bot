const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#005CFE")
    .setAuthor("Server Information", message.guild.iconURL())
    .addFields(
        {name: "Server Name", value: `${message.guild.name}`},
        {name: "Member Count", value: `${message.guild.members.cache.size}`},
        {name: "Channel Count", value: `${message.guild.channels.cache.size}`},
        {name: "Created", value: `${message.guild.createdAt}`}

    )
    .setThumbnail(message.guild.iconURL())
    message.channel.send(embed)
}
module.exports.help = {
    name: "serverinfo",
    aliases: ["serverinfo"]
}