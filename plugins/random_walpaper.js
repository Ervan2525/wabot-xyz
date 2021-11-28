let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let res = await fetch(global.API('JayaApi', '/api/random/walpaper', {}, 'apikey'))
	let json = await res.json()
	if (!json.result) throw json
	let { url } = json.result
	conn.sendFile(m.chat, url, 'walpaper.jpg', '*Powered By JayaGanz*', m)
}
handler.help = ['randomwalpaper']
handler.tags = ['internet']

handler.command = /^randomwalpaper$/i

module.exports = handler
