const { mediafire } = require("../lib/mediafire.js");

cmd({
            pattern: "mediafire",
            desc: "Downloads zip from Mediafire.",
            category: "media",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `\n*DARK SHDOW V2......*\n
                ⷡ ⷷ ᷤ ⷮ  ⷲ ⷩ ⷮ ᷤ ᷧ ⷬ ⷬ  ⷡ ⷪ ⷮ\n
┃▬▬▬▬▬▬▬▬▬▬▬▬
┃➤ *DARK SHADOW MEDIFIRE FILE  DOWNLOADER*\n
┃
┃│ *Nᴀᴍᴇ* : ${baby1[0].nama}\n
┃│
*Sɪᴢᴇ* : ${baby1[0].size}\n
┃│
┃│
┃*Mɪᴍᴇ* : ${baby1[0].mime}\n
┃│
┃│
┃➤ *Lɪɴᴋ* : ${baby1[0].link}\n
┃│ 
┃│ 
┃▬▬▬▬▬▬▬▬▬▬▬▬\n`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )