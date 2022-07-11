const functions = require("firebase-functions");

const { Telegraf } = require("telegraf");
const TOKEN = "5456791707:AAFD_AffcRsIeFWVx-pJRBNP87mayVJUExI";
const web_link = "https://retailbot-4eabf.web.app/";
const bot = new Telegraf(TOKEN);
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [[{ text: "Каталог", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();