module.exports.config = {
  name: "romanticvideo",
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
    "https://i.imgur.com/xHb1fAb.mp4",
    "https://i.imgur.com/Dfr2WBS.mp4",
    "https://i.imgur.com/ZszXvms.mp4",
    "https://i.imgur.com/p1oTrOR.mp4",
    "https://i.imgur.com/1FfSEr9.mp4",
    "https://i.imgur.com/AzPnBzv.mp4",
    "https://i.imgur.com/c3XFSZD.mp4",
    "https://i.imgur.com/nHZ4N15.mp4",
    "https://i.imgur.com/uMTnmF3.mp4",
    "https://i.imgur.com/j4URGzq.mp4",
    "https://i.imgur.com/lo59II6.mp4",
    "https://i.imgur.com/gyEEGJ4.mp4"
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
