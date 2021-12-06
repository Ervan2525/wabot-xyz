module.exports = {
    async all(m) {
        if (!m.message) return
        this.spam = this.spam ? this.spam : {}
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
                if (this.spam[m.sender].count > 5) {
                    let log = {
                      key: m.key,
                      count: 5,
                      lastspam: 5,
                      sender: m.sender
                    }
                    //global.db.data.users[m.sender].banned = true
                    m.reply('*Spam Terdeteksi!!*' + require(util).format(log))
                    this.reply(global.owner[0] + '@s.whatsapp.net', `*Spam dideteksi oleh bot!*\n\nSender: @${m.sender.split`@`[0]}\nChat: ${m.isGroup ? m.chat : m.sender}\nName sender: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}`.trim(), null, { contextInfo: { mentionedJid: [m.sender] }})
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
    }
}
