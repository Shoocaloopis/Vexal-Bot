const Discord = require('discord.js')
const {
    prefix,
    token
} = require('./configuration.json')
const bot = new Discord.Client()
const fs = require('fs')

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
bot.prefix = prefix
fs.readdir("./cmds", (err, files) => {
    if(err) throw err
    
    let jsfiles = files.filter(f => f.split(".").pop() === 'js')

    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
    console.log(`Loaded ${files.length} commands.`)
})

String.prototype.capitalize = function(allWords) {
    if (allWords)
    return this.split(/ +/g)
    .map(
        str => str.charAt(0).toUpperCase() + str.toLowerCase().substring(1).join(" ")
    )
    else return this.toLowerCase().charAt() + this.toLowerCase(0).substring(1)
}

bot.on('ready', () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Over Team Vexal",{type: "WATCHING"})
})

bot.on('message', async (message) => {
    if(message.author.bot) return
    
    if(message.content.startsWith(prefix)) {
        let args = message.content
        .substring(prefix.length)
        .trim()
        .split(/ +/g)

        let messageArray = message.content.split(" ")
        let cmds = messageArray[0].toLowerCase()

        let cmd = bot.commands.get(args[0].toLowerCase()) || bot.commands.get(bot.aliases.get(cmds.slice(prefix.length)))

        if(cmd) cmd.run(bot, message, args)
    }
})



bot.login(token)