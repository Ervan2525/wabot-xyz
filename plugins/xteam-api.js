let handler = async m => m.reply(`
Berikut list apikey yang pernah terdaftar
Di web apikey xteam:

166f04d71625d958
92c5180c57c2127a
genbotkey`.trim())
handler.help = ['xteamkey']
handler.tags = ['info']

handler.rowner = true
handler.command = /^xteamkey$/i

module.exports = handler
