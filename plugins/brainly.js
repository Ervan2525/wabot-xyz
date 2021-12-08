let fetch = require('node-fetch')
let handler = async function (m, { conn, text }) {
  if (!text) throw 'Soalnya?'
  let res = await fetch(global.API('xteam', '/brainly', {
    soal: text
  }, 'APIKEY'))
  if (res.status !== true) throw await res.text()
  let json = await res.json()
  let answer = `
${json.jawaban}
`.trim()
  await conn.reply(m.chat, answer, m)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
