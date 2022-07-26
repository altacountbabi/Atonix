const Discord = require('discord.js');

module.exports = {
    name: 'ticket',
    aliases: ['ticket'],
    cooldown: 5,
    guildOnly: true,
    execute(client, message, args) {
        const Embeed = new Discord.MessageEmbed().setColor('RED').setTitle('Ticket').setDescription(`Creating a ticket for ${message.author.username}..`)

        message.reply({ embeds: [Embeed] }).then((wait_embed) => {
            setTimeout(() => {
                wait_embed.delete()
                message.guild.channels.create(`${message.author.username}'s ticket`, {
                    type: 'text'
                }).then(channel => {
                    const Embeed = new Discord.MessageEmbed()
                        .setColor('RED')
                        .setTitle('Ticket')
                        .setDescription(`Hello <@${message.author.id}>, please explain your issue if you dont, we cant help you\ndo \`.close\` to close this ticket`)

                    channel.send({ embeds: [Embeed] })
                    channel.send(`<@${message.author.id}>`).then((msg) => {
                        msg.delete()
                    })
                }, 1500)
            })
        })
    }
}