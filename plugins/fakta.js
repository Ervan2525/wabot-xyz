let fetch = require('node-fetch')

let handler = async(m, { conn }) => {
        fetch('https://raw.githubusercontent.com/jaya255/result_file/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let fakta = body.split('\n')
                let unix = fakta[Math.floor(Math.random() * fakta.length)]
                conn.reply(m.chat, unix, m)
              })
              .catch()
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
