let linkRegex = /π.PHILIP_RASHANβ β β β β β β β β β β β β β β β β β β β β β β β β β β β β β βπ.PHILIP_RASHAN/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isVirusPhilip = linkRegex.exec(m.text)

    if (chat.antiPhilip && isVirusPhilip) {
      m.reply(`*VIRUS PHILIP TERDETEKSI!*`)
        if (isAdmin || !isBotAdmin) return true
         this.groupRemove(m.chat, [m.sender])
    }
    return true
  }
}
