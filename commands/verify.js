const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
    name: 'verify',
    aliases: ['verify'],
    cooldown: 1,
    guildOnly: true,
    execute(client, message) {
        const unverifiedRoleId = config.verify.unverifiedRoleId
        const roleId = config.verify.roleId
        const channelId = config.verify.channelId
        const user = message.member
        if (message.channel.id === channelId && !user.roles.cache.has(roleId) && user.roles.cache.has(unverifiedRoleId)) {
            const reactions = [
                ':ok:',
                ':ok_hand:',
                ':smile:',
                ':smiley:'
            ]
            function randomReaction() {
                return reactions[Math.floor(Math.random()*reactions.length)];
            }
            const verifyembed = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setTitle('Verification')
                .setDescription('React to this message to verify.')

            message.reply({ embeds: [verifyembed] }).then(vembed => {
                const reaction = randomReaction()
                vembed.react(reaction)
                // Send confirmation in dms
                //setTimeout(() => {
                //    message.delete()
                //    vembed.delete()
                //    user.roles.add(roleId)
                //    const verifyembed = new Discord.MessageEmbed()
                //        .setColor('GREEN')
                //        .setTitle('Verification')
                //        .setDescription(`You have been verified in: ${message.guild.name}`)

                //    message.author.send({ embeds: [verifyembed] })
                //}, 1500)
            })
        }
    },
}