const Discord = require('discord.js');

module.exports = {
    name: 'close',
    aliases: ['close'],
    cooldown: 0,
    guildOnly: true,
    execute(client, message, args) {
        if (message.channel.name.toLowerCase().includes("s-ticket")) {
            const Embeed = new Discord.MessageEmbed().setColor('RED').setTitle('Ticket').setDescription('Closing ticket..')

            message.reply({ embeds: [Embeed] })
            setTimeout(() => {
                message.channel.delete()
            }, 2000)
        } else;
    }
}