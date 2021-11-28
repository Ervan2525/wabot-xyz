let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, global.API('hardianto', 'api/asupan', {}, 'apikey'), 'asupan.mp4', 'Nih asupan mu, jangan lupa support bot ini terus ya!', m)
}
handler.help = ['asupan']
handler.tags = ['tools']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
