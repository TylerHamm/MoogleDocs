// config.js
require('dotenv').config();
module.exports = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  TAGS: [
    "feedback",
    "suggestion",
    "bug",
    "crash"
  ]
};