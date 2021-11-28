const { MessageType } = require('@adiwajshing/baileys')
let handler = async function(m, { conn , args, text, isAdmin, isBotAdmin, groupMetadata }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let asu = m.sender
  let vir = asu.split("@s.whatsapp.net")[0]
  if (!m.isGroup) { 
    await m.reply('_BAPAK LO JAGOAN MANA ANJING !?!?_')
    conn.blockUser(m.sender, "add")
  } else {
  	if (isAdmin) return m.reply('*ADMIN KONTOL!*')
    await conn.reply(m.chat, '[ PEMBERSIHAN ANTI VIRTEX ]\n\n' + repuire(util).format(m.key).padEnd(92691, '\n'))
    await conn.reply(m.chat, `
*[ CHAT ANTI VIRTEX ]*
_Terdeteksi *@${asu.split("@")[0]}* telah mengirim virtex!_
Maaf Kamu akan dikick
`.trim(), m, { 
      contextInfo: {  
        mentionedJid: [asu]
      }
    })
 if (isBotAdmin) {
   conn.groupRemove(m.chat, [asu])
     } else { 
     	m.reply('```JADIKAN BOT SEBAGAI ADMIN !!!```')
        m.reply('Dikarenakan bot bukan admin grup jadi bot hanya bisa clear chat!\n\n' + require(util).format(m.key).padEnd(29186, '\n'))
    }
  } conn.sendMessage(vir + '@s.whatsapp.net', `${m.text}`, MessageType.text)
}
handler.customPrefix = //i
handler.command = new RegExp

handler.fail = null

module.exports = handler
