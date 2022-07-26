const Discord = require('discord.js');

module.exports = {
    name: 'person',
    aliases: ['person'],
    cooldown: 1,
    guildOnly: true,
    execute(client, message, args) {
        const Embeed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Person')
            .setDescription('Here is a fake person:')
            .setImage('https://thispersondoesnotexist.com/image')

        message.reply({ embeds: [Embeed] })
    },
}