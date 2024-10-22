module.exports.config = {
  name: "hindiorbangla",
  version: "1.0.0",
  permission: 0,
  credits: "ArYan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["☞ 𝐌𝐀𝐒𝐔𝐌 𝐀𝐇𝐀𝐌𝐄𝐃 ❉"];
  var know = hi[Math.floor(Math.random() * hi.length)];

  var link = [
    "https://i.imgur.com/7Ji2d8i.mp4",
    "https://i.imgur.com/6hKwxZk.mp4",
    "https://i.imgur.com/L4NbuHd.mp4",
    "https://i.imgur.com/gtat6EM.mp4",
    "https://i.imgur.com/aXBm2T3.mp4",
    "https://i.imgur.com/3gMoUBi.mp4",
    "https://i.imgur.com/5REbmeY.mp4",
    "https://i.imgur.com/JvIFDaX.mp4",
    "https://i.imgur.com/i06hlez.mp4",
    "https://i.imgur.com/PmiSqdn.mp4",
    "https://i.imgur.com/vcZ7oaH.mp4",
    "https://i.imgur.com/cdECL5Z.mp4",
    "https://i.imgur.com/5VdtOtJ.mp4",
    "https://i.imgur.com/KQtrxGk.mp4",
    "https://i.imgur.com/pg1lTIZ.mp4",
    "https://i.imgur.com/RtENZIG.mp4",
    "https://i.imgur.com/JUYSpp9.mp4",
    "https://i.imgur.com/ccE5lpX.mp4",
    "https://i.imgur.com/7r18FkF.mp4",
    "https://i.imgur.com/eHUQJkZ.mp4",
    "https://i.imgur.com/tXinX47.mp4"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request({ url: encodeURI(link[Math.floor(Math.random() * link.length)]), encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(__dirname + "/cache/15.mp4", body, "binary", callback);
    }
  });
};
