let fetch = require('node-fetch')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  let res = await fetch(global.APIKeys('xteam', 'brainly', { soal=text }, 'APIKEY'))
  m.reply(res.jawaban)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
