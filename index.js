const { Client, Intents, Interaction, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');


client.on("ready", () => {
  client.user.setActivity('des films de mia khalifa', { type: 'STREAMING', url: 'https://discordapp.com/' });
})



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

client.on("message", (message) => {
  if(message.content === "help") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('cancel')
        .setLabel('Compris !')
        .setStyle('SUCCES'),
    );
    setTimeout(function(){
      message.reply({ content: [embed1], components: [row] });
   }, 2000);
   
}
});

client.on("message", (message) => {
  if(message.content === "!r") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('10min')
        .setLabel('10 min')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('30min')
        .setLabel('30 min')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('1h')
        .setLabel('1h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('2h')
        .setLabel('2h')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('page2')
        .setLabel('Voir plus de délais ')
        .setStyle('SECONDARY'),
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
     interaction.message.delete()
  }
  if (interaction.customId === "10min") {
    interaction.reply("A dans 10 minutes bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
   }, 600000);
   interaction.message.delete()
  }
  if (interaction.customId === "30min") {
    interaction.reply("A dans 30 minutes bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 1800000);
  interaction.message.delete()
  }
  if (interaction.customId === "1h") {
    interaction.reply("A dans 1h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 3600000);
  interaction.message.delete()
  }
  if (interaction.customId === "2h") {
    interaction.reply("A dans 2h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 7200000);
  interaction.message.delete()
  }
  if (interaction.customId === "3h") {
    interaction.reply("A dans 3h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 10800000);
  interaction.message.delete()
  }
  if (interaction.customId === "6h") {
    interaction.reply("A dans 6h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 21600000);
  interaction.message.delete()
  }
  if (interaction.customId === "9h") {
    interaction.reply("A dans 9h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 32400000);
  interaction.message.delete()
  }
  if (interaction.customId === "back") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('10min')
        .setLabel('10 min')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('30min')
        .setLabel('30 min')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('1h')
        .setLabel('1h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('2h')
        .setLabel('2h')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('page2')
        .setLabel('Voir plus de délais ')
        .setStyle('SECONDARY'),
    );
    

   interaction.reply({ content: 'Bien ouej, mets un timer maintenant', components: [row] });
   interaction.message.delete()
} 
  if (interaction.customId === "cancel") {
    interaction.message.delete()
  }
  if (interaction.customId === "page2") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('6h')
        .setLabel('6h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('9h')
        .setLabel('9h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('back')
        .setLabel('Retour')
        .setStyle('SECONDARY'),
      new MessageButton() 
        .setCustomId('cancel')
        .setLabel('Quitter')
        .setStyle('DANGER'),
      );  
        interaction.reply({ content: "J'espere que tu trouvera ton bonheur", components: [row] });
  interaction.message.delete()
  }
};
})


client.login('ODkwMTI1Nzc2NjE4NDE4MTk4.YUrQOg.0cvdyCQVfUM7XDmVR0af_uLsjhk');