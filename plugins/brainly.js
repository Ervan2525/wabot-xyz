let axios = require('axios')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  axios.get('https://api.xteam.xyz/brainly?soal=${text}&APIKEY=genbotkey').then((res) => {
  m.reply(res.jawaban)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
