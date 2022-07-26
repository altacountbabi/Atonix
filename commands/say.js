const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'say',
   aliases: ['say'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.author.tag
        if (user == "Whoman#3561") {
            message.delete()
            message.channel.send(args.join(' '))
        } else {
            message.author.send("I have your exact location :smile:")
        }
    },
}