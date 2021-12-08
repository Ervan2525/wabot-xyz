let fetch = require('node-fetch')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  let res = await fetch(global.APIKeys('xteam', 'brainly', { soal = text }, 'APIKEY'))
  if (res.status !== true) throw await res.text()
  let result = `Soal: ${res.soal}\nJawaban: ${res.jawaban}`
  m.reply(result)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
