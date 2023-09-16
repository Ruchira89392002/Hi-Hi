module.exports = {
    name: 'sc',
    aliases: ['script'],
    category: 'general',
    exp: 100,
    description: 'Get the base repo of the bot',
    async execute(client, flag, arg, M) {
        const image = await client.utils.getBuffer('https://i.ibb.co/pn6WnqM/Picsart-23-09-02-18-11-08-323.jpg')
        
        let caption = ''
        caption += `*ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ  V1* ✨\n\n`
        caption += `👾  *The Creator: ʀᴜᴄʜɪʀᴀ ㊚*\n`
        caption += `👾 *ɴᴜᴍʙᴇʀ: wa.me//94774352146*\n`
        caption += `👨🏻‍💻 *ɴᴜᴍʙᴇʀ: wa.me//94763407452*\n`
        
        caption += `🛡 *𝑇ℎ𝑎𝑛𝑘𝑠 𝑓𝑟𝑜 𝑢𝑠𝑖𝑛𝑔:ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ 𝑤ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝑢𝑒𝑠 𝑎𝑟𝑒 𝑏𝑜𝑡*\n`
        await client.sendMessage(M.from, { image, caption }, { quoted: M })
    }
}
