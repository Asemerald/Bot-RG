const { Client, Intents, Interaction, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config();
const token = process.env.BOT_TOKEN


client.on("ready", () => {
  client.user.setActivity('des films de mia khalifa', { type: 'STREAMING', url: 'https://discordapp.com/' });
})

let Commandes_report = ["!r","! R", "! r"];

client.on("message", (message) => {
  if(message.content === "!gd") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('gd')
        .setLabel('clique moi fort senpai')
        .setStyle('PRIMARY'),
    );
    setTimeout(function(){
      message.reply({ content: 'Bien ouej, mets un timer maintenant', components: [row] });
    }, 500);
}
});

client.on("message", (message) => {
  if(message.content === "!fp") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('1h')
        .setLabel('1h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('2h')
        .setLabel('2h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('3h')
        .setLabel('3h')
        .setStyle('PRIMARY'),
      new MessageButton() 
        .setCustomId('4h')
        .setLabel('4h')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('5h')
        .setLabel('5h')
        .setStyle('PRIMARY'),
    );
    
    setTimeout(function(){
      message.reply({ content: 'Bien ouej bg, mets un timer maintenant', components: [row] });
    }, 1000);
}
});

client.on("message", (message) => {
  if(message.content === "help") {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId('cancel')
        .setLabel('Compris !')
        .setStyle('SUCCESS'),
      new MessageButton()
        .setURL("https://github.com/Asemerald/Bot-RG")
        .setLabel("Lien vers le Github du bot")
        .setStyle("LINK")
    );
    setTimeout(function(){
      message.reply({ content: `Hello bg, voici comment je fonctionne : \n - A chaque !r, j'enverrai un message avec en dessous des boutons indiquant des dur??es. Il te suffit simplement de cliquer sur la dur??e qui te convient pour te faire ping au bout du temps que tu a choisis \n - Je r??agis aussi au !gd ! Il te suffit de cliquer sur le boutton pour te faire mentionner 22h apr??s. \n - Pour les !fp, c'est pareil que les !r \n - Il est possible que je restart a des moments de la journ??e, dans ce cas, les timers mit en place seront perdu (rassurez vous c'est rare, mais je pr??viens au cas ou), croyez moi c'est aussi relou pour vous que pour moi \n - Si jamais vous trouvez un bug, avez une question ou une id??e de feature, vous pouvez toujours venir me mp : samohT#2768 (ya des chances que je sois sur le serveur, me ping marche aussi)`, components: [row] });
    }, 0);
}
});

client.on("message", (message) => {
    if(message.content === "!r" || message.content === "! R") {
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
          .setLabel('Voir plus de d??lais ')
          .setStyle('SECONDARY'),
      );
    
    setTimeout(function(){
      message.reply({ content: 'Bien ouej, mets un timer maintenant', components: [row] });
    }, 1000);
}
});

client.on("interactionCreate", async (interaction) => {
  if(interaction.isButton()) {
    if (interaction.customId === "gd") {
      if(interaction.guild.id === '742693291937497168') {
        
        interaction.reply("A dans 22h bg")
      setTimeout(function(){
        interaction.channel.send("<@378513552270557185>, <@328585121928314881>, <@266231840237551616> et <@403176339521142785> aka les bgs, c'est l'heure");
     }, 79200000 );
     interaction.message.delete()
  }
  else { interaction.reply("A dans 22h bg")
    setTimeout(function(){
    interaction.channel.send(`${interaction.user}, l'heure du !gd`);
    }, 79200000 );
    interaction.message.delete()}
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
  if (interaction.customId === "4h") {
    interaction.reply("A dans 4h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 14400000 );
  interaction.message.delete()
  }
  if (interaction.customId === "5h") {
    interaction.reply("A dans 5h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 18000000);
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
  if (interaction.customId === "12h") {
    interaction.reply("A dans 12h bg")
    setTimeout(function(){
      interaction.channel.send(`${interaction.user}, l'heure du !r`);
  }, 43200000);
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
        .setLabel('Voir plus de d??lais ')
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
        .setCustomId('12h')
        .setLabel('12h')
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


client.login(token);