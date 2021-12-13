let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => {
  let caption = `Halo!\nSilakan pilih menu bot dibawah!`
  await conn.send3ButtonLoc(m.chat, fs.readFileSync('./src/logo.jpg').buffer(), caption, author, 'ALLMENU', `${usedPrefix}allmenu`, 'MENU SIMPLE', `${usedPrefix}menusimple`, 'OWNER BOT', `${usedPrefix}owner`, m)
}
handler.help = ['menu, help, .?']
handler.tags = ['main']
handler.command = /^(menu|help|/?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
