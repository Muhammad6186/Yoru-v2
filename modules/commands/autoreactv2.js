const fs = require("fs");
module.exports.config = {
  name: "autoreactv2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "John Lester",
  description: "No Prefix",
  commandCategory: "no prefix",
  cooldowns: 999999,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if (
    event.body.indexOf("kain") == 0 ||
    event.body.indexOf("Kain") == 0 ||
    event.body.indexOf("yie") == 0 ||
    event.body.indexOf("help") == 0 ||
    event.body.indexOf("pokpok") == 0 ||
    event.body.indexOf("Help") == 0 ||
    event.body.indexOf("chupa") == 0 ||
    event.body.indexOf("Chupa") == 0 ||
    event.body.indexOf("sex") == 0 ||
    event.body.indexOf("Sex") == 0 ||
    event.body.indexOf("bilat") == 0 ||
    event.body.indexOf("belat") == 0 ||
    event.body.indexOf("Bilat") == 0 ||
    event.body.indexOf("Belat") == 0 ||
    event.body.indexOf("Puke") == 0 ||
    event.body.indexOf("puke") == 0 ||
    event.body.indexOf("puday") == 0 ||
    event.body.indexOf("Puday") == 0 ||
    event.body.indexOf("lalaki") == 0 ||
    event.body.indexOf("Lalaki") == 0 ||
    event.body.indexOf("buti pa") == 0 ||
    event.body.indexOf("hehe") == 0 ||
    event.body.indexOf("Hehe") == 0 ||
    event.body.indexOf("mwah") == 0 ||
    event.body.indexOf("Mwah") == 0 ||
    event.body.indexOf("mwuah") == 0 ||
    event.body.indexOf("baby") == 0 ||
    event.body.indexOf("bby") == 0 ||
    event.body.indexOf("babe") == 0 ||
    event.body.indexOf("bby") == 0 ||
    event.body.indexOf("bebe") == 0 ||
    event.body.indexOf("kae") == 0 ||
    event.body.indexOf("sie") == 0 ||
    event.body.indexOf("🙄") == 0 ||
    event.body.indexOf("🤓") == 0 ||
    event.body.indexOf("☕") == 0 ||
    event.body.indexOf("🤗") == 0 ||
    event.body.indexOf("🤭") == 0 ||
    event.body.indexOf("😶") == 0 ||
    event.body.indexOf("🥵") == 0 ||
    event.body.indexOf("😎") == 0 ||
    event.body.indexOf("/shoti") == 0 ||
    event.body.indexOf("😇") == 0 ||
    event.body.indexOf("😊") == 0 ||
    event.body.indexOf("Good") == 0 ||
    event.body.indexOf("good") == 0 ||
    event.body.indexOf("afternoon") == 0 ||
    event.body.indexOf("aftie") == 0 ||
    event.body.indexOf("Afternoon") == 0 ||
    event.body.indexOf("Aftie") == 0 ||
    event.body.indexOf("Morning") == 0 ||
    event.body.indexOf("morning") == 0 ||
    event.body.indexOf("Eve") == 0 ||
    event.body.indexOf("eve") == 0 ||
    event.body.indexOf("dali na") == 0 ||
    event.body.indexOf("marjhun") == 0 ||
    event.body.indexOf("🛸") == 0 ||
    event.body.indexOf("😻") == 0 ||
    (event.body.indexOf("sam") == 0 && !bot.includes(event.senderID))
  ) {
    var msg = {
      body: "",
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true);
  }
  if (
    event.body.indexOf("love") == 0 ||
    event.body.indexOf("shet") == 0 ||
    event.body.indexOf("kantot") == 0 ||
    event.body.indexOf("Kantot") == 0 ||
    event.body.indexOf("kantutan") == 0 ||
    event.body.indexOf("Love") == 0 ||
    event.body.indexOf("Kantutan") == 0 ||
    event.body.indexOf("kantotan") == 0 ||
    event.body.indexOf("kantotan") == 0 ||
    event.body.indexOf("iyutan") == 0 ||
    event.body.indexOf("Iyutan") == 0 ||
    event.body.indexOf("iyutan") == 0 ||
    event.body.indexOf("iyotan") == 0 ||
    event.body.indexOf("Iyotan") == 0 ||
    event.body.indexOf("bold") == 0 ||
    event.body.indexOf("Bold") == 0 ||
    event.body.indexOf("Porn") == 0 ||
    event.body.indexOf("porn") == 0 ||
    event.body.indexOf("pekpek") == 0 ||
    event.body.indexOf("Pekpek") == 0 ||
    event.body.indexOf("Love") == 0 ||
    event.body.indexOf("i love") == 0 ||
    event.body.indexOf("i Love") == 0 ||
    event.body.indexOf("ilove") == 0 ||
    event.body.indexOf("I love") == 0 ||
    event.body.indexOf("I Love") == 0 ||
    event.body.indexOf("Love") == 0 ||
    event.body.indexOf("ilab") == 0 ||
    event.body.indexOf("lalabs") == 0 ||
    event.body.indexOf("Lalabs") == 0 ||
    event.body.indexOf("😙") == 0 ||
    event.body.indexOf("😘") == 0 ||
    event.body.indexOf("😗") == 0 ||
    event.body.indexOf("😙") == 0 ||
    event.body.indexOf("😋") == 0 ||
    event.body.indexOf("mahal") == 0 ||
    event.body.indexOf("Mahal") == 0 ||
    event.body.indexOf("fuck") == 0 ||
    event.body.indexOf("ugh") == 0 ||
    event.body.indexOf("😍") == 0 ||
    event.body.indexOf("iniyot") == 0 ||
    event.body.indexOf("Iniyot") == 0 ||
    event.body.indexOf("eut") == 0 ||
    event.body.indexOf("Eut") == 0 ||
    event.body.indexOf("eutan") == 0 ||
    event.body.indexOf("Eutan") == 0 ||
    event.body.indexOf("eutan") == 0 ||
    event.body.indexOf("pepe") == 0 ||
    event.body.indexOf("Pepe") == 0 ||
    event.body.indexOf("Pekpek") == 0 ||
    event.body.indexOf("Jakol") == 0 ||
    event.body.indexOf("salsal") == 0 ||
    event.body.indexOf("🥰") == 0 ||
    event.body.indexOf("jakul") == 0 ||
    event.body.indexOf("Jakol") == 0 ||
    event.body.indexOf("fingerin") == 0 ||
    event.body.indexOf("Fingerin") == 0 ||
    event.body.indexOf("😻") == 0 ||
    (event.body.indexOf("❤") == 0 && !bot.includes(event.senderID))
  ) {
    var msg = {
      body: "😻",
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
  if (
    event.body.indexOf("sad") == 0 ||
    event.body.indexOf("Sad") == 0 ||
    event.body.indexOf(":(") == 0 ||
    event.body.indexOf("malungkot") == 0 ||
    event.body.indexOf("Malungkot") == 0 ||
    event.body.indexOf("Umay") == 0 ||
    event.body.indexOf("ayaw ko na") == 0 ||
    event.body.indexOf("Ayaw ko na") == 0 ||
    event.body.indexOf("gusto ko ng mamatay") == 0 ||
    event.body.indexOf("stress") == 0 ||
    event.body.indexOf("Stress") == 0 ||
    event.body.indexOf("Gusto ko nang mamatay") == 0 ||
    event.body.indexOf("mamatay na lang ako") == 0 ||
    event.body.indexOf("Mamatay na lang ako") == 0 ||
    event.body.indexOf("bwesit talaga") == 0 ||
    event.body.indexOf("hay") == 0 ||
    event.body.indexOf("Hay") == 0 ||
    event.body.indexOf("Bwesit talaga") == 0 ||
    event.body.indexOf("Piste talaga") == 0 ||
    event.body.indexOf("piste talaga") == 0 ||
    event.body.indexOf("arghh") == 0 ||
    event.body.indexOf("pota!") == 0 ||
    event.body.indexOf("Pota!") == 0 ||
    event.body.indexOf("puta!") == 0 ||
    event.body.indexOf("gago!") == 0 ||
    event.body.indexOf("Gago!") == 0 ||
    event.body.indexOf("mamatay na lahat ng mga") == 0 ||
    event.body.indexOf("Mamatay na lahat ng mga") == 0 ||
    event.body.indexOf("buti pa") == 0 ||
    event.body.indexOf("Buti pa") == 0 ||
    event.body.indexOf("sana namatay") == 0 ||
    event.body.indexOf("Sana namatay") == 0 ||
    event.body.indexOf("umay") == 0 ||
    event.body.indexOf("nakakalungkot") == 0 ||
    event.body.indexOf("Nakakalungkot") == 0 ||
    event.body.indexOf("sakit") == 0 ||
    event.body.indexOf("Sakit") == 0 ||
    event.body.indexOf("ifeel") == 0 ||
    event.body.indexOf("Ifeel") == 0 ||
    event.body.indexOf("i feel") == 0 ||
    event.body.indexOf("I feel") == 0 ||
    event.body.indexOf("i feel") == 0 ||
    event.body.indexOf("😞") == 0 ||
    event.body.indexOf("😨") == 0 ||
    event.body.indexOf("😥") == 0 ||
    event.body.indexOf("😭") == 0 ||
    event.body.indexOf("😓") == 0 ||
    event.body.indexOf("😢") == 0 ||
    event.body.indexOf("😕") == 0 ||
    event.body.indexOf("😑") == 0 ||
    event.body.indexOf("😩") == 0 ||
    event.body.indexOf("😰") == 0 ||
    event.body.indexOf("😟") == 0 ||
    event.body.indexOf("😦") == 0 ||
    event.body.indexOf("hindi na ako") == 0 ||
    event.body.indexOf("Hindi na ako") == 0 ||
    event.body.indexOf("nakakainggit") == 0 ||
    event.body.indexOf("nandi") == 0 ||
    event.body.indexOf("Nandi") == 0 ||
    event.body.indexOf("Nangdi") == 0 ||
    event.body.indexOf("Nangdi") == 0 ||
    event.body.indexOf("bwesit na yan") == 0 ||
    event.body.indexOf("putanginang yan") == 0 ||
    event.body.indexOf("Bwesit na yan") == 0 ||
    event.body.indexOf("hayop na yan") == 0 ||
    event.body.indexOf("piste na yan") == 0 ||
    (event.body.indexOf("tarantado na yan") == 0 &&
      !bot.includes(event.senderID))
  ) {
    var msg = {
      body: "",
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true);
  }
  if (
    event.body.indexOf("bobo") == 0 ||
    event.body.indexOf("Bobo") == 0 ||
    event.body.indexOf("gago") == 0 ||
    event.body.indexOf("Gago") == 0 ||
    event.body.indexOf("suntukan") == 0 ||
    event.body.indexOf("kantutin") == 0 ||
    event.body.indexOf("hayop") == 0 ||
    event.body.indexOf("kantutin") == 0 ||
    event.body.indexOf("Hayop") == 0 ||
    event.body.indexOf("hindot") == 0 ||
    event.body.indexOf("Hayup") == 0 ||
    event.body.indexOf("hayup") == 0 ||
    event.body.indexOf("tangina") == 0 ||
    event.body.indexOf("Tangina") == 0 ||
    event.body.indexOf("tang ina") == 0 ||
    event.body.indexOf("Tang ina") == 0 ||
    event.body.indexOf("bwesit") == 0 ||
    event.body.indexOf("Bwesit") == 0 ||
    event.body.indexOf("Piste") == 0 ||
    event.body.indexOf("piste") == 0 ||
    event.body.indexOf("argh") == 0 ||
    event.body.indexOf("pota") == 0 ||
    event.body.indexOf("Pota") == 0 ||
    event.body.indexOf("puta") == 0 ||
    event.body.indexOf("fuckyou") == 0 ||
    event.body.indexOf("pakyu") == 0 ||
    event.body.indexOf("pakyo") == 0 ||
    event.body.indexOf("may bold") == 0 ||
    event.body.indexOf("kingina") == 0 ||
    event.body.indexOf("Kingina") == 0 ||
    event.body.indexOf("King ina") == 0 ||
    event.body.indexOf("HAHAHA") == 0 ||
    event.body.indexOf("May bold") == 0 ||
    event.body.indexOf("baliw") == 0 ||
    event.body.indexOf("bubu") == 0 ||
    event.body.indexOf("mabaho") == 0 ||
    event.body.indexOf("Mabaho") == 0 ||
    event.body.indexOf("manyakis") == 0 ||
    event.body.indexOf("manyakol") == 0 ||
    event.body.indexOf("ambobo") == 0 ||
    event.body.indexOf("walang utak") == 0 ||
    event.body.indexOf("Walang utak") == 0 ||
    event.body.indexOf("send bold") == 0 ||
    event.body.indexOf("Send bold") == 0 ||
    event.body.indexOf("😆") == 0 ||
    event.body.indexOf("😂") == 0 ||
    event.body.indexOf("🤣") == 0 ||
    event.body.indexOf("bts biot") == 0 ||
    event.body.indexOf("bts") == 0 ||
    event.body.indexOf("BTS") == 0 ||
    event.body.indexOf("Bts") == 0 ||
    event.body.indexOf("bold ni") == 0 ||
    event.body.indexOf("Bold ni") == 0 ||
    event.body.indexOf("may bold si") == 0 ||
    event.body.indexOf("May bold si") == 0 ||
    event.body.indexOf("deputa") == 0 ||
    event.body.indexOf("Deputa") == 0 ||
    event.body.indexOf("hahaha") == 0 ||
    event.body.indexOf("amp") == 0 ||
    event.body.indexOf("Amp") == 0 ||
    event.body.indexOf("tanga") == 0 ||
    event.body.indexOf("Tanga") == 0 ||
    event.body.indexOf("bastos") == 0 ||
    event.body.indexOf("Bastos") == 0 ||
    event.body.indexOf("Punyeta") == 0 ||
    event.body.indexOf("punyeta") == 0 ||
    (event.body.indexOf("Hahaha") == 0 && !bot.includes(event.senderID))
  ) {
    var msg = {
      body: "",
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true);
  }
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};
