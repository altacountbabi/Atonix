const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'changelog',   
   aliases: ['changelog'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner)) {
            if (!args[0]) {
                message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Changelog').setDescription('Please specify the version atonix is now on.') ] })
                return
            }
            if (!args[1]) {
                message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Changelog').setDescription('Nawhh no changes??? yall are lazy af smh') ] })
                return
            }
            const version = args[0]
            const channel_id = config.channels.changelog
            const channel = client.channels.cache.get(channel_id) 
            
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Changelog:`)
                .setDescription(`Version ${version}\n\`\`\`\n${args.slice(1).join(' ')}\n\`\`\``)

            channel.send({ embeds: [embed] })
            message.delete()
            
        } else {
            message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('RED').setTitle('Changelog').setDescription('You are not allowed to use this command') ] })
        }
    },
}