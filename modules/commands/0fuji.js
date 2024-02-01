const fs = require("fs");
module.exports.config = {
  name: "hhhhhh",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD",
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "yoru",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("Hello yoru") == 0 ||
    event.body.indexOf("hello yoru") == 0 ||
    event.body.indexOf("hi yoru") == 0 ||
    event.body.indexOf("Hi yoru") == 0
  ) {
    var msg = {
      body: "😊",
      attachment: fs.createReadStream(__dirname + `/noprefix/yoru.mp3`),
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇯🇵", event.messageID, (err) => {}, true);
  }
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};
