cmd({
            pattern: "ban",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ ᴘʟᴇᴀᴄᴇ ᴍᴇɴᴛᴏɪɴ ᴀɴʏ ᴜꜱᴇʀ㉿ ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("Please mention any user.❌ ")
            }


        }
    )