const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'react',
   aliases: ['react'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner)) {
            const channelId = message.channel.id
            const messageId = args[0]
            message.client.channels.fetch(channelId).then(channel => {
                channel.messages.fetch(messageId).then(message => {
                    message.react(args[1]);
                })
            })
            message.delete()
            
        } else {
            message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Changelog').setDescription('You are not allowed to use this command') ] })
        }
    },
}