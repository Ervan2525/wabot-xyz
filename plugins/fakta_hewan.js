let axios = require('axios')
let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}anime\nSilahkan ketik: ${usedPrefix}faktahewan [query]\nContoh: ${usedPrefix}faktahewan bird\n\nquery yang tersedia:\ndog, cat, panda, fox, bird, koala`, m)
    if (args[0] == 'dog' || args[0] == 'cat' || args[0] == 'panda' || args[0] == 'foks' || args[0] == 'bird' || args[0] == 'koala') {
    await m.reply('Loading...')

        axios.get('https://some-random-api.ml/facts/' + args[0])
            .then(res => res.text())
            .then(({data}) => {
                conn.reply(m.chat, data.fact, m)
            })
            .catch(() => {
                conn.reply(m.chat, '_*ERROR*_', m)
            })
    } else {
        conn.reply(m.chat, `Maaf Query Tidak Tersedia. Silahkan Ketik ${usedPrefix}anime Untuk Melihat List Query`, m)
    }

}

handler.help = ['faktahewan <query>']
handler.tags = ['internet']
handler.command = /^(faktahewan)$/i
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
