const {SlashCommandBuilder} = require('@discordjs/builders');
const {ITCH_URL} = require('../config');

const data = new SlashCommandBuilder()
    .setName('itch')
    .setDescription('Itch!');

module.exports = {
    data,
    async execute(interaction) {
        await interaction.reply({content: ITCH_URL, ephemeral: true});
    }
};
