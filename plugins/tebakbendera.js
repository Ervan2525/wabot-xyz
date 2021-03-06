let fetch = require('node-fetch')

let timeout = 100000
let poin = 4999
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    conn.tebakbendera[id] = [
      await conn.sendFile(m.chat, json.img, 'bendera.jpg', `Timeout: *${(timeout / 1000).toFixed(2)} detik*\nKetik *${usedPrefix}tbhint* untuk hint\nBonus: ${poin} XP`, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu habis!\n*${json.name}*`, conn.tebakbendera[id][0])
        delete conn.tebakbendera[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakbendera']
  handler.tags = ['game']
  handler.command = /^tebakbendera/i
  
  module.exports = handler
