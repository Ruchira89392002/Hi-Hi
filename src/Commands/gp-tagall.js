let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🔊 Group : *${groupMetadata.subject}*\n🔊 Members : *${participants.length}*${text ? `\n🔊 Message : ${text}\n` : ''}\n┌───⊷ *Mention By  🌀 DARK  SHADOW  V2  🌀*\n` + users.map(v => '💝 @' + v.replace(/@.+/, '')).join`\n` + '\n└──* 🌀 DARK  SHADOW  V2  🌀*──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
