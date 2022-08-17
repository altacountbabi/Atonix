const keep_alive = require('./keep_alive.js')
const Discord = require('discord.js')
const config = require('./json/config.json')
const fs = require('fs')
const { env } = require('process')

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS] })

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/` + file)
    client.commands.set(command.name, command)
}

const cooldowns = new Discord.Collection()

client.once('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`)
})

client.on('rateLimit', () => {
    console.log(' Rate limited :(')
})

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return

    const args = message.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    // If command exist
    if (!command) return

    // Check if command can be executed in DM
    if (command.guildOnly == false && message.channel.type !== 'text') {
        const Embeed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Warning')
            .setDescription(`I cant execute \`${command.name}\` in dms`)

        message.reply({ embeds: [Embeed] })
        return
    }

    // Check if user is in cooldown
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection())
    }
    const now = Date.now()
    const timestamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 3) * 1000

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000
            const Embeed = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setTitle('Warning')
                .setDescription(`You are on cooldown, please wait: ${timeLeft.toFixed(1)}s before using: \`${command.name}\``)

            message.reply({ embeds: [Embeed] }).then(response => {
                setTimeout(() => {
                    response.delete()
                }, 1500)
            })
        }
    } else {
        timestamps.set(message.author.id, now)
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
        // Execute command
        try {
            command.execute(client, message, args)
        } catch (error) {
            console.error(error)
            message.reply('there was an error trying to execute that command!')
        } message.author.roles
    }
})

client.login(process.env.token)
env.NODE_TLS_REJECT_UNAUTHORIZED = 1
