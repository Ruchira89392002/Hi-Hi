cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "🛡️", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
          await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/zim-bot/zimbot-v4/blob/ec8216f6e104dd3fdd143779d210c995037a0ba0/Zimbot/alive.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Nipuna rangana.*`
            const alivtxt = `
*Hello, ${citel.pushName},*
This is  ${tlang().title}.
${alivemessage}

🍧Version:-* 0.0.2
🆙Uptime:-* ${runtime(process.uptime())}
👤Owner:-* ${Config.ownername}
🎧Branch:-* ${Config.BRANCH}

● Type ${prefix}menu for my command list.

📗Powered by ${Config.ownername}`;
            let aliveMessage = {
                image: {
                 url:  await botpic(),
                       },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });     

        }
    )