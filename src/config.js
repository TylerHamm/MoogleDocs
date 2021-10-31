// config.js
require('dotenv').config();
module.exports = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  TAGS: [
    "feedback",
    "suggestion",
    "bug",
    "crash"
  ]
};