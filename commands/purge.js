const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'purge',
   aliases: ['purge'],
   cooldown: 1,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner) || user.roles.cache.has(config.roles['cool person'])) {
            if (!args[0]) {
                message.reply({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Purge').setDescription('Please specify the amount of messages to purge') ] })
            }
            const amount = args[0]
            
            for (let i = amount; i > 0; i-=100) {
                if (i > 100) {
                    message.channel.bulkDelete(100)
                } else {
                    message.channel.bulkDelete(i)
                }
            }
        }
    },
}