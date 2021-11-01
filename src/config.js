// config.js
require('dotenv').config();
module.exports = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  ITCH_URL: process.env.ITCH_URL,
  TAGS: [
    "feedback",
    "suggestion",
    "bug",
    "crash"
  ]
};