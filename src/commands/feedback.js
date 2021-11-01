const {SlashCommandBuilder} = require('@discordjs/builders');
const feedbackStore = require('../feedbackstore');

const {TAGS} = require('../config');

function addTagChoices(option) {
    for (let tag of TAGS) {
        option = option.addChoice(tag, tag);
    }
    return option;
}

const data = new SlashCommandBuilder()
    .setName('feedback')
    .setDescription('Sends some feedback!')
    .addStringOption(option =>
        addTagChoices(
            option.setName('tag')
                .setDescription('The type of feedback')
                .setRequired(true)))
    .addStringOption(option => option.setName('feedback').setDescription('What you want to say').setRequired(true));

module.exports = {
    data,
    async execute(interaction) {
        let msg = await interaction.reply({content: 'Saving feedback...', fetchReply: true});
        try {
            let url = `https://discord.com/channels/${interaction.guild.id ?? '@me'}/${msg.channel_id}/${msg.id}`;
            await feedbackStore.store(interaction.user.id, interaction.options.get('tag').value, url, interaction.options.get('feedback').value);
            await interaction.editReply('Your feedback has been received!')
        } catch (e) {
            console.error(e);
            await interaction.editReply('There was a problem receiving your feedback :(');
        }
    }
};
