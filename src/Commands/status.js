cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `

\n*DARK SHDOW V2......*\n
                ⷡ ⷷ ᷤ ⷮ  ⷲ ⷩ ⷮ ᷤ ᷧ ⷬ ⷬ  ⷡ ⷪ ⷮ\n
┃▬▬▬▬▬▬▬▬▬▬▬▬\n
┃➤ *DARK SHADOW CHECK BOT*
┃
┃│      \n🔰 *${tlang().title}* 🔰\n
┃
┃➤ *🌟Description:* This is a dark shadow whatsapp md V2,This is a fast time whatsapp md thanks for using.\n
┃│*⚡Speed:* ${latensie.toFixed(4)} ms\n 
┃│ *🚦Uptime:* ${runtime(process.uptime())}\n
┃│ *🕸Version:* 0.2\n
┃│ *👤User:*  ${Config.ownername}\n
┃│ *👤Owner:   ⷨ  ᷢ ᷢʀᴜᴄʜɪʀᴀ*\n
┃│ *Powered by ${tlang().title}*\n
┃│
┃▬▬▬▬▬▬▬▬▬▬▬▬\n
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)