const { Client, Intents, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton } = require('discord.js');


client.on("ready")

client.on("message", (message) => {
  if(message.content === "!gd") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('timer')
        .setLabel('clique moi fort senpai')
        .setStyle('PRIMARY'),
    );

   message.reply({ content: 'Bien ouej, mets un timer maintenant', components: [row] });
   
}
});

client.on("interactionCreate", async (interaction) => {
  if(interaction.isButton()) {
    if (interaction.customId === "timer") {
      interaction.reply("A dans 22h bg")
      setTimeout(function(){
        interaction.channel.send("<@378513552270557185>, <@328585121928314881> et <@266231840237551616> aka les bg, c'est l'heure");
     }, 79200000);
  }};
})


client.login('ODkwMTI1Nzc2NjE4NDE4MTk4.YUrQOg.0cvdyCQVfUM7XDmVR0af_uLsjhk');