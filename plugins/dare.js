let handler  = async (m) => {
  m.reply(pickRandom(global.dare))
}
handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}

global.dare = [
"Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram", 
"Ambil beberapa nomor dari kontakmu secara acak dan kirim sms 'Aku hamil' sama mereka.",
"Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
"Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang 'Aku mencintaimu'",
"Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu 'Ini.. adalah makanan yang paling mahal yang pernah kubeli.. Hiks'",
"Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
"Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
"Berdiri di tengah lapangan basket dan berteriak, 'AKU MENCINTAIMU PANGERANKU/PUTRIKU'",
"Beri hormat pada seseorang di kelas, lalu bilang 'Hamba siap melayani Anda, Yang Mulia.'",
"Berjalan sambil bertepuk tangan dan menyanyi lagu 'Selamat Ulang Tahun' dari kelas ke koridor.",
"Berlutut satu kaki dan bilang 'Marry me?' sama orang pertama yang masuk ke ruangan.",
"Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload",
"Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' sama cewek yang menurutmu paling cantik di kelas ini",
"Bilang pada seorang guru, 'Bu/Pak, baju saya terasa sempit' dengan ekspresi memelas.",
"Bilang pada seseorang di kelas, 'Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.'",
"Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang 'Buku ini isinya tidak ada yang bisa memahami'",
"Cabut bulu kaki mu sendiri sebanyak 3x",
"Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.",
"Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.",
"Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.",
"isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.",
"Jabat tangan orang pertama yang masuk ke ruangan ini dan bilang 'Selamat datang di Who Wants To Be a Millionaire!'",
"Kirim sms pada orangtuamu 'Hai, bro! Aku baru beli majalah Playboy edisi terbaru!'",
"Kirim sms pada orangtuamu, 'Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.'",
"Kirim sms pada tiga nomor acak di kontakmu dan tulis 'Aku baru saja menjadi model majalah Playboy.'",
"Makan 1 Sendok makan kecap manis dan kecap asin!",
"Makan sesuatu tapi gak pake tangan.",
"Marah-marah ketemen kamu yang gak dateng padahal udah janjian mau main 'truth or dare' bareng-bareng",
"Mecahin telur pake kepala.",
"Memakan makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.",
"Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.",
"Mengerek tiang bendera tanpa ada benderanya.",
"Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.",
"Meniru style rambut semua temen kamu.",
"Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
"Menyanyikan lagu Iwak Peyek dengan keras di ruang kelas.",
"Minjem sesuatu ke tetangga",
"Minta tandatangan pada seorang guru yang paling kamu benci sambil bilang 'Anda benar-benar orang yang paling saya kagumi di dunia.'",
"Minta uang pada seseorang (random/acak) di jalan sambil bilang 'Saya tidak punya uang untuk naik angkot.'",
"Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.",
"Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal.",
"Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.",
"Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.",
"Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.",
"Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan 'BERI PENGHORMATAN PADA YANG MULIA RAJA' sambil menunjuk setiap orang dengan penggaris.",
"Pake celana kebalik sampe besok paginya.",
"Pegang bola basket, berdiri di depan kelas, dan berteriak, 'ADA YANG TAHU MENGAPA BOLA GOLF INI SANGAT BESAR? APA PABRIKNYA SALAH CETAK?'",
"Peluk orang yang NGGAK kamu sukai di kelas dan bilang, 'Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.'",
"Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan 'aku gila aku gila'",
"Petik 1 bunga lalu tancapkan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
"Pilih orang secara acak di jalan, lalu bilang 'You don't know you're beautiful' (ala One Direction)",
"Pura pura kerasukan ex: kerasukan macan dll",
"Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.",
"Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.",
"Suruh pake kaos kaki buat dijadiin sarung tangan.",
"Suruh pake topi paling aneh/helm paling absurd selama 3 putaraann kedepan.",
"Telpon mama kamu dan bilang 'ma, aku mau nikah secepatnya'",
"Telpon mantan kamu dan bialng 'aku rindu kamu'",
"Teriak 'WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!' ditempat rame",
"Tuker baju sama orang terdekat sampe ronde berikutnya.",
"Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan 'T'",
"Upload video dia nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer",
"Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu"
]
