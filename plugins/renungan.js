const fetch = require(node-fetch)
let handler = async(m, { conn }) => {
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/renungan.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  await conn.sendFile(m.chat, json, 'renungan.jpeg', 'Sukses!', m)
}
handler.help = ['renungan']
handler.tags = ['maker']
handler.command = /^(renungan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null

handler.limit = true
module.exports = handler
