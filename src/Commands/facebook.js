import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `▶️ Please send the link of a Facebook video\n\n▶️ EX:\n*${usedPrefix + command}* https://www.facebook.com/satisfy2022/videos/1096430881329744/?d=null&vh=e`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '⚠️️ *PLEASE GIVE A VALID URL.*';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
🗡─── {*🌀 DARK SHADOW 🌀*} ─── ⊰
🗡 *VIDEO TITLE:* ${result.title}
🗡 ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('⭕ *An error.Try again later.*');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;
