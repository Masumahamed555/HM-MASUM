const fs = require("fs");
module.exports = {
  config:{
  name: "npx0",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "farhan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/iyNLH0u.mp4','https://i.imgur.com/EjW7Bv3.mp4','https://i.imgur.com/ZPn0wuP.mp4','https://i.imgur.com/npfw648.mp4','https://i.imgur.com/hc52oYZ.mp4','https://i.imgur.com/b8WirjP.mp4','https://i.imgur.com/dY6jiCV.mp4','https://i.imgur.com/I9nn7WB.mp4','https://i.imgur.com/7ACG20T.mp4','https://i.imgur.com/tuy2Msp.mp4','https://i.imgur.com/mlM87b0.mp4','https://i.imgur.com/JpcT6ld.mp4','https://i.imgur.com/fVldT51.mp4','https://i.imgur.com/8HiNu30.mp4','https://i.imgur.com/1B3Qsrm.mp4','https://i.imgur.com/4zyAL2l.mp4','https://i.imgur.com/MN4LdQB.mp4','https://i.imgur.com/2anYaBN.mp4','https://i.imgur.com/tymNJZO.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🥵")==0 || body.indexOf("💥")==0 || body.indexOf("💋")==0 || body.indexOf("💦")==0 || body.indexOf("👄")==0 || body.indexOf("👅")==0 || body.indexOf("🍆")==0 || body.indexOf("🐯")==0 || body.indexOf("🍾")==0 || body.indexOf("🍷")==0 || body.indexOf("🥂")==0) {
    var msg = {
        body: "•❊ ༅༎🩵𝐁𝐨𝐰 𝐱'𝐚𝐧𝐬🪽༎༅ ❊\n⎯͢⎯⃝🫦🥵.! 🙂\n      🥵 _",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
