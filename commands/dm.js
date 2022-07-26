const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'dm',
   aliases: ['dm'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.author.tag
        const name = message.author.username
        if (user == "Whoman#3561") {
            const aa = args[0]
            message.delete()
            message.guild.members.cache.get(aa).send(args.slice(1).join(' '))
        } else {
            message.delete()
            message.author.send("I have your exact location :smile:")
        }
    },
}