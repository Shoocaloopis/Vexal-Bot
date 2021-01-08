const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#005CFE")
    .setAuthor("Your Information", message.author.displayAvatarURL())
    .addFields(
        {name: "User & tag", value: `${message.author.tag}`},
        {name: "Id", value: `${message.author.id}`},
        {name: "Account created", value: `${message.author.createdAt}`}
    )
    message.channel.send(embed)
}
module.exports.help ={
    name: "myinfo",
    aliases: ["myinfo"]
}