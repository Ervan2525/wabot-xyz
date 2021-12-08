let handler = async (m, { conn }) => {
  const delay = time => new Promise(res=>setTimeout(res,time));
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users){
    if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net'){
      await conn.groupRemove(m.chat, [user])
      await delay(3000)
    }
  }
}
handler.help = ['kickall']
handler.tags = ['admin']
handler.command = /^(kickall)$/i
handler.owner = false
handler.rowner = true
handler.group = true
handler.fail = null

handler.botAdmin = true
handler.admin = false

module.exports = handler
