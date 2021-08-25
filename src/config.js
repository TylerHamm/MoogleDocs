// config.js
require('dotenv').config();
module.exports = {
  discord_token: process.env.DISCORD_TOKEN,
  tabs: [
    "suggestion",
    "bug",
    "crash"
  ]
};