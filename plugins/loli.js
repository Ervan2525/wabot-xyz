let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, global.API('hardianto', 'api/anime/loli', {}, 'apikey'), 'loli.jpg', 'Nih loli mu tetap support bot ini ya!', m)
}
handler.help = ['loli']
handler.tags = ['tools']
handler.command = /^loli$/i
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
