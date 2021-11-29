let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) trhow `Masukkan query, contoh: ${usedPrefix +command} Chino Kafuu`
    let res = await fetch(global.API('aqul', '/pinterest', { q: text }, 'apikey'))
    m.reply(global.wait)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let img = `${json.image}`
    let caption = `
Pinterest!
Query: ${text}
`.trim()
await conn.sendFile(m.chat, img, 'pinterest2.jpg', caption, m)
}
handler.command = /^pinterest2$/i
handler.tags = ['internet']
handler.help = ['pinterest2 <query>']
module.exports = handler
