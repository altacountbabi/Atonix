const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'kick',
   aliases: ['kick'],
   cooldown: 0,
   guildOnly: true,
   async execute(client, message, args) {
        const user = message.member
        if (user.roles.cache.has(config.roles.dev) || user.roles.cache.has(config.roles.owner)) {
            const reason = args.join(' ')
            console.log(reason)
            if (!message.mentions.members.first()) {
                message.channel.send({ embeds: [ 
                    new Discord.MessageEmbed()
                        .setColor('RED')
                        .setTitle('Kick')
                        .setDescription('Please mention a user to kick')
                ] })
                return
            }
            const mention = message.mentions.members.first()
            message.channel.send({ embeds: [ 
                new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Kick')
                    .setDescription(`${mention.tag} has been kicked`)
            ] })
            mention.send({ embeds: [ 
                new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Kick')
                    .setDescription(`You have been kicked from: ${message.guild.name} by: ${message.author.tag}`)
            ] })
            //mention.kick()
        } else {
            message.channel.send({ embeds: [ 
                new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Kick')
                    .setDescription('You are not allowed to use this command')
            ] })
        }
    },
}