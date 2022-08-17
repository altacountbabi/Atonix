const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'status',
    aliases: ['status'],
    cooldown: 2,
    guildOnly: true,
    async execute(client, message, args) {
        const version = await fetch('http://setup.roblox.com/version').text()
        const response = await fetch('https://cdn.wearedevs.net/software/exploitapi/latestdata.json')
        const body = await response.text()
        const j = JSON.parse(body)
        const patched = j['exploit-module']['patched']

        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Atonix status')
            .addField('Roblox version:', version)
        
        if (patched === true) {
            embed.addField('Atonix', 'Atonix is patched')
        } else {
            embed.addField('Atonix', 'Atonix is working')
        }
        
        message.reply({ embeds: [embed] })
    },
}