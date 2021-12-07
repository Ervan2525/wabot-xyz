let linkRegex = /(ambe|tempek|matamu|jancok|aing|)/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isAntiJawa = linkRegex.exec(m.text)

    if (chat.antiJawa && isAntiJawa) {
      m.reply(`*JAWA TERDETEKSI!*\n\n` + require(util).format(m.key))
        if (isAdmin || !isBotAdmin) return true
         this.groupRemove(m.chat, [m.sender])
    }
    return true
  }
}
