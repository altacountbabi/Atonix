const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'update',
   aliases: ['update'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner)) {
            if (!args[0]) {
                message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Update').setDescription('You have not specified a status type, status types:\n working\n updating\n patched') ] })
                return
            }
            const type = args[0]
            const status_channel_id = config.channels.atonix_status
            const channel = client.channels.cache.get(status_channel_id)
            if (type.toLowerCase().startsWith('working')) {
                if (!args.slice(1).join(' ')) {
                    message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Update').setDescription('You have not specified a download link for atonix') ] })
                    return
                }
                const link = args.slice(1).join(' ')
                if (!link.startsWith('https://')) {
                    message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Download').setDescription('Invalid link (eat my ass)') ] })
                    return
                }
                channel.bulkDelete(50)
                const info_embed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Atonix Status')
                    .setDescription('Green: Updated/Working\nOrange: In Development/Updating\nRed: Patched/Not Working')
                    
                channel.send({ embeds: [info_embed] })
                channel.send({ embeds: [ new Discord.MessageEmbed().setColor('GREEN').setTitle('Download').setDescription(`Atonix is updated!\n${link}`) ] })
                return
            } else if (type.toLowerCase().startsWith('updating')) {
                channel.bulkDelete(50)
                const info_embed = new Discord.MessageEmbed()
                    .setColor('ORANGE')
                    .setTitle('Atonix Status')
                    .setDescription('Green: Updated/Working\nOrange: In Development/Updating\nRed: Patched/Not Working')
                    
                channel.send({ embeds: [info_embed] })
                channel.send({ embeds: [ new Discord.MessageEmbed().setColor('ORANGE').setTitle('Download').setDescription('Atonix is being updated, atonix should work soon') ] })
                return
            } else if (type.toLowerCase().startsWith('patched')) {
                channel.bulkDelete(50)
                const info_embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Atonix Status')
                    .setDescription('Green: Updated/Working\nOrange: In Development/Updating\nRed: Patched/Not Working')
                    
                channel.send({ embeds: [info_embed] })
                channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Download').setDescription('Atonix is currently patched!') ] })
                return
            } else {
                message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Update').setDescription('Unkown update type') ] })
                return
            }
        } else {
            message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Update').setDescription('You are not allowed to use this command') ] })
        }
    },
}