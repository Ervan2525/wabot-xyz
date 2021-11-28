let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}kpop\nSilahkan ketik: ${usedPrefix}kpop [query]\nContoh: ${usedPrefix}kpop bts\n\nquery yang tersedia:\nbts, blackpink, exo`, m)
    if (args[0] == 'blackpink' || args[0] == 'bts' || args[0] == 'exo') {
        fetch('https://raw.githubusercontent.com/jaya255/result_file/main/random/kpop/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomkpop = body.split('\n')
                let kpop = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                conn.sendFile(m.chat, kpop, '', watermark, m)
            })
            .catch(() => {
                conn.reply(m.chat, '[ ❗ ] Tidak dapat menemukan anime!', m)
            })
    } else {
        conn.reply(m.chat, `Maaf Query Tidak Tersedia. Silahkan Ketik ${usedPrefix}anime Untuk Melihat List Query`, m)
    }

}

handler.help = ['kpop <query>']
handler.tags = ['internet']
handler.command = /^(kpop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
