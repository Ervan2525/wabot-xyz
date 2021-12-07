let linkRegex = /(chan|yamete)/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isGroupWibu = linkRegex.exec(m.text)

    if (chat.antiWibu && isGroupWibu) {
      m.reply(`*WIBU TERDETEKSI!*\n\n` + require(util).format(m.key))
        if (isAdmin || !isBotAdmin) return true
         this.groupRemove(m.chat, [m.sender])
    }
    return true
  }
}
