require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.on("text", (ctx) => {
//   let url = `http://newsapi.org/v2/top-headlines?country=se&apiKey=${process.env.NEWSAPI_TOKEN}`;

//   try {
//     axios.get(url).then((response) => {
//       response.data.articles.map((news) => {
//         ctx.telegram.sendMessage(
//           ctx.chat.id,
//           `Author: ${news.author ?? "Not Found..."}\nSource: ${
//             news.source.name ?? "Not Found..."
//           }`,
//           {
//             reply_markup: {
//               inline_keyboard: [[{ text: news.title, url: news.url }]],
//             },
//           }
//         );
//       });
//     });
//   } catch (error) {
//     throw new Error(error);
//   }
// });

const countryList = {
  ae: "ae",
  ar: "ar",
  at: "at",
  au: "au",
  be: "be",
  bg: "bg",
  br: "br",
  ca: "ca",
  ch: "ch",
  cn: "cn",
  co: "co",
  cu: "cu",
  cz: "cz",
  de: "de",
  eg: "eg",
  fr: "fr",
  gb: "gb",
  gr: "gr",
  hk: "hk",
  in: "in",
  hu: "hu",
  id: "id",
  ie: "ie",
  il: "il",
  it: "it",
  jp: "jp",
  kr: "kr",
  lt: "lt",
  lv: "lv",
  ma: "ma",
  mx: "mx",
  my: "my",
  ng: "ng",
  nl: "nl",
  no: "no",
  nz: "nz",
  ph: "ph",
  pl: "pl",
  pt: "pt",
  ro: "ro",
  rs: "rs",
  ru: "ru",
  sa: "sa",
  se: "se",
  sg: "sg",
  si: "si",
  sk: "sk",
  th: "th",
  tr: "tr",
  tw: "tw",
  ua: "ua",
  us: "us",
  ve: "ve",
  za: "za",
};

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
  //   Markup.callbackButton("👍", "like"),
  //   Markup.callbackButton("👎", "dislike"),
  Object.values(countryList).map((value) =>
    Markup.callbackButton(value, value)
  ),
]).extra();

bot.command("getnews", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.from.id,
    "Choose a country",
    inlineMessageRatingKeyboard
  );
});

bot.launch();

// https://github.com/EdJoPaTo/telegraf-inline-menu
