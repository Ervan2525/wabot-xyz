let axios = require('axios')
let moment = require('moment-timezone')
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Uhm...username nya mana?'
	let res = await axios.get('https://api.github.com/users/' + args[0])
    .then((res) => res.data)
    .then((res) =>{
    let {
      login,
      type,
      name,
      followers,
      following,
      created_at,
      updated_at,
      public_gists,
      public_repos,
      twitter_username,
      bio, hireable,
      email,
      location,
      blog,
      company,
      avatar_url,
      html_url
    } = res
    let caption = `
[ GITHUB-STALK ]

*Username*: ${login}
*Name*: ${name}
*Followers*: ${followers}
*Following*: ${following}
*Created at*: ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
*Update at*: ${moment(update_at).tz('asia/jakarta').format('HH:mm:ss DD/MM/YYYY')}
*Public Gists*: ${public_gists}
*Public Repos*: ${public_repos}
*Twiter*: ${twiter_username}
*Email*: ${email}
*Location*: ${location}
*Blog*: ${blog}
*Link*: ${html_url}
*Bio*: ${bio}
conn.sendFile(m.chat, avatar_url, 'avatar.jpg', caption, m)
else m.reply(caption)
}
handler.help = ['githubstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(githubstalk)$/i

module.exports = handler
