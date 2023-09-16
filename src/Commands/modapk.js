import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `*Provide a valid name to DARK SHADOW 🛡️ you want to download.*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*The file is too high for DARK-SHADOW.🔰*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*The file is too high for DARK-SHADOW.🔰*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*Provide a valid link to DARK-SHADOW 🔰.*`;
  }
};

handler.command = ['app', 'mdapk', 'apk']
export default handler;
