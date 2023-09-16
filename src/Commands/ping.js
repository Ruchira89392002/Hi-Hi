module.exports = {
    name: 'ping',
    aliases: ['speed'],
    category: 'music',
    exp: 1,
    description: 'Bot response in second',
    async execute(client, flag, arg, M) {
        await M.reply(`▣▬▬▬▬▬▬▬▬▬▬▬▬▬▬▣/n

*ᏢᏆΝᏀ:*_${client.utils.calculatePing(M.messageTimestamp, Date.now())} second(s)_*

▣▬▬▬▬▬▬▬▬▬▬▬▬▬▬▣/n

 ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ`)
    }
}
