// config.js
require('dotenv').config();
module.exports = {
  discord_token: process.env.DISCORD_TOKEN,
  spreadsheet_id: process.env.SPREADSHEET_ID,
  tabs: [
    "suggestion",
    "bug",
    "crash"
  ]
};