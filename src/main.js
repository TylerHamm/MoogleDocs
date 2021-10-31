const { Client, Intents } = require("discord.js");
const { DISCORD_TOKEN } = require("./config");
const client = new Client({intents:[Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

client.login(DISCORD_TOKEN);