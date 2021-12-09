const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
	let [text1, text2] = text.split("|")
	if(!text1) return m.reply("Masukkan Teks Utama")
	if(!text2) text2 = "BUG TROLI"
  try{
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: text2,
                            orderTitle: "BUG TROLI",
                            thumbnail: fs.readFileSync("./src/logo.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}

handler.command = /^(troli)$/i
handler.rowner = true

module.exports = handler
