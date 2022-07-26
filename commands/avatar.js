const Discord = require('discord.js')

module.exports = {
   name: 'avatar',
   aliases: ['av'],
   cooldown: 2,
   guildOnly: true,
   async execute(client, message, args) {
        let user = message.author
        if (message.mentions.users.first()) {
            user = message.mentions.users.first()
        }
        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Avatar`)
            .setDescription(`${user}'s avatar:`)
            .setImage(user.displayAvatarURL({ size: 512, dynamic: true }))
            
        message.reply({ embeds: [embed] })
    },
}