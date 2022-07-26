const Discord = require('discord.js')
const config = require('../json/config.json')

module.exports = {
   name: 'emoji',
   aliases: ['emoji'],
   cooldown: 2,
   guildOnly: true,
   async execute(client, message, args) {
        message.reply('fuck this command, tons of bugs')    
        return
        let content = args.join(' ').toLowerCase()
        const map = {
            q: ':regional_indicator_q:',
            w: ':regional_indicator_w:',
            e: ':regional_indicator_e:',
            r: ':regional_indicator_r:',
            t: ':regional_indicator_t:',
            y: ':regional_indicator_y:',
            u: ':regional_indicator_u:',
            i: ':regional_indicator_i:',
            o: ':regional_indicator_o:',
            p: ':regional_indicator_p:',
            a: ':regional_indicator_a:',
            s: ':regional_indicator_s:',
            d: ':regional_indicator_d:',
            f: ':regional_indicator_f:',
            g: ':regional_indicator_g:',
            h: ':regional_indicator_h:',
            j: ':regional_indicator_j:',
            k: ':regional_indicator_k:',
            l: ':regional_indicator_l:',
            z: ':regional_indicator_z:',
            x: ':regional_indicator_x:',
            c: ':regional_indicator_c:',
            v: ':regional_indicator_v:',
            b: ':regional_indicator_b:',
            n: ':regional_indicator_n:',
            m: ':regional_indicator_m:',
            one: ':one:',
            two: ':two:',
            three: ':three:',
            four: ':four:',
            five: ':five:',
            six: ':six:',
            seven: ':seven:',
            eight: ':eight:',
            nine: ':nine:',
        }
        content = content.replace('q', map.q)
        content = content.replace('e', map.e)
        content = content.replace('r', map.r)
        content = content.replace('t', map.t)
        content = content.replace('y', map.y)
        content = content.replace('u', map.u)
        content = content.replace('i', map.i)
        content = content.replace('o', map.o)
        content = content.replace('p', map.p)
        content = content.replace('a', map.a)
        content = content.replace('s', map.s)
        content = content.replace('d', map.d)
        content = content.replace('f', map.f)
        content = content.replace('g', map.g)
        content = content.replace('h', map.h)
        content = content.replace('j', map.j)
        content = content.replace('k', map.k)
        content = content.replace('l', map.l)
        content = content.replace('z', map.z)
        content = content.replace('x', map.x)
        content = content.replace('c', map.c)
        content = content.replace('v', map.v)
        content = content.replace('b', map.b)
        content = content.replace('n', map.n)
        content = content.replace('m', map.m)
        content = content.replace('1', map.one)
        content = content.replace('2', map.two)
        content = content.replace('3', map.three)
        content = content.replace('4', map.four)
        content = content.replace('5', map.five)
        content = content.replace('6', map.six)
        content = content.replace('7', map.seven)
        content = content.replace('8', map.eight)
        content = content.replace('9', map.nine)
        message.channel.send(content)
    },
}