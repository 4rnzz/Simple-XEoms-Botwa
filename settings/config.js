const fs = require('fs')

const config = {
    owner: "6281264561463",
    botNumber: "6281264561463",
    setPair: "XEOMSPRO",
    thumbUrl: "https://github.com/4rnzz.png",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "XEoms-cn",
        packname: 'XEoms-BOT',
        description: "this script was created by KyuuRzy",
        author: 'https://www.xlanznet.site',
        footer: "XEoms-ui"
    },
    newsletter: {
        name: "XEoms-ch",
        id: "120363301416835342@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@XEoms",
        GitHub: "https://github.com/4rnzz",
        Telegram: "https://t.me/onelanzz",
        ChannelWA: "https://whatsapp.com/channel/0029VaarMc8DZ4Lc33QM3q3N"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
