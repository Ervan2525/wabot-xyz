let axios = require("axios");
let handler = async(m, { conn, text }) => { 
    axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then((res) => {
    let hasil = `➸  *Tanggal : ${res.data.tanggal}*\n\n➸ keterangan : ${res.data.keterangan}`
    conn.reply(m.chat, hasil ,MessageType.m)
    })
}
handler.help = ['cektanggal']
handler.tags = ['internet']
handler.command = /^(cektanggal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
