const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'jeremy',
	data: new SlashCommandBuilder()
		.setName('jeremy')
		.setDescription('hecking jeremy les go'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#000000')
            .setTitle('jeremy')
            .setDescription('its hecking jeremy')
            .setImage('attachment://jeremy.jpg');

        const feed = new ButtonBuilder()
            .setCustomId('jerome')
            .setLabel('jerome')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
            .addComponents(feed);

        await interaction.reply({
            embeds: [embed],
            components: [row],
            files: ['./res/jeremy.jpg'],
        });
	},
};