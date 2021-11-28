let axios = require('axios')

let handler = async(m, { conn, text }) => {
	axios.get(global.API('LeysCoder', '/api/cersex', {}, 'apikey'))
	.then ((res) => {
	let caption = `${res.result}`
    conn.sendFile(m.chat, res.gambar, 'carsex.jpg', caption, m)
    })
}
handler.help = ['cersex']
handler.tags = ['quotes']
handler.command = /^(carsex|cerita_sex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.limit = true

module.exports = handler
