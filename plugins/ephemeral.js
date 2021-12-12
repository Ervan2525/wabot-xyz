let handler = async (m, { conn, args, isBotAdmin, isAdmin, isOwner, usedPrefix }) => {
    if (m.isGroup) {
        if (!isBotAdmin) {
            global.dfail('botAdmin', m, conn)
            throw false
        }
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    m.reply(`*Pilihan tersedia untuk pesan sementara:*\n\n1. 24 jam: ${usedPrefix}ephe 1\n2. 7 hari: ${usedPrefix}ephe 7\n3. 90 hari: ${usedPrefix}ephe 90`)
    if (args[0] == '1') await conn.toggleDisappearingMessages(
        m.chat,
        1 * 24 * 60 * 60
    )
    if (args[0] == '7') await conn.toggleDisappearingMessages(
        m.chat,
        7 * 24 * 60 * 60
    )
    if (args[0] === '90' await conn.toggleDisappearingMessages(
        m.chat,
        90 * 24 * 60 * 60
    )
    else await conn.toggleDisappearingMessages(m.chat, 0)
}
handler.help = ['ephe [1, 7, 90]']
handler.tags = ['tools']
handler.command = /^(ephe)$/i

module.exports = handler
