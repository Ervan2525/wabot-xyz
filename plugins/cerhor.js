let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
	let res = await fetch(global.API('LeysCoder', '/api/cerita-horor', {}, 'apikey'))
	let json = await res.json()
	if (!json.result) throw json
	let { title, desc } = json.result
	let hasil = `~> Judul: ${title}\n\n${desc}`
	conn.reply(m.chat, hasil, m)
}
handler.help = ['cerhor']
handler.tags = ['quotes']
handler.command = /^(cerhor)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
