const fs = require('fs');
const path = require('path');

const { Client, Collection, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { DISCORD_TOKEN } = require("./config");
const client = new Client({intents:[Intents.FLAGS.GUILD_MESSAGES]});

client.commands = new Collection();
const commandFiles = fs.readdirSync(path.resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    try {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
    } catch (e) {
        console.error(`Could not configure ${file}`, e);
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);


    const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
            console.log(client.commands.map(cmd => cmd.data.toJSON()));

            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: client.commands.map(cmd => cmd.data.toJSON()) },
            );

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  });

client.login(DISCORD_TOKEN);