cmd({
            pattern: "unban",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ᴍʏ ᴏᴡɴᴇʀ‼️")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("ᴘʟᴇᴀᴄᴇ ᴍᴇɴᴛɪᴏɴ ʙʏ ᴜꜱᴇʀ࿊.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} ɪꜱ ᴜɴʙᴀɴɴᴇᴅ.`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} ɪꜱ ᴀʟʀᴇᴅʏ ʙᴀɴɴᴇᴅ🔥❌.`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} ɪꜱ ꜰʀᴇᴇ ᴀꜱ ʙɪᴅᴇ ɴᴏᴡ ☪`)
                    }
                })
            } catch {
                return citel.reply("ᴘʟᴇᴀᴄᴇ  ᴍᴇɴᴛɪᴏɴツ ᴀɴʏ ᴜꜱᴇʀ.❌")
            }


        }
    )
