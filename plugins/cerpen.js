let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix }) => {
    let res = await fetch(global.API('LeysCoder', '/api/cerpen', {}, 'apikey'))
    let json = await res.json()
    let hasil = `*Judul:* ${json.result.title}\n\n*Pengarang:* ${json.result.pengarang}\n*Kategori:* ${json.result.kategori}\n\n   ${json.result.story}`
    conn.reply(m.chat, hasil, m)
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
