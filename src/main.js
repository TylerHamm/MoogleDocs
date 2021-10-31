const { Client, Intents } = require("discord.js");
const { discord_token } = require("./config");
const client = new Client({intents:[Intents.FLAGS.GUILD_MESSAGES]});

const feedbackStore = require('./feedbackstore');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    feedbackStore.store('testauthor', 'bug', 'fakeurl', 'msg msg msg');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

client.login(discord_token);