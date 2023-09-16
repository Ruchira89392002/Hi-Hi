const YT = require('../../lib/YT')
const yts = require('yt-search')

module.exports = {
    name: 'ytaudio',
    aliases: ['song'],
    category: 'media',
    exp: 5,
    description: 'Downloads given YT Video and sends it as Audio',
    async execute(client, flag, arg, M) {
        const link = async (term) => {
            const { videos } = await yts(term.trim())
            if (!videos || !videos.length) return null
            return videos[0].url
        }
        if (!arg) return M.reply('ᴘʟᴇᴀᴄᴇ ᴇɴᴛᴇʀ ᴛʜᴇ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ ❗')
        const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
        const term = validPathDomains.test(arg) ? arg.trim() : await link(arg)
        if (!term) return M.reply('🔗 ᴘʟᴇᴀᴄᴇ ᴇɴᴛᴇʀ ᴛʜᴇ ʏᴏᴛᴜʙᴇ ʟɪɴᴋ- ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ📣')
        if (!YT.validateURL(term.trim())) return M.reply('ʏᴏᴜʀ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ ɪꜱ ɴᴏᴛ ꜱᴜᴘᴘᴏʀᴛꜱ❌ ᴘʟᴇᴀᴄᴇ ᴇɴᴛᴇʀ ᴛʜᴇ ʏᴏᴛᴜʙᴇ ʟɪɴᴋ࿊')
        const { videoDetails } = await YT.getInfo(term)
        M.reply(`client.sendMessage(
            M.from,
            {
                image: {
                    url: `https://i.ibb.co/pn6WnqM/Picsart-23-09-02-18-11-08-323.jpg`
                }`*DARK SHDOW V2......*
                ⷡ ⷷ ᷤ ⷮ  ⷲ ⷩ ⷮ ᷤ ᷧ ⷬ ⷬ  ⷡ ⷪ ⷮ
┃▬▬▬▬▬▬▬▬▬▬▬▬\n 
┃➤ *DARK SHADOW SONG DOWNLOADER*
┃
┃│ ╭───────────────◆\n
│⿻ ${no++}
│  *NO* ✨\n
│⿻ *Title:* ${i.title}\n
│⿻ *Views:*  ${i.ago}\n
│⿻ *Author:* ${i.author.name}\n
│
│ ⿻ *Url* : ${anu.url}\n
╰────────────────◆\n
┃
┃➤  *Thanks for using This command*
┃│ 
┃│  *DARK SHADOW V2*\n
┃▬▬▬▬▬▬▬▬▬▬▬▬\n')
        M.reply('🔥♻ ᴛʜᴀɴᴋꜱ ᴅᴏᴡɴʟᴏᴅɪɴɢ ʏᴏᴜʀ ꜱᴏɴɢ ᴜꜱɪɴɢ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ🔥') 
        let text = `*Title:* ${videoDetails.title} | *Type:* Audio | *From:* ${videoDetails.ownerChannelName}`
        client.sendMessage(
            M.from,
            {
                image: {
                    url: `https://i.ytimg.com/vi/${videoDetails.videoId}/maxresdefault.jpg`
                },
                caption: text
            },
            {
                quoted: M
            }
        )
        if (Number(videoDetails.lengthSeconds) > 1800) return M.reply('Cannot download audio longer than 30 minutes')
        const audio = YT.getBuffer(term, 'audio')
            .then(async (res) => {
                await client.sendMessage(
                    M.from,
                    {
                        document: res,
                        mimetype: 'audio/mpeg',
                        fileName: videoDetails.title + '.mp3'
                    },
                    {
                        quoted: M
                    }
                )
            })
            .catch((err) => {
                return M.reply(err.toString())
                client.log(err, 'red')
            })
    }
}
//M.quoted.mtype === 'imageMessage',
