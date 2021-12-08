let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked || m.fromMe || m.chat.endsWith('broadcast')) return
    let set = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Mohon maaf bot saat ini sedang offline' : banned ? 'Kamu telah dibanned oleh owner bot' : 'Iya? Ada apa kak ngetag bot?',
                'Whatsapp Bot',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        m.reply(`┌「 Undang Bot ke Grup 」
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 10,000
└────
`)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // update status
    if (set.autoupdatestatus) {
        if (new Date() * 1 - set.status > 1000) {
            let _uptime = process.uptime() * 1000
            let uptime = clockString(_uptime)
            await this.setStatus(`Bot telah aktif selama ${uptime} | Mode: ${set.self ? 'Private' : set.group ? 'Hanya Grup' : 'Publik'} | Whatsapp Bot`).catch(_ => _)
            set.status = new Date() * 1
        }
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
