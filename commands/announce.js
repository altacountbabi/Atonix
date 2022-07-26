const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'announce',
   aliases: ['announce'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner)) {
            if (!args[0]) {
                message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Announce').setDescription('Please specify what you want to announce') ] })
                return
            }
            const channel_id = config.channels.announcements
            const channel = client.channels.cache.get(channel_id) 
            
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Announcement by: ${message.author.tag}`)
                .setDescription(args.join(' '))

            channel.send({ embeds: [embed] })
            // channel.send({ content: args.join(' '), tts: true }).then((msg) => {
            //     msg.delete()
            // })
            message.delete()
            
        } else {
            message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Announce').setDescription('You are not allowed to use this command') ] })
        }
    },
}