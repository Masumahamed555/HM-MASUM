const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "sadvideo", 
    version: "1.0.0", 
    permssion: 0, 
    premium: false,
    prefix: true,
    credits: "ALVI",
    description: "SOME SAD VIDEO BY X2 SERVER",
    category: " VIDEO", 
    usages: "/sad",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    try {
      const rt = await axios.get("https://x2-video-api.onrender.com/sad")
      const url = rt.data.resultX2.data;
        const response = await axios.get(url, { responseType: "stream" });

        const videoPath = './sad_video.mp4';
        const writer = fs.createWriteStream(videoPath);

        response.data.pipe(writer);

        writer.on('finish', () => {
            api.sendMessage({ body: "╭──────•◈•───────╮\n        ❊ 𝐌𝐀𝐒𝐔𝐌 𝐀𝐇𝐀𝐌𝐄𝐃 ❊       \n-কিছু মানুষকে বলতে ইচ্ছে করে.!!🙂 \n- আপনার দেওয়া কষ্ট আমার রুহু অব্দি কেঁপে গেছে.!!😢💔🥀\n╰──────•◈•───────╯", attachment: fs.createReadStream(videoPath) }, event.threadID);
        });

        writer.on('error', (err) => {
            console.error(err);
        });
    } catch (e) {
        console.log(e);
    }
};
